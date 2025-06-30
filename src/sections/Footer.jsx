import React from 'react';
import {
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-black text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">

          {/* Contact Info */}
          <div>
            <h3 className="text-green-500 font-semibold text-lg mb-4">Contact Us</h3>
            <p className="flex items-center gap-2 mb-2">
              <FaPhoneAlt className="text-green-500" /> +91-9250035565
            </p>
            <p className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-green-500" /> info@raadhikaarch.com
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-green-500 mt-1" />
              12th Floor, Skyline Plaza,<br />
              Gomti Nagar, Lucknow, UP - 226010
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-green-500 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: 'hero', label: 'Home' },
                { path: 'about', label: 'About' },
                { path: 'services', label: 'Services' },
                { path: 'projects', label: 'Projects' },
                { path: 'contact', label: 'Contact' },
              ].map(({ path, label }) => (
                <li key={label}>
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="hover:text-green-500 cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-green-500 font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
                { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
                { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
                { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="bg-green-500 hover:bg-white hover:text-black text-black p-2 rounded-full transition duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="lg:col-span-1 sm:col-span-2 text-center sm:text-left">
            <h3 className="text-green-500 font-semibold text-lg mb-4">Raadhika Architectural</h3>
            <p className="text-gray-400">
              Designing dreams, building trust — tailored construction solutions with precision and purpose.
            </p>
          </div>
        </div>

       {/* Divider */}
<div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 max-w-7xl mx-auto px-6">
  <div className="flex justify-center items-center">
    <span>© 2025 Raadhika Architectural. All rights reserved.</span>
  </div>
</div>
      </footer>

      {/* Scroll to Top */}
      <div title="Back to Top" className="fixed bottom-6 right-6 z-50">
        <Link to="hero" spy={true} smooth={true} offset={-100}>
          <div className="bg-green-500 hover:bg-black text-black hover:text-white p-3 rounded-full shadow-md transition duration-300 cursor-pointer">
            <FaArrowUp className="text-lg" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
