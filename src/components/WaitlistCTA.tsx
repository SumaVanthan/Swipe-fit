
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const WaitlistCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you when SwipeFit launches.",
        variant: "default",
      });
      setEmail('');
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
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
          />
          <button 
            type="submit" 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-swipefit-neonGreen text-black px-6 py-2 font-medium rounded hover:opacity-90 transition-opacity"
          >
            JOIN
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
