import React from 'react';
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li>Email: <a href="mailto:vineethkumar1607@gmail.com" className="text-amber-500 hover:text-amber-400">vineethkumar1607@gmail.com</a></li>
              <li>Phone: +91 7095686334</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Social</h3>
            <ul>
              <li className='flex items-center gap-3 mb-1'>
                <FaLinkedin className='text-blue-500 size-6' />
                <a href="https://www.linkedin.com/in/yourprofile" className="text-amber-500 hover:text-amber-400">LinkedIn</a>
              </li>
              <li className='flex items-center gap-3'>
                <FaWhatsappSquare className='text-green-500 size-6' />
                <a href="https://wa.me/1234567890" className="text-amber-500 hover:text-amber-400">WhatsApp</a>
              </li>
              {/* Add other social links here */}
            </ul>
          </div>

          {/* Copyright & Thanks Section (Optional - Can be combined) */}
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center mt-6 sm:mt-0">
            <p className="text-sm text-center">&copy; {new Date().getFullYear()} Vineeth Kumar. All rights reserved.</p>
            <p className="text-sm text-center mt-2">Thanks for scrolling!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
