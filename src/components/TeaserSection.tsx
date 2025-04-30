
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Grid3x3 } from 'lucide-react';

const TeaserSection: React.FC = () => {
  // Array of organized tags
  const floatingTags = [
    { id: 1, text: "50% OFF", category: "Deals" },
    { id: 2, text: "Late Night Fit", category: "Occasions" },
    { id: 3, text: "Summer Sale", category: "Seasons" },
    { id: 4, text: "Perfect Match", category: "Style" },
    { id: 5, text: "Date Night", category: "Occasions" },
    { id: 6, text: "Trending Now", category: "Popular" },
    { id: 7, text: "Office Ready", category: "Style" },
    { id: 8, text: "Weekend Vibes", category: "Occasions" },
    { id: 9, text: "Seasonal Picks", category: "Seasons" }
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
          <p className="text-xl text-white max-w-2xl mx-auto">
            We're here to <span className="text-swipefit-neonGreen">simplify</span> your shopping experience and 
            help you discover styles that truly reflect <span className="text-swipefit-neonGreen">who you are</span>.
          </p>
        </div>
        
        {/* Card grid layout for better organization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Deals', 'Occasions', 'Style'].map(category => (
            <Card key={category} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-swipefit-neonGreen transition-all duration-300">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-medium text-swipefit-neonGreen flex items-center gap-2">
                  {category === 'Style' && <Grid3x3 size={18} />}
                  {category}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {floatingTags
                    .filter(tag => tag.category === category)
                    .map(tag => (
                      <span 
                        key={tag.id}
                        className="px-3 py-1 bg-gray-800/70 backdrop-blur text-white text-sm border border-gray-700 rounded-md hover:border-swipefit-neonGreen transition-all duration-300"
                      >
                        {tag.text}
                      </span>
                    ))
                  }
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
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
