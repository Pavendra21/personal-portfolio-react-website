import React from 'react';
import { TbBrandCpp, TbBrandJavascript } from 'react-icons/tb'; // Import React Icons
import { FaDatabase } from 'react-icons/fa'; // Import React Icons
import { DiMysql } from 'react-icons/di'; // Import React Icons
import Footer from './Footer';


const skills = [
  { name: 'C++', icon: <TbBrandCpp size={40} />, color: 'bg-green-500' },
  { name: 'Javascript', icon: < TbBrandJavascript size={40} />, color: 'bg-yellow-500' },
  { name: 'DBMS', icon: <FaDatabase size={40} />, color: 'bg-blue-500' },
  { name: 'SQL', icon: <DiMysql size={40} />, color: 'bg-blue-500' },
];

const Skill4 = () => {
  return (
    <>
      <section className="py-12   text-white">
        <h2 className="text-4xl font-bold text-center font-mono mb-8 mt-4 text-yellow-500 font-normal">Languages & Other</h2>
        {/* Center the cards, with equal spacing on left and right */}
        <div className="container mx-auto flex justify-center mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-12">
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
      <Footer />
    </>
  );
};

export default Skill4;
