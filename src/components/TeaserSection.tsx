
import React, { useState, useEffect } from 'react';

const TeaserSection: React.FC = () => {
  const [hoveredTag, setHoveredTag] = useState<number | null>(null);

  // Array of floating tags
  const floatingTags = [
    { id: 1, text: "50% OFF", top: "20%", left: "15%", delay: "0s" },
    { id: 2, text: "Late Night Fit", top: "30%", left: "70%", delay: "0.5s" },
    { id: 3, text: "Summer Sale", top: "70%", left: "25%", delay: "1s" },
    { id: 4, text: "Perfect Match", top: "65%", left: "80%", delay: "1.5s" },
    { id: 5, text: "Date Night", top: "10%", left: "40%", delay: "2s" },
    { id: 6, text: "Trending Now", top: "50%", left: "60%", delay: "1.2s" }
  ];

  return (
    <div className="py-24 px-4 bg-black relative">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Floating tags */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingTags.map((tag) => (
          <div 
            key={tag.id}
            className={`absolute px-3 py-1 bg-gray-800/70 backdrop-blur text-white border border-gray-700 rounded transition-all duration-300 ${hoveredTag === tag.id ? 'opacity-0 scale-125' : 'opacity-70'}`}
            style={{ 
              top: tag.top, 
              left: tag.left, 
              animation: `float 8s ease-in-out infinite ${tag.delay}` 
            }}
            onMouseEnter={() => setHoveredTag(tag.id)}
            onMouseLeave={() => setHoveredTag(null)}
          >
            {tag.text}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto max-w-4xl z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
          Fashion Meets Future.
          <br />
          <span className="text-swipefit-electricPurple">(And We're Not Sorry.)</span>
        </h2>
        
        {/* Video embed - simulated with animation */}
        <div className="my-16 relative rounded-lg overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-swipefit-electricPurple/20 to-swipefit-neonGreen/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                {/* Simulated video with animations */}
                <div className="relative w-full h-full overflow-hidden">
                  {/* Swipe animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-swipefit-neonGreen/20 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Morphing shapes */}
                  <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-sm animate-float"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg blur-sm" style={{ animation: 'float 7s ease-in-out 1s infinite' }}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl text-white font-bold tracking-wider">SWIPE→FIT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-swipefit-neonGreen/30 backdrop-blur-sm flex items-center justify-center hover:bg-swipefit-neonGreen/50 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-300">
            Imagine a world where your closet evolves as fast as your Instagram feed. We're building it. Stay curious.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeaserSection;
