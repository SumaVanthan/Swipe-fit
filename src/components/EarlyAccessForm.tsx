import { useState } from 'react';
import { z } from 'zod';

const emailSchema = z.string().email('Please enter a valid email address');

// Update the component definition to remove the onSubmit prop
export function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      emailSchema.parse(email);
      setIsSubmitting(true);

      // New fetch call to the /api/waitlist endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        // Try to parse the error message from the response
        let errorMessage = 'An error occurred. Please try again.';
        try {
          const errorData = await response.json();
          if (errorData && errorData.message) {
            errorMessage = errorData.message;
          } else if (response.statusText) {
            errorMessage = response.statusText;
          }
        } catch (parseError) {
          // Ignore if parsing fails, use default error message
        }
        // Specific check for email exists, assuming the API might return a specific status or message
        if (response.status === 409) { // Assuming 409 Conflict for existing email
             setError('This email is already registered for early access');
        } else {
             setError(errorMessage);
        }
        setIsSuccess(false); // Ensure success state is false on error
        // throw new Error(errorMessage); // We set error state instead of throwing
        return; // Stop execution if response is not ok
      }

      // Assuming the API returns a success message
      // const result = await response.json();
      // console.log(result.message); // Optional: log success message

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else if (err instanceof Error) {
        // This will now primarily catch network errors or issues before fetch
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      setIsSuccess(false); // Ensure success state is false on error
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-4 bg-green-50 rounded-lg">
        <p className="text-green-700 font-medium">
          Thank you! We'll notify you when we launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isSubmitting}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Get Early Access'}
      </button>
    </form>
  );
} 