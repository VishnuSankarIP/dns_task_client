import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-4 px-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <div>
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </div>
        <div className="mt-2 sm:mt-0 flex gap-4">
          <a 
            href="/terms" 
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Terms & Conditions
          </a>
          <a 
            href="/privacy" 
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;