import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../assets/r_logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // const services = [
  //   'Office Furniture',
  //   'Sofa Furniture',
  //   'Home Workstations',
  //   'Office Workstations',
  //   'Wardrobes',
  //   'Bed Design',
  // ];

  return (
    <header className="flex items-center justify-between lg:justify-around px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <img src={logo} alt="Logo" className="h-12 md:h-16" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex items-center space-x-6 font-semibold text-sm">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:text-yellow-600 text-[15px]"
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:text-yellow-600 text-[15px]"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
           <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:text-yellow-600 text-[15px]"
          >
            Services
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:text-yellow-600 text-[15px]"
          >
            Projects
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:text-yellow-600 text-[15px]"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-black">
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md py-6 flex flex-col items-start px-6 space-y-4 z-40 md:hidden">
          <Link to="home" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu} className="hover:text-yellow-600">
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu} className="hover:text-yellow-600">
            About Us
          </Link>

          {/* Mobile Services Dropdown */}
          <Link to="services" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu} className="hover:text-yellow-600">
           Services
          </Link>

          <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu} className="hover:text-yellow-600">
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu} className="hover:text-yellow-600">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
