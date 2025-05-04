
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "You're on the list!",
        description: "You'll be the first to know when we launch.",
        variant: "default"
      });
      setEmail('');
    } else {
      toast({
        title: "Oops!",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Minimal circular glowing elements */}
      <div className="absolute top-1/4 left-1/5 w-60 h-60 bg-swipefit-electricPurple rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-swipefit-neonGreen rounded-full blur-[100px] opacity-10"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Logo with the text removed */}
        <div className="mb-12 flex flex-col items-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Adding a subtle glow behind the logo for better contrast */}
            <div className="absolute inset-0 bg-black/40 rounded-full blur-md"></div>
            <img 
              src="/lovable-uploads/598d74d5-3cec-40dc-8086-b5192e2041ca.png" 
              alt="SwipeFit Logo" 
              className="w-40 h-40 relative z-10 drop-shadow-[0_0_10px_rgba(138,43,226,0.5)]" 
              id="logo"
            />
          </div>
          {/* Removed the SWIPE FIT text that was here */}
        </div>

        <h2 className="text-2xl md:text-3xl mb-8 text-white max-w-3xl mx-auto">
          Your Closet, Reimagined. <span className="text-swipefit-neonGreen">Swipe. Style. Repeat.</span>
        </h2>
        
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          The next generation of fashion shopping is here. No algorithms guessing—just <span className="text-swipefit-neonGreen">your</span> rules, <span className="text-swipefit-electricPurple">your</span> mood, <span className="text-swipefit-neonGreen">your</span> fit.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button 
            onClick={() => {
              const element = document.getElementById('waitlist');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="swipe-btn"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
