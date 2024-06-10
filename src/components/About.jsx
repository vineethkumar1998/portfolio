import React from 'react';

import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about container mx-auto px-4 py-16 md:flex md:items-center">
      <div className="about-image md:w-1/2">
        <img src="" alt="Vineeth Kumar Molugu - Senior Developer" className="rounded-full shadow-lg w-full h-full object-cover md:mx-auto" />
      </div>
      <div className="about-content md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-semibold mb-4">Senior Developer</h2>
        <p className="text-lg leading-relaxed mb-4">
          I am a highly motivated and results-oriented web developer with X years of experience building user-friendly and performant web applications using React.js. I possess a strong foundation in front-end development principles and a passion for crafting interactive and engaging user interfaces.
        </p>

        <h3 className="text-xl font-semibold mb-2">Expertise</h3>
        <ul className="skills-list flex flex-wrap space-x-4 space-y-2">
          <li className="skill-item flex items-center">
            <FaHtml5 className="text-blue-500 mr-2" />
            HTML5
          </li>
          <li className="skill-item flex items-center">
            <FaCss3 className="text-blue-500 mr-2" />
            CSS3
          </li>
          <li className="skill-item flex items-center">
            <FaJsSquare className="text-yellow-300 mr-2" />
            JavaScript (ES6+)
          </li>
          <li className="skill-item flex items-center">
            <FaReact className="text-sky-400 mr-2" />
            React.js
          </li>
          <li className="skill-item flex items-center">
            <FaNodeJs className="text-green-500 mr-2" />
            Node.js (Express)
          </li>
          <li className="skill-item flex items-center">
            <FaGit className="text-orange-600 mr-2" />
            Git & Version Control
          </li>
        </ul>
        <a href="your-portfolio.com" target="_blank" rel="noopener noreferrer" className="btn mt-4 inline-block px-4 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition duration-300">
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default About;
