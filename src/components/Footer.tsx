
import React from 'react';

const Footer: React.FC = () => {
  // Array of placeholder partner logos
  const partnerLogos = Array(8).fill(null);
  
  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-900">
      <div className="container mx-auto">
        {/* Social proof marquee */}
        <div className="overflow-hidden mb-12">
          <h3 className="text-center text-gray-500 text-sm mb-6">BACKED BY VISIONARIES REDEFINING RETAIL</h3>
          <div className="flex animate-[slider_20s_linear_infinite]">
            {/* Duplicate for seamless loop */}
            {[...partnerLogos, ...partnerLogos].map((_, i) => (
              <div key={i} className="flex-shrink-0 mx-4 w-32">
                <div className="h-12 bg-gray-900 rounded-md flex items-center justify-center px-4">
                  <span className="text-xs text-gray-600 uppercase font-bold">Partner</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Binary code border */}
        <div className="border-t border-gray-900 pt-8 relative">
          <div className="text-[8px] text-gray-700 absolute top-0 left-0 right-0 overflow-hidden flex">
            {Array.from({ length: 200 }).map((_, i) => (
              <span key={i}>{Math.round(Math.random())}</span>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/bdb827ec-f63f-47f5-b953-786fdbc2db0f.png" 
                alt="SwipeFit Logo" 
                className="h-12 w-auto" 
              />
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                Swipe Fit™ — Rewriting the rules. One swipe at a time.
              </p>
              <p className="text-xs text-gray-600 mt-2">
                &copy; {new Date().getFullYear()} SwipeFit. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
