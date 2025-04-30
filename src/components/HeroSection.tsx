
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [swiping, setSwiping] = useState<'left' | 'right' | null>(null);
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

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwiping(direction);
    setTimeout(() => setSwiping(null), 500);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background with animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      
      {/* Circular glowing elements */}
      <div className="absolute top-1/4 left-1/5 w-60 h-60 bg-swipefit-electricPurple rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-swipefit-neonGreen rounded-full blur-[100px] opacity-10"></div>
      
      {/* Grid overlay for cyberpunk effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Logo animation with better blending */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img 
              src="/lovable-uploads/bdb827ec-f63f-47f5-b953-786fdbc2db0f.png" 
              alt="SwipeFit Logo" 
              className="w-32 h-32 mx-auto mb-4 opacity-90 filter drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]" 
              id="logo"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 mix-blend-overlay"></div>
          </div>
          <h1 className="holographic-text text-6xl md:text-8xl font-bold mb-4">SWIPE FIT</h1>
        </div>

        <h2 className="text-2xl md:text-4xl mb-6 text-white max-w-3xl mx-auto">
          Your Closet, Reimagined. <span className="text-swipefit-neonGreen">Swipe. Style. Repeat.</span>
        </h2>
        
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          The next generation of fashion shopping is here. No algorithms guessing—just <span className="text-swipefit-neonGreen">your</span> rules, <span className="text-swipefit-electricPurple">your</span> mood, <span className="text-swipefit-neonGreen">your</span> fit.
        </p>

        {/* Floating phone mockup with swipe animation */}
        <div className="w-full max-w-xs mx-auto my-16 perspective-1000">
          <div className="relative w-full h-[500px] animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-3xl border border-gray-700 shadow-xl transform rotate-3d(1, 1, 1, 10deg)">
              {/* Phone frame */}
              <div className="absolute inset-2 bg-black rounded-2xl border border-gray-800">
                {/* Phone screen */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className={`relative w-4/5 h-4/5 bg-gray-900 rounded-xl flex items-center justify-center transition-transform ${swiping === 'right' ? 'animate-swipe-right' : swiping === 'left' ? 'animate-swipe-left' : ''}`}>
                    {/* Mock clothing item */}
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-300 rounded-md"></div>
                      <p className="mt-4 text-sm text-white">Pink Summer Dress</p>
                      <p className="text-xs text-swipefit-neonGreen">Perfect for: Brunch Date</p>
                    </div>
                  </div>
                </div>
                
                {/* Swipe controls */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8">
                  <button 
                    onClick={() => handleSwipe('left')}
                    className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-lg hover:scale-110 transition-transform"
                  >
                    ✕
                  </button>
                  <button 
                    onClick={() => handleSwipe('right')}
                    className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-lg hover:scale-110 transition-transform"
                  >
                    ✓
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
