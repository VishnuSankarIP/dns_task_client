import React, { useState } from 'react';
import Header from '../components/header/header';
import HeroSection from '../components/herosection/hero';
import BtnSection from '../components/buttonsection/btnsection';
import Menusection from '../components/menusection/menusection';
import AboutSection from '../components/aboutsection/aboutsection';
import Footer from '../components/footer/footer';

function Homepage() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <div>
      <header>
        <div className='header-div'>
          <Header />
        </div>
      </header>
      <main>
        <div className='hero-section'>
          <HeroSection />
        </div>
        <div className='btn-section'>
          <BtnSection 
            onMenuSelect={setSelectedMenu}
            activeMenuId={selectedMenu?._id}
          />
        </div>
        <div className='menu-section'>
          <Menusection selectedMenuData={selectedMenu} />
        </div>
        <div className='about-section'>
          <AboutSection />
        </div>
      </main>
      <footer>
        <div className='footer-section'>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default Homepage;