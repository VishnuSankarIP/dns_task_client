import React from 'react';
import Logo from '../../assets/images/Logoblue.png'
import Tele from '../../assets/images/Group.svg'
import Mail from '../../assets/images/formkit_email.svg'
import Loc from '../../assets/images/loc.svg'
import Facebook from '../../assets/images/iconoir_facebook.svg'
import Instagram from '../../assets/images/insta.svg'
import Youtube from '../../assets/images/youtube.svg'
import Twitter from '../../assets/images/twitter.svg'
import './aboutsection.css'


const AboutSection = () => {
    return (
        <div className="bg-black w-full py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Connect With Us Section */}
                    <div className="rounded-lg border border-gray-500 p-6 flex flex-col items-center justify-center">
                        <h2 className="text-blue-500 text-xl font-bold mb-4">CONNECT WITH US</h2>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-400">
                                <span className="mr-3"><img src={Tele} alt="My Icon" className="w-5 h-5" /></span>
                                <span>+91 9567843340</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <span className="mr-3"><img src={Mail} alt="My Icon" className="w-5 h-5" /></span>
                                <span>info@deepnetsoft.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Logo Section */}
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-500 relative p-6">
                        <div className="logo w-16 h-16 p-2 rounded-lg absolute top-[-2rem]">
                            <img className="logo-image" src={Logo} alt="Logo" />
                        </div>
                        <div className="text-center mt-10">
                            <h1 className="text-3xl flex space-x-2">
                                <span className="text-blue-500">DEEP</span>
                                <span className="text-white">NET</span>
                                <span className="text-gray-400">SOFT</span>
                            </h1>
                        </div>
                        <div className="flex space-x-4">
                            <span className="text-gray-400">
                                <img src={Facebook} alt="Facebook" />
                            </span>
                            <span className="text-gray-400">
                                <img src={Twitter} alt="Twitter" />
                            </span>
                            <span className="text-gray-400">
                                <img src={Youtube} alt="Youtube" />
                            </span>
                            <span className="text-gray-400">
                                <img src={Instagram} alt="Instagram" />
                            </span>
                        </div>
                    </div>


                    {/* Find Us Section */}
                    <div className="rounded-lg border border-gray-500 p-6 flex flex-col items-center justify-center">
                        <h2 className="text-blue-500 text-xl font-bold mb-4">FIND US</h2>
                        <div className="flex items-start text-gray-400">
                            <span className="mr-3 mt-1"> <img src={Loc}></img></span>
                            <span>First floor, Geo infopark,<br />Infopark EXPY, Kakkanad</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;