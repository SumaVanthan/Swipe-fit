
import React, { useState } from 'react';

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
    <div className="py-20 px-4 bg-black relative">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
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
        
        <div className="max-w-2xl mx-auto text-center mt-12">
          <p className="text-lg md:text-xl text-gray-300">
            Imagine a world where your closet evolves as fast as your Instagram feed. We're building it. Stay curious.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeaserSection;
