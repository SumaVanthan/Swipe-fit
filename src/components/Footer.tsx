import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 bg-black border-t border-gray-900">
      <div className="container mx-auto">
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/logo.png" 
                alt="SwipeFit Logo" 
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                Swipe Fit™ - Rewriting the rules. One swipe at a time.
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
