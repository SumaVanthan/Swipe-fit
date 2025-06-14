import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const emailSchema = z.string().email('Please enter a valid email address');

const API_URL = import.meta.env.VITE_API_URL || '';

const WaitlistCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate email format client-side first
      emailSchema.parse(email);
      
      setIsSubmitting(true);
      const response = await fetch(`${API_URL}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.json(); // Parse JSON response

      if (response.ok) { // Status 200-299
        if (response.status === 201) { // HTTP 201 Created (newly added)
          toast({
            title: "Success!",
            description: responseData.message || "You've been added to the waitlist.",
            variant: "default", // Or a success variant if you have one
          });
        } else if (response.status === 200) { // HTTP 200 OK (already exists, or other success)
          toast({
            title: "Got it!", // Or a more appropriate title
            description: responseData.message || "Thanks! We’ve already got your interest.",
            variant: "default", // Or an info variant
          });
        } else { // Other 2xx statuses, treat as generic success
           toast({
            title: "Success!",
            description: responseData.message || "Request successful.",
            variant: "default",
          });
        }
        setEmail(''); // Clear email on any success
      } else {
        // Handle non-ok responses (4xx, 5xx)
        // responseData.error should contain the error message from the worker
        toast({
          title: "Error",
          description: responseData.error || response.statusText || "An error occurred. Please try again.",
          variant: "destructive",
        });
      }

    } catch (err) { // Catches ZodError or network errors (fetch itself failed)
      if (err instanceof z.ZodError) {
        toast({
          title: "Invalid Email",
          description: err.errors[0].message, // Zod provides detailed error messages
          variant: "destructive",
        });
      } else {
        // This catches network errors, or if response.json() fails (e.g. non-JSON error response from server)
        console.error("Fetch or JSON parsing error:", err);
        toast({
          title: "Network Error",
          description: "Could not connect to the server. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div id="waitlist" className="py-24 px-4 bg-black relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-swipefit-electricPurple rounded-full filter blur-[120px] opacity-20"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-swipefit-neonGreen rounded-full filter blur-[100px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-2xl z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            First Access. <span className="text-swipefit-neonGreen">Zero Nonsense.</span>
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="relative mb-6">
          <input
            type="email"
            placeholder="Enter email. Swipe into the future →"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="swipe-input pr-32 py-4 text-lg"
            required
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-swipefit-neonGreen text-black px-6 py-2 font-medium rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'JOINING...' : 'JOIN'}
          </button>
        </form>
        
        <p className="text-sm text-center text-gray-500">
          No spam. Just early perks + a chance to beta-test the impossible.
        </p>
      </div>
    </div>
  );
};

export default WaitlistCTA;
