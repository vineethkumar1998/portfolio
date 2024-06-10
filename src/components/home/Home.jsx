import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaGit } from 'react-icons/fa';
import { LiaDownloadSolid } from "react-icons/lia";
import { BiLogoTypescript } from "react-icons/bi";
import { gsap } from 'gsap';
import './home.css'
import vineeth from './Vineeth.jpg';

const Home = () => {
  const developerRoles = [
    'Web Developer',
    'Frontend Developer',
  ];
  const resumeUrl = 'https://your-resume-hosting-platform.com/your_resume.pdf'; // Replace with your actual resume URL
  const resumeButtonRef = useRef(null);

  const handleResumeButtonClick = () => {
    gsap.to(resumeButtonRef.current, {
      scale: 1.1,
      duration: 0.2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    });
  };
  console.log('Vineethgi')
  return (
    <section className="flex flex-col lg:flex-row p-4 lg:pt-20 lg:p-8">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0 flex justify-center">
        <img
          src={vineeth}
          alt="Profile of Vineeth Kumar"
          className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-lg border border-gray-300   img-hover-shadow"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 lg:px-8">
        <section className="mb-4">
          <h1 className="text-2xl lg:text-3xl font-semibold mt-2">
            Hi, I am <span className="text-amber-500">Vineeth Kumar</span>
          </h1>
          <h1 className="text-xl lg:text-2xl mt-2">
            I am a &nbsp;
            <span className="text-purple-600" aria-label="Developer Roles">
              <TypeAnimation
                sequence={[
                  ...developerRoles.flatMap((role) => [role, 2000]),
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
        </section>
        <p className="text-base lg:text-lg leading-relaxed mb-4">
          I am a highly motivated and results-oriented web developer with X years of experience building user-friendly and performant web applications using React.js. I possess a strong foundation in front-end development principles and a passion for crafting interactive and engaging user interfaces.
        </p>
        <h3 className="text-xl font-semibold mb-2">Expertise</h3>
        <ul className="skills-list grid grid-cols-2 sm:grid-cols-4 gap-4">
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
            <BiLogoTypescript className="text-sky-400 mr-2" />
            TypeScript
          </li>
          <li className="skill-item flex items-center">
            <FaGit className="text-orange-600 mr-2" />
            Git & Version Control
          </li>
        </ul>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          ref={resumeButtonRef}
          onClick={handleResumeButtonClick}
          className="btn  md:w-56 mt-4 flex items-center justify-center px-4 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition duration-300"
        >
          Download Resume <LiaDownloadSolid className="ml-2 pulsating-icon" />
        </a>
      </div>
    </section>
  );
};

export default Home;
