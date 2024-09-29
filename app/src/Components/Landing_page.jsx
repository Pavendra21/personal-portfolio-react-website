import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'; // Import icons
import Work from './Work';
import Skills from './Skills';
import resume from '../Resume/pavendra_resume.pdf';
import Education from './Education';
// import image from '../Images/image25.jpg';
import image2 from '../Images/image.jpg';

const LandingPage = () => {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-6 text-white min-h-screen">
      {/* Text Section */}
      <div className="flex-1 md:w-1/2 mb-2 md:ml-24 text-center md:text-left">
        <h1 className="text-3xl font-bold text-5xl">
          Trust me, I'm a <span className="text-indigo-600">software engineer</span>.
        </h1>
        <p className="text-lg mt-6 text-slate-500">
          Pavendra is a B.Tech Computer Science student with a strong foundation in web development and a keen interest in technology. Currently interning at <a href='https://impetrosys.com/' className="text-indigo-600">IMPETROSYS</a>, he is gaining valuable experience in the tech industry while working on diverse projects. Pavendra is dedicated to expanding his expertise and contributing to the tech community.
          <br />
          <br />~ chatgpt
        </p>
      </div>

      {/* Photo Section */}
      <div className="flex-1 md:w-1/2 p-4 mb-6 md:mr-16 ml-auto">
        <img
          src= {image2} // Replace with your image URL
          alt="Landing"
          className="object-cover h-80 w-90 border-4 rounded-md mx-auto md:ml-auto"
        />
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.instagram.com/pavendra.rajput/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
            <FaInstagram size={25} />
          </a>
          <a href="https://www.linkedin.com/in/pavendra-singh-rajput-551481248/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaLinkedin size={25} />
          </a>
          <a href="https://github.com/Pavendra21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <FaGithub size={25} />
          </a>
          <a
            href={resume} // Link to your resume in the public folder
            download="Pavendra_Resume.pdf" // The name of the file when downloaded
            className=" flex items-center space-x-2 text-gray-400 hover:text-gray-600"
          >
            <FaFileDownload size={25} /> <span>Download Resume</span>
            
            
          </a>
        </div>
      </div>
    </div>
    <Education/>

      <Work />
      <Skills />
    </>
  );
};

export default LandingPage;
