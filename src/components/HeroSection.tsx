
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
        {/* Minimalist logo with better blending */}
        <div className="mb-12 flex flex-col items-center">
          <img 
            src="/lovable-uploads/bdb827ec-f63f-47f5-b953-786fdbc2db0f.png" 
            alt="SwipeFit Logo" 
            className="w-28 h-28 opacity-90 filter drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]" 
            id="logo"
          />
          <h1 className="text-6xl md:text-7xl font-bold mt-4 text-white">SWIPE FIT</h1>
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
