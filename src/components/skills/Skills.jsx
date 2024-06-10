import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Skill from './Skill';
import reactIcon from './images/React.png';
import javaScriptIcon from './images/Javascript.png';
import htmlIcon from './images/Html.png';
import cssIcon from './images/Css.png';
import tailwindCssIcon from './images/Tailwind.png';
import typeScriptIcon from './images/TypeScript.png';
import bootStrapIcon from './images/Bootstrap.png';
import gitIcon from './images/Git.png';
import oracleSqlIcon from './images/Oracle_Sql.png';

const Skills = () => {
  const skills = [
    { id: 0, name: "React", image: reactIcon },
    { id: 1, name: "JavaScript", image: javaScriptIcon },
    { id: 2, name: "TypeScript", image: typeScriptIcon },
    { id: 3, name: "Html", image: htmlIcon },
    { id: 4, name: "Css", image: cssIcon },
    { id: 5, name: "Tailwind Css", image: tailwindCssIcon },
    { id: 6, name: "Bootstrap", image: bootStrapIcon },
    { id: 7, name: "Oracle Sql", image: oracleSqlIcon },
    { id: 8, name: "Git", image: gitIcon },
  ];

  const skillRefs = useRef(Array(skills.length).fill(null)); // Initialize ref array

  useEffect(() => {
    gsap.set(skillRefs.current, { opacity: 0 }); // Set initial opacity to 0

    const timeline = gsap.timeline();

    skills.forEach((skill, index) => {
      const skillRef = skillRefs.current[index];
      const direction = index % 2 === 0 ? 50 : -50; // Alternate direction for each skill

      timeline.fromTo(
        skillRef,
        {
          y: direction, // Move from below or above
          opacity: 0, // Start from 0 opacity
        },
        {
          y: 0, // Move to original position
          opacity: 1, // Fade in to full opacity
          duration: 1, // Animation duration
          ease: 'power3.out', // Smooth ease-out for animation
        },
        0.8 // Ensure all animations start at the same time
      );
    });

    return () => {
      timeline.kill();
    };
  }, [skills]); // Run effect only on mount

  return (
    <section className='p-8'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>Skills</h2>
        <div className='grid grid-cols-3 gap-4 md:grid-cols-4 sm:grid-cols-10'>
          {skills.map((skill) => (
            <Skill
              key={skill.id}
              name={skill.name}
              image={skill.image}
              ref={(el) => (skillRefs.current[skill.id] = el)} // Assign ref to Skill component
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
