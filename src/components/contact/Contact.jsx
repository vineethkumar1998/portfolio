import React from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import './contact.css'; // Import the CSS file for glowing effect

const Contact = () => {
  return (
    <>
      <section className="contact-form-container flex flex-col justify-center md:flex-row p-6 text-white rounded-xl shadow-lg">
        <div className="contact-info md:w-1/3 p-4 space-y-4 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <ul className="flex flex-col space-y-2 text-lg">
            <li className="flex items-center space-x-2">
              <FaUser className="text-amber-500 hover:scale-110" />
              <p>Vineeth Kumar Molugu</p>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-amber-500 hover:scale-110" />
              <a href="mailto:vineethkumar1607@gmail.com" className="hover:underline">vineethkumar1607@gmail.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-amber-500 hover:scale-110" />
              <a href="tel:+917095686334" className="hover:underline">+91 7095686334</a>
            </li>
          </ul>
        </div>

        <div className="contact-form md:w-1/3 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4" method="POST" action="https://formspree.io/f/yourFormID">
            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" placeholder="mail@mail.com" required className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white" />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="(XXX) XXX-XXXX" required className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white" />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" required className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" name="message" required placeholder="Message in brief..." className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white h-32" />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-52 bg-amber-600 text-white p-2 rounded-md hover:bg-amber-800 transition duration-300">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
