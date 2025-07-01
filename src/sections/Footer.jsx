import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/r_logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 px-4 pb-12 max-w-screen-xl mx-auto">
        <div className="bg-gray-600 text-center px-6 py-6 rounded-md w-full max-w-md flex flex-col items-center">
          <FaPhoneAlt size={28} className="mb-3" />
          <p className="text-xl font-bold break-words">+91-9250036565</p>
          <p className="text-sm mt-1">Have a question? Call us now</p>
        </div>
        <div className="bg-gray-600 text-center px-6 py-6 rounded-md w-full max-w-md flex flex-col items-center">
          <FaEnvelope size={28} className="mb-3" />
          <p className="text-xl font-bold break-words text-center">
            raadhikaservices@gmail.com
          </p>
          <p className="text-sm mt-1">Need support? Drop us an email</p>
        </div>
      </div>

      {/* Footer Bottom Grid with thin dividers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-10 border-t border-gray-800 text-sm max-w-screen-xl mx-auto">
        {/* Column 1 */}
        <div className="md:border-r border-gray-700 pr-0 md:pr-4">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "About Us", "Our Services", "Gallery", "Testimonials", "Contact Us"].map((link) => (
              <li
                key={link}
                className="hover:text-yellow-500 transition duration-300 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="text-center md:border-r border-gray-700 px-0 md:px-4">
          <img
            src={logo}
            alt="Raadhika Logo"
            className="mx-auto mb-4 h-20 object-contain max-w-full"
          />
          <p className="text-sm text-gray-300 px-2 md:px-0">
            Raadhika Architectural Services is a premier design consultancy
            specializing in crafting exceptional interiors for homes, offices,
            and hotels worldwide. We bring innovation, functionality, and style
            to every project.
          </p>
          <p className="mt-3 text-sm font-semibold underline cursor-pointer hover:text-yellow-500 transition duration-300">
            READ MORE →
          </p>
        </div>

        {/* Column 3 */}
        <div className="pl-0 md:pl-4">
          <h2 className="text-xl font-bold mb-4">Our Location</h2>
          <div className="mb-4 w-full h-32 md:h-36 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1055945242537!2d80.91324237449394!3d26.88605947665426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b9373a7a17%3A0x53f6dcf5a6d41d72!2sKrishna%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719823445678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h2 className="text-lg font-semibold mb-2">Follow Us On</h2>
          <div className="flex gap-3 justify-center md:justify-start">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label="social media link"
                >
                  <Icon className="bg-white text-black p-2 rounded w-9 h-9 hover:text-yellow-500" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-800 max-w-screen-xl mx-auto px-4">
        © 2025 Raadhika Architectural Services. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-yellow-500 p-3 rounded-full shadow-lg text-black text-xl hover:bg-yellow-400 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
