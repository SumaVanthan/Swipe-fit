import React, { useEffect, useRef } from 'react';
import { BrainCircuit, Shirt, Infinity } from 'lucide-react';
import { Swipe } from '@/components/icons/LucideIcons';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const ValuePropSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div ref={sectionRef} className="py-24 px-4 bg-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-swipefit-electricPurple/20 via-transparent to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto">
        {/* Split screen layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Left side - Glitch text animation */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Fashion Redefined
              </h2>
              <div className="space-y-4 text-2xl md:text-3xl font-bold">
                <p className="animate-glitch-text inline-block">
                  <span className="text-swipefit-neonGreen">Mood-Driven ↗</span>
                </p>
                <p className="animate-glitch-text inline-block delay-100">
                  <span className="text-swipefit-electricPurple">Occasion-Ready ↗</span> 
                </p>
                <p className="animate-glitch-text inline-block delay-200">
                  <span className="text-white">Budget-Savvy ↗</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - UI preview with infinite style options */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-out">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 h-full">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl text-swipefit-neonGreen font-semibold flex items-center gap-2">
                    <Infinity size={20} /> 
                    Discover Your Style
                  </h3>
                  <span className="text-sm text-gray-400">Endless possibilities</span>
                </div>
                
                {/* Stock image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="/Infinite Style Universe.png"
                    alt="Fashion Style Preview" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="font-medium text-lg">Infinite Style Universe</p>
                      <p className="text-sm text-gray-300">Beyond categories and limitations</p>
                    </div>
                  </div>
                </div>
                
                {/* Infinite style carousel */}
                <div className="mt-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {[
                        { name: "Casual", count: "∞" },
                        { name: "Formal", count: "∞" },
                        { name: "Streetwear", count: "∞" },
                        { name: "Vintage", count: "∞" },
                        { name: "Athletic", count: "∞" },
                        { name: "Business", count: "∞" },
                        { name: "Bohemian", count: "∞" }
                      ].map((style, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transform hover:scale-105 transition-transform h-full">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-swipefit-electricPurple to-swipefit-neonGreen opacity-75 rounded-md mr-4 flex items-center justify-center">
                                  <span className="text-black font-bold">{index + 1}</span>
                                </div>
                                <div>
                                  <p className="text-white font-medium">{style.name}</p>
                                  <p className="text-sm text-gray-400">And many more...</p>
                                </div>
                              </div>
                              <div className="text-swipefit-neonGreen text-xs flex items-center">
                                <span className="mr-1">{style.count}</span> styles
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800 hover:text-white" />
                    <CarouselNext className="right-0 bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800 hover:text-white" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key features grid */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-black p-8 rounded-xl neon-border reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-out">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-swipefit-electricPurple to-swipefit-neonGreen flex items-center justify-center mb-6">
                <BrainCircuit className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">AI-Powered Precision</h3>
              <p className="text-gray-400">Our neural network learns your preferences with every swipe, creating a fashion fingerprint as unique as you are.</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-black p-8 rounded-xl neon-border reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-out">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-swipefit-electricPurple to-swipefit-neonGreen flex items-center justify-center mb-6">
                <Shirt className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Closet That Learns You</h3>
              <p className="text-gray-400">Discover pieces that adapt to your lifestyle, budget, and body type-all without endless scrolling.</p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-black p-8 rounded-xl neon-border reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-out">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-swipefit-electricPurple to-swipefit-neonGreen flex items-center justify-center mb-6">
                <img 
                  src="/rotate.png"
                  alt="Rotate Icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Zero Guesswork, All Style</h3>
              <p className="text-gray-400">Swipe right on what you love, left on what you don't. That's all it takes to build your personal style universe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropSection;
