import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center mt-8">
      
      {/* Hero Section */}
      <div className="relative w-full p-16 text-center text-white bg-gradient-to-r from-[#1b5b60] to-[#21AF99] flex items-center justify-center">
        <div className="flex flex-col items-center bg-slate-200 text-[#1b5b60] p-8 rounded-lg shadow-lg max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to FOODVILLA</h1>
          <p className="text-xl mb-6">A Journey in Code and Cuisine</p>
          <p className="text-lg max-w-2xl">
            Discover how a solo project turned into a modern food delivery app, combining passion and technology.
          </p>
        </div>
      </div>
      
      {/* About the Creator */}
      <div className="max-w-4xl bg-white shadow-xl rounded-lg p-10 m-6 text-center border-t-4 border-[#1b5b60]">
        <h2 className="text-4xl font-semibold mb-4 text-[#1b5b60]">About the Creator</h2>
        <div className="flex justify-center mb-6">
          <img src="/path/to/profile-image.jpg" alt="Profile" className="w-32 h-32 rounded-full border-4 border-[#1b5b60]" />
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Hi, I'm Shreyansh, a passionate web developer diving into React and modern web technologies. 
          FOODVILLA is my personal project where I've explored building a complete food delivery app from scratch.
        </p>
      </div>
      
      {/* Project Goals */}
      <div className="max-w-4xl bg-white shadow-xl rounded-lg p-10 m-6 text-center border-t-4 border-[#21AF99]">
        <h2 className="text-4xl font-semibold mb-4 text-[#21AF99]">Project Goals</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          This project aims to refine my React skills and enhance my front-end development expertise. 
          The focus was on creating a seamless user experience with a modern, responsive design.
        </p>
      </div>
      
      {/* Technologies Used */}
      <div className="max-w-4xl bg-white shadow-xl rounded-lg p-10 m-6 text-center border-t-4 border-[#1b5b60]">
        <h2 className="text-4xl font-semibold mb-4 text-[#1b5b60]">Technologies Used</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Built using React, Tailwind CSS, and other cutting-edge technologies to deliver a sleek, user-friendly interface.
        </p>
      </div>
      
      {/* Contact Section */}
      <div className="max-w-4xl bg-white shadow-xl rounded-lg p-10 m-6 text-center border-t-4 border-[#21AF99]">
        <h2 className="text-4xl font-semibold mb-4 text-[#21AF99]">Get in Touch</h2>
        <p className="text-gray-700 text-lg mb-6">
          I'd love to hear your thoughts or answer any questions you may have. Connect with me through the links below!
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1b5b60] transition duration-200">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1b5b60] transition duration-200">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1b5b60] transition duration-200">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
        <button className="px-6 py-3 bg-[#1b5b60] text-white rounded-lg shadow-lg hover:bg-[#1b5b60] transition duration-200">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default About;
