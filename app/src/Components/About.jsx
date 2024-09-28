import React from 'react'
import Footer from './Footer'


const About = () => {
  return (
    <>
      <div className="bg-black font-sans leading-normal tracking-normal">
        {/* Container */}
        <div className="container mx-auto mt-10 p-5 max-w-4xl bg-black rounded-lg shadow-lg">
          {/* Image and Intro Section */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Profile Image */}


            {/* Intro Text */}
            <div className="w-full md:w-full p-5">
              <h1 className="text-4xl  font-bold text-white mb-3">
                Hey!, I'm <span className="text-indigo-600">Pavendra Rajput</span> and I'm a full stack engineer.
              </h1>
              <p className="text-lg text-gray-400 mb-4 mt-8">
                Hi, I’m Pavendra Singh Rajput, a passionate web developer with a strong foundation in the MERN stack, JavaScript, Node, and React. I’m currently in my 7th semester of pursuing a B.Tech in Information Technology while honing my skills through a web development internship. This hands-on experience has allowed me to apply my academic knowledge to real-world projects, helping me grow both as a developer and a problem-solver.
              </p>
              <p className="text-lg text-gray-400 mb-4 mt-8">
                What excites me most about web development is the constant evolution of technology and the opportunity to be part of innovative solutions. I love tackling challenges head-on, whether it's optimizing performance, designing intuitive user interfaces, or developing seamless backend systems. Bringing ideas from concept to execution is where I find my flow, and I strive to build products that not only function well but provide real value to users.
              </p>
              <p className="text-lg text-gray-400 mb-4 mt-8">
                Collaboration is another aspect of development I deeply enjoy. Working with diverse teams has taught me the importance of communication and the power of collective creativity. It’s always inspiring to see how combining different perspectives can lead to a solution that’s better than anyone could have imagined alone.
              </p>
              <p className="text-lg text-gray-400 mb-4 mt-8">
                Outside of coding, I enjoy playing sports like cricket, football, and badminton. These activities help me stay active, clear my mind, and bring a fresh perspective when I return to my projects. Whether it’s on the field or in front of a screen, I’m always up for a challenge!<br /><br />

                Let’s build something amazing together!



              </p>
            </div>
          </div>


        </div>
      </div>
      <Footer/>
      </>
  )
}

export default About
