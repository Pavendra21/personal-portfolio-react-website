import React from 'react';
import {   FaReact,  FaCss3Alt, FaHtml5, FaCss3 } from 'react-icons/fa'; // Import React Icons
import Skill2 from './Skills2';
import Skill3 from './Skills3';
import Skill4 from './Skills4';

const skills = [
  { name: 'HTML 5', icon: <FaHtml5 size={40} />, color: 'bg-yellow-500' },
  { name: 'CSS', icon: <FaCss3 size={40} />, color: 'bg-yellow-500' },
  { name: 'React', icon: <FaReact size={40} />, color: 'bg-blue-500' },
  { name: 'Tailwind CSS', icon: <FaCss3Alt size={40} />, color: 'bg-teal-500' },
 ];

const Skills = () => {
  return (
   <> <section className="py-12   text-white">
      <h2 id="Skills" className="text-4xl font-bold text-center font-mono mb-8 mt-20">My Skills</h2>
      <h2 className="text-4xl font-bold text-center font-mono mb-8 mt-20 text-yellow-500 font-normal">Frontend</h2>
      {/* Center the cards, with equal spacing on left and right */}
      <div className="container mx-auto flex justify-center mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-32 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center hover:scale-105 transition-transform flex-col bg-gray-800 p-6 rounded-lg shadow-lg w-64 h-auto"
            >
              <div className={`p-4 rounded-full ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Skill2/>
    <Skill3/>
    <Skill4/>
    </>
  );
};

export default Skills;
