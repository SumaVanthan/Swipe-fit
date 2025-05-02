
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Trophy, Star, Award } from 'lucide-react';

const TeaserSection: React.FC = () => {
  const [styleCombo, setStyleCombo] = useState<string[]>(["Minimalist", "Casual"]);
  const [sliderValue, setSliderValue] = useState([75]);
  
  // Style universes to emphasize the infinity of styles
  const styleUniverses = [
    "Casual", "Formal", "Streetwear", "Vintage", "Athletic", 
    "Business", "Bohemian", "Minimalist", "Preppy", "Grunge", 
    "Retro", "Hip-Hop", "Punk", "Gothic", "Western", 
    "Androgynous", "Avant-garde", "Artsy", "Y2K", "Cottagecore",
    "Normcore", "Academia", "E-Girl/Boy", "Luxe", "Cyberpunk"
  ];

  // Style attributes for mixing and matching
  const styleAttributes = [
    { name: "Color Palette", options: ["Monochrome", "Pastel", "Bold", "Earth Tones", "Neon", "Neutral"] },
    { name: "Silhouette", options: ["Oversized", "Fitted", "Layered", "Structured", "Flowy", "Boxy"] },
    { name: "Texture", options: ["Denim", "Leather", "Satin", "Knit", "Cotton", "Linen"] },
    { name: "Accessories", options: ["Minimal", "Statement", "Vintage", "Sporty", "Luxury", "DIY"] }
  ];

  // Generate random style combinations
  const generateRandomCombo = () => {
    const style1 = styleUniverses[Math.floor(Math.random() * styleUniverses.length)];
    let style2 = styleUniverses[Math.floor(Math.random() * styleUniverses.length)];
    // Ensure we don't get the same style twice
    while (style1 === style2) {
      style2 = styleUniverses[Math.floor(Math.random() * styleUniverses.length)];
    }
    setStyleCombo([style1, style2]);
  };

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
        
        {/* Gamified Style Universe section */}
        <div className="mb-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-medium text-swipefit-neonGreen">
              Endless Style Universe
            </h3>
            <div className="flex items-center gap-3">
              <Trophy className="text-yellow-400" />
              <span className="text-white">Style Explorer Level: <span className="text-yellow-400">2</span></span>
            </div>
          </div>
          
          {/* Style mixer game */}
          <div className="mb-10">
            <div className="bg-gray-900/80 p-4 rounded-lg mb-6">
              <h4 className="text-white mb-3 text-lg">Style Mixer</h4>
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gray-800/50 p-3 rounded-lg flex-1 mr-2">
                  <p className="text-sm text-gray-400">Style 1</p>
                  <p className="text-swipefit-neonGreen text-lg">{styleCombo[0]}</p>
                </div>
                <div className="text-swipefit-electricPurple text-2xl px-2">+</div>
                <div className="bg-gray-800/50 p-3 rounded-lg flex-1 ml-2">
                  <p className="text-sm text-gray-400">Style 2</p>
                  <p className="text-swipefit-electricPurple text-lg">{styleCombo[1]}</p>
                </div>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg mb-4 border border-swipefit-neonGreen/30">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white">Unique Style Combo:</p>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 h-4 w-4" />
                    <Star className="text-yellow-400 h-4 w-4" />
                    <Star className="text-yellow-400 h-4 w-4" />
                    <Star className="text-gray-600 h-4 w-4" />
                    <Star className="text-gray-600 h-4 w-4" />
                  </div>
                </div>
                <p className="text-xl text-center font-bold bg-gradient-to-r from-swipefit-neonGreen to-swipefit-electricPurple bg-clip-text text-transparent py-2">
                  {styleCombo[0]}-{styleCombo[1]} Fusion
                </p>
              </div>
              <Button onClick={generateRandomCombo} className="w-full bg-gray-800 hover:bg-swipefit-neonGreen hover:text-black transition-all duration-300">
                <Award className="mr-2 h-4 w-4" /> Generate Random Style Combo
              </Button>
            </div>
            
            <p className="text-white mb-4">With hundreds of styles and endless combinations...</p>
            <Slider 
              value={sliderValue} 
              onValueChange={setSliderValue}
              max={100} 
              step={1} 
              className="mb-2" 
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>25+ Style Foundations</span>
              <span>100+ Style Modifiers</span>
              <span>∞ Unique Looks</span>
            </div>
          </div>
          
          {/* Style carousel */}
          <div className="mb-8">
            <h4 className="text-white mb-4 text-lg">Style Elements Carousel</h4>
            <Carousel className="w-full">
              <CarouselContent>
                {styleAttributes.map((category, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gray-800/50 p-4 rounded-lg h-full">
                      <h5 className="text-swipefit-neonGreen mb-3">{category.name}</h5>
                      <div className="flex flex-wrap gap-2">
                        {category.options.map((option, j) => (
                          <span key={j} className="px-3 py-1 bg-gray-900/80 text-white text-sm rounded-md border border-gray-700">
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative static bg-gray-800 hover:bg-swipefit-neonGreen hover:text-black border-gray-700" />
                <CarouselNext className="relative static bg-gray-800 hover:bg-swipefit-neonGreen hover:text-black border-gray-700" />
              </div>
            </Carousel>
          </div>
          
          {/* Style tags */}
          <div>
            <h4 className="text-white mb-4 text-lg">Explore All Style Tags</h4>
            <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto custom-scrollbar pb-2">
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
