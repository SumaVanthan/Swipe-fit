
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const TeaserSection: React.FC = () => {
  // Better organized fashion categories for improved readability
  const styleCategories = [
    {
      title: "Personalized Help",
      tags: [
        { id: 1, text: "Style Assistant" },
        { id: 2, text: "Outfit Recommendations" },
        { id: 3, text: "Personal Shopper" }
      ]
    },
    {
      title: "Seamless Experience",
      tags: [
        { id: 4, text: "One-Tap Purchase" },
        { id: 5, text: "Instant Matching" },
        { id: 6, text: "Virtual Try-On" }
      ]
    },
    {
      title: "Smart Shopping",
      tags: [
        { id: 7, text: "Price Tracking" },
        { id: 8, text: "Best Deals Alert" },
        { id: 9, text: "Budget-Friendly Options" }
      ]
    }
  ];

  // Style universes to emphasize the infinity of styles
  const styleUniverses = [
    "Casual", "Formal", "Streetwear", "Vintage", "Athletic", 
    "Business", "Bohemian", "Minimalist", "Preppy", "Grunge", 
    "Retro", "Hip-Hop", "Punk", "Gothic", "Western", 
    "Androgynous", "Avant-garde", "Artsy", "Y2K", "Cottagecore",
    "Normcore", "Academia", "E-Girl/Boy", "Luxe", "Cyberpunk"
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
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
          Fashion Meets Future.
          <br />
          <span className="text-swipefit-electricPurple">(And We're Not Sorry.)</span>
        </h2>
        
        <div className="mb-12 text-center">
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            We're here to <span className="text-swipefit-neonGreen">simplify</span> your shopping journey and 
            help you discover styles that truly reflect <span className="text-swipefit-neonGreen">who you are</span>.
            Experience a shopping revolution that puts <span className="text-swipefit-neonGreen">you first</span>.
          </p>
        </div>
        
        {/* Style universe slider */}
        <div className="mb-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
          <h3 className="text-2xl font-medium text-swipefit-neonGreen mb-6">
            Endless Style Universe
          </h3>
          
          <div className="mb-8">
            <p className="text-white mb-4">With hundreds of styles and counting...</p>
            <Slider defaultValue={[75]} max={100} step={1} className="mb-2" />
            <div className="flex justify-between text-xs text-gray-400">
              <span>25+ Fashion Categories</span>
              <span>100+ Style Combinations</span>
              <span>∞ Possibilities</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto custom-scrollbar pb-2">
            {styleUniverses.map((style, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-800/70 backdrop-blur text-white text-sm border border-gray-700 rounded-md hover:border-swipefit-neonGreen hover:bg-gray-800 transition-all duration-300"
              >
                {style}
              </span>
            ))}
            <span className="px-3 py-1 bg-swipefit-electricPurple/30 backdrop-blur text-white text-sm border border-swipefit-electricPurple rounded-md">
              + Many More...
            </span>
          </div>
        </div>
        
        {/* Better organized card grid with clear categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {styleCategories.map((category) => (
            <Card key={category.title} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-swipefit-neonGreen transition-all duration-300">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-medium text-swipefit-neonGreen">
                  {category.title}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map(tag => (
                    <span 
                      key={tag.id}
                      className="px-3 py-1 bg-gray-800/70 backdrop-blur text-white text-sm border border-gray-700 rounded-md hover:border-swipefit-neonGreen hover:bg-gray-800 transition-all duration-300"
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto text-center mt-12">
          <p className="text-lg md:text-xl text-gray-300">
            Never before has shopping been this intuitive. We're building a personalized fashion experience that evolves with you, making style discoveries effortless and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeaserSection;
