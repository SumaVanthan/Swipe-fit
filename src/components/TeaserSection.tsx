
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Combine, Layers } from 'lucide-react';

const TeaserSection: React.FC = () => {
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
        
        {/* Simplified Style Universe section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800/90 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden mb-16">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-swipefit-electricPurple/20 to-swipefit-neonGreen/20 p-6 border-b border-gray-800">
            <h3 className="text-3xl font-bold text-white">
              Welcome to Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-swipefit-neonGreen to-swipefit-electricPurple">
              Infinite Style Universe
              </span>
            </h3>
          </div>

          {/* Main content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Mix & Match */}
              <div className="bg-gray-800/50 rounded-lg p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(153,0,255,0.3)]">
                <div className="h-12 w-12 rounded-full bg-swipefit-electricPurple/20 flex items-center justify-center mb-4">
                  <Combine className="text-swipefit-electricPurple h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Mix & Match</h4>
                <p className="text-gray-300">
                  Blend different styles to create unique combinations that express your personality.
                </p>
              </div>
              
              {/* Endless Combinations */}
              <div className="bg-gray-800/50 rounded-lg p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                <div className="h-12 w-12 rounded-full bg-swipefit-neonGreen/20 flex items-center justify-center mb-4">
                  <RefreshCw className="text-swipefit-neonGreen h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Endless Combinations</h4>
                <p className="text-gray-300">
                  Discover unlimited style possibilities with our smart matching algorithm.
                </p>
              </div>
              
              {/* Style Layers */}
              <div className="bg-gray-800/50 rounded-lg p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(153,102,255,0.3)]">
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Layers className="text-purple-400 h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Style Layers</h4>
                <p className="text-gray-300">
                  Build your look layer by layer, from basics to statement pieces that align with your vibe.
                </p>
              </div>
            </div>
            
            {/* Style tags showcase */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-medium text-white mb-4">Popular Style Elements</h4>
              <div className="flex flex-wrap gap-2">
                {['Casual', 'Formal', 'Streetwear', 'Vintage', 'Athletic', 'Minimalist', 
                  'Bohemian', 'Y2K', 'Cyberpunk', 'Academia'].map((style, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full transition-all 
                    ${index % 3 === 0 ? 'bg-swipefit-electricPurple/30 border border-swipefit-electricPurple/50' : 
                      index % 3 === 1 ? 'bg-swipefit-neonGreen/30 border border-swipefit-neonGreen/50' : 
                      'bg-purple-500/30 border border-purple-500/50'}`}
                  >
                    {style}
                  </span>
                ))}
                <span className="px-3 py-1 text-sm rounded-full bg-gray-700/50 border border-gray-600">
                  + Many More
                </span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-gradient-to-r from-swipefit-electricPurple to-swipefit-neonGreen text-black font-bold hover:opacity-90 hover:scale-105 transition-all">
                Discover Your Style
              </Button>
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
