
import React, { useState } from 'react';
import LogoMain from '../../assets/images/LogoMain.png'
import './header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav style={{backgroundColor:'#121618'}}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile view */}
            <div className="flex w-full items-center justify-between sm:hidden">
              {/* Empty div for spacing */}
              <div className="w-10"></div>
              
              {/* Centered logo */}
              <div className="flex-1 flex justify-center items-center">
                <img src={LogoMain} alt="Logo" className="h-8" />
              </div>
              
              {/* Menu button on right */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop menu - remains unchanged */}
            <div className="hidden sm:flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              {/* Rest of the desktop code remains the same */}
              <div className="main-image flex shrink-0 items-center justify-center">
                <img src={LogoMain} alt="Logo" />
              </div>
              <div className="main-image flex shrink-0 items-center">
                <a
                  href="#"
                  className="font-text rounded-md px-25 py-2 text-xl font-large text-gray-300"
                  aria-current="page"
                >
                  <span style={{color:'#266fbd'}}>DEEP</span> NET
                </a>
              </div>

              <div className="flex items-center ml-auto space-x-4">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300"
                  aria-current="page"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-blue-500 hover:text-white"
                >
                  MENU
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  MAKE A RESERVATION
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown remains unchanged */}
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                HOME
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                MENU
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                MAKE A RESERVATION
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                CONTACT US
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;