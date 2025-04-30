
import React from 'react';

const TeaserSection: React.FC = () => {
  // Array of organized tags
  const floatingTags = [
    { id: 1, text: "50% OFF", category: "Deals" },
    { id: 2, text: "Late Night Fit", category: "Occasions" },
    { id: 3, text: "Summer Sale", category: "Seasons" },
    { id: 4, text: "Perfect Match", category: "Style" },
    { id: 5, text: "Date Night", category: "Occasions" },
    { id: 6, text: "Trending Now", category: "Popular" }
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
      
      <div className="container mx-auto max-w-4xl z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Fashion Meets Future.
          <br />
          <span className="text-swipefit-electricPurple">(And We're Not Sorry.)</span>
        </h2>
        
        {/* Organized tag categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Group tags by category */}
          {['Deals', 'Occasions', 'Popular'].map(category => (
            <div key={category} className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-medium mb-4 text-swipefit-neonGreen">{category}</h3>
              <div className="space-y-3">
                {floatingTags
                  .filter(tag => tag.category === category)
                  .map(tag => (
                    <div 
                      key={tag.id}
                      className="px-3 py-2 bg-gray-800/70 backdrop-blur text-white border border-gray-700 rounded-md hover:border-swipefit-neonGreen transition-all duration-300"
                    >
                      {tag.text}
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto text-center mt-8">
          <p className="text-lg md:text-xl text-gray-300">
            Imagine a world where your closet evolves as fast as your Instagram feed. We're building it. Stay curious.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeaserSection;
