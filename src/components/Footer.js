import React from 'react';
import Image from "../assests/img/NewLogo.png";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex-shrink-0 flex items-center space-x-4">
            {/* Logo Image */}
            <img className="h-16 p-2" alt="logo" src={Image} />
            {/* FOODVILLA Text */}
            <h1 className="text-2xl font-bold text-teal-400">FOODVILLA</h1>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition duration-300">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition duration-300">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition duration-300">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} FOODVILLA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
