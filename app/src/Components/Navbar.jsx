import React, { useState } from 'react';
import{ Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id='Home' className="bg-black text-white py-5 flex items-center justify-between   px-4 md:px-6 font-mono">
      {/* Link aligned to the left */}
      <Link to="/" className="text-white cursor-pointer">Pavendra</Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      {/* Center links (hidden on mobile) */}
      <div className={`hidden md:flex flex-grow justify-center space-x-20 ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="text-white cursor-pointer">Home</Link>
        <ScrollLink  to="Work" smooth={true} className="text-white cursor-pointer">Work</ScrollLink>
        <ScrollLink  to="Skills" smooth={true} className="text-white cursor-pointer">Skills</ScrollLink>
        <ScrollLink  to="Education" smooth={true} className="text-white cursor-pointer">Education</ScrollLink>
        <Link to="/about" className="text-white cursor-pointer">About</Link>
      </div>

      {/* Link aligned to the right */}
      <Link to="/contact" className="text-white cursor-pointer ">Let's Talk</Link>

      {/* Mobile menu links */}
      <div className={`md:hidden absolute top-16 right-4 bg-white text-black p-4 ${isOpen ? 'block' : 'hidden'}`}>
         <ScrollLink  to="Work" className="block py-2">Work</ScrollLink>
        <ScrollLink  to="Skills" className="block py-2">Skills</ScrollLink>
        <Link to="/about" className="block py-2">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
