
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 bg-black border-t border-gray-900">
      <div className="container mx-auto">
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
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" 
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
