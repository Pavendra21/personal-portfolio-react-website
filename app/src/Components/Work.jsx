import React from 'react';
import image from '../Images/Image21.png'
import image2 from '../Images/image22.png'
import image3 from '../Images/image4.png'

const projects = [
  {
    title: 'Recipe Sharing App',
    description: 'A full-stack MERN app for sharing and discovering recipes.',
    image:  image, // Replace with your project image
    techStack: ['HTML','CSS','React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: 'https://recipe-chi-seven.vercel.app/', // Add your live project link
    githubLink: 'https://github.com/Pavendra21/Recipe.git', // Add your GitHub repo link
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    image:  image2 ,
    techStack: ['HTML','CSS','React', 'Tailwind CSS'    ],
    liveLink: 'https://personal-portfolio-react-website.vercel.app/',
    githubLink: 'https://github.com/Pavendra21/personal-portfolio-react-website',
  },
  {
    title: 'Portfolio Website',
    description: 'A E-Commerce website to Purchase elctronic items , with complete Login SignUp Validation',
    image: image3 ,
    techStack: ['HTML','CSS','Tailwand CSS','React', 'Node.js', 'MongoDB', 'Express', 'Redux', "JSON Web Token"],
    liveLink: 'https://shoplinee.onrender.com/',
    githubLink: 'https://github.com/Pavendra21/E-commerce-MERN-stack',
  },
];

const Work = () => {
  return (
    <>
      <h2 id='Work' className="text-4xl font-bold text-center font-mono mt-20 mb-20">Projects</h2>
      <section  className="py-12 px-12 text-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform w-80 h-150 mx-auto"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm py-1 px-2 mr-2 mb-2 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.liveLink}
                  className="text-blue-500 hover:text-blue-300"
                >
                  View Project
                </a>
                <a
                  href={project.githubLink}
                  className="text-blue-500 hover:text-blue-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
