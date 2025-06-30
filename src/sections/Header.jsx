import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import logo from '../assets/r_logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Projects', path: 'projects' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="w-full bg-gray-100 flex justify-between items-center lg:px-16 px-6 py-4 sticky top-0 z-50 shadow-md">
      
      {/* Logo */}
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="cursor-pointer"
        onClick={closeMenu}
      >
        <img src={logo} alt="Logo" className="h-12 md:h-16" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-green-500 hover:text-black text-[15px]"
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Desktop Reach Us Button */}
      <div className="hidden lg:flex">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="bg-green-500 hover:bg-black hover:text-white text-black font-semibold px-8 py-2 rounded-full transform hover:scale-105 transition duration-300">
            Reach Us
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-black">
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 z-40 lg:hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="text-black uppercase font-semibold cursor-pointer p-2 hover:text-green-500"
            >
              {link}
            </Link>
          ))}

          {/* Mobile Reach Us Button */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={closeMenu}
          >
            <button className="bg-green-500 hover:bg-black hover:text-white text-black font-semibold px-6 py-2 rounded-full">
              Reach Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
