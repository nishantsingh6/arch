import React from 'react';
import { FaCopyright, FaArrowUp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      {/* Footer Main */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <FaCopyright className="text-green-500 text-lg" />
            <p className="text-sm md:text-base">
              © 2025 Raadhika Architec. All Rights Reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-white hover:text-black text-black p-2 rounded-full transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-white hover:text-black text-black p-2 rounded-full transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-white hover:text-black text-black p-2 rounded-full transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-white hover:text-black text-black p-2 rounded-full transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div
        id="icon-box"
        className="bg-green-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed bottom-6 right-6 z-50 transition duration-300"
        title="Scroll to top"
      >
        <Link to="hero" spy={true} smooth={true} offset={-100}>
          <FaArrowUp className="text-lg" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
