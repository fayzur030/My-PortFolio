import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import RecipeFinder from '../assets/project1.png'
import weatherApp from '../assets/Weather-app.jpg'
import E_Commerce_App from '../assets/e-commerce.jpg'

const projects = [
  {
    title: 'E-Commerce Website',
    desc: 'A full-featured E-Commerce web application built with React, TypeScript, and Tailwind CSS. Features include product listing, shopping cart, checkout flow, and state management using Zustand. Fully responsive and optimized for modern devices.',
    img: E_Commerce_App,
    link: 'https://fayzur-ecommerce.netlify.app/',
    github: 'https://github.com/fayzur030',
  },
  {
    title: 'Recipe-Finder-App',
    desc: 'A feature-rich Recipe Finder app built with React and Tailwind CSS. Users can search for recipes, view detailed ingredients, and get step-by-step cooking instructions. Integrated with a public recipe API for real-time data.',
    img: RecipeFinder,
    link: 'https://fayzur-recipe-finder-application.netlify.app',
    github: 'https://github.com/fayzur030',
  },
  {
    title: 'Weather App',
    desc: 'A responsive weather application built with React, Tailwind CSS, and OpenWeather API for real-time weather updates.',
    img: weatherApp,
    link: 'https://weather-app-two-zeta-31.vercel.app',
    github: 'https://github.com/fayzur030',
  },
]

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen bg-[#0a0a1f] text-white px-6 py-20'
    >
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl font-bold'
        >
          My <span className='text-blue-400'>Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-gray-400 mt-4'
        >
          A showcase of my best works with modern design and functionality
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className='relative group rounded-2xl overflow-hidden shadow-lg border border-white/10'
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
              <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-300 text-sm mb-4 px-4'>{project.desc}</p>
              <div className='flex gap-4'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition shadow-lg'
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-500 hover:text-white flex items-center gap-2 transition'
                >
                  <FaGithub className='w-5 h-5' /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
