import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div className="hero-section flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* <h1 className="text-white text-5xl md:text-7xl font-bold mb-8">
          MENU
        </h1> */}
        <h1
  className="main-text text-white text-5xl md:text-7xl font-bold mb-8 relative"
  style={{
    textShadow: "2px 2px 0px #000, 4px 4px 0px #ff0000, 6px 6px 0px #000",
  }}
>
  MENU
</h1>

        
        <p className= "para text-gray-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
          Please take a look at our menu featuring food, drinks, and brunch. 
          If you'd like to place an order, use the "Order Online" button located below the menu.
        </p>
      </div>
    </div>
  );
}

export default Hero;