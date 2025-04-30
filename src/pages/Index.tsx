
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ValuePropSection from '@/components/ValuePropSection';
import TeaserSection from '@/components/TeaserSection';
import WaitlistCTA from '@/components/WaitlistCTA';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Easter egg functionality
  useEffect(() => {
    let clickCount = 0;
    const logo = document.getElementById('logo');
    
    if (logo) {
      logo.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount === 3) {
          // Play animation
          logo.classList.add('animate-rotate');
          setTimeout(() => {
            logo.classList.remove('animate-rotate');
            clickCount = 0;
          }, 1000);
          
          // Play sound effect
          const audio = new Audio();
          audio.src = 'data:audio/mp3;base64,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';
          audio.play();
        }
      });
    }
    
    // Add cyber swipe sound effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        const audio = new Audio();
        audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAFRpdGxlAFRpdGxlAABJbmZvAAAAAAA1AAAAMHNvdW5kYml0ZSBnZW5lcmF0ZWQgc291bmQgZWZmZWN0AAAAAAAAAAAAAEItV0lORE9XUy0xMjUy';
        audio.volume = 0.2;
        audio.play();
      });
    });
  }, []);
  
  return (
    <div className="bg-black">
      <HeroSection />
      <ValuePropSection />
      <TeaserSection />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default Index;
