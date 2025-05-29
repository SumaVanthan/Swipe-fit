import { useState } from 'react';
import { z } from 'zod';

const emailSchema = z.string().email('Please enter a valid email address');

interface EarlyAccessFormProps {
  onSubmit: (email: string) => Promise<void>;
}

export function EarlyAccessForm({ onSubmit }: EarlyAccessFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      // Validate email format
      emailSchema.parse(email);
      
      setIsSubmitting(true);
      await onSubmit(email);
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else if (err instanceof Error && err.message === 'EMAIL_EXISTS') {
        setError('This email is already registered for early access');
      } else {
        setError('An error occurred. Please try again.');
      }
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