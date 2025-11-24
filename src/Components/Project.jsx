import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import RecipeFinder from '../assets/project1.png'
import weatherApp from '../assets/Weather-app.jpg'
import E_Commerce_App from '../assets/e-commerce.jpg'
import movieApp from '../assets/Movie App.jpg'
import todo from '../assets/todo.png'

const projects = [
  {
    title: 'Movie App',
    desc: 'A responsive React & TypeScript app to browse, search, and watch trailers of trending movies using the TMDb API. Features smooth animations, detailed movie info, and mobile-friendly design.',
    img: movieApp,
    link: 'https://movie-app-swart-six-28.vercel.app/',
    github: 'https://github.com/fayzur030',
  },
  {
    title: 'E-Commerce Website',
    desc: 'React, TypeScript & Tailwind CSS. Features: product listing, cart, checkout flow, Zustand for state management. Fully responsive.',
    img: E_Commerce_App,
    link: 'https://fayzur-ecommerce.netlify.app/',
    github: 'https://github.com/fayzur030',
  },
  {
    title: 'Recipe Finder App',
    desc: 'React & Tailwind CSS. Users can search recipes, view ingredients, and get step-by-step instructions via a public API.',
    img: RecipeFinder,
    link: 'https://fayzur-recipe-finder-application.netlify.app',
    github: 'https://github.com/fayzur030',
  },
  {
    title: 'Weather App',
    desc: 'React, Tailwind CSS & OpenWeather API. Real-time weather updates, responsive design.',
    img: weatherApp,
    link: 'https://weather-app-two-zeta-31.vercel.app',
    github: 'https://github.com/fayzur030',
  },
  {
    title: 'To-Do App',
    desc: 'React, Tailwind CSS & OpenWeather API. Real-time weather updates, responsive design.',
    img: todo,
    link: 'https://todo-app-sage-six-10.vercel.app/',
    github: 'https://github.com/fayzur030',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen bg-gray-900 text-white px-6 py-20'
    >
      {/* Heading */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='text-center max-w-6xl mx-auto mb-12'
      >
        <motion.h2 variants={item} className='text-4xl md:text-5xl font-bold'>
          My <span className='text-blue-400'>Projects</span>
        </motion.h2>
        <motion.p variants={item} className='text-gray-400 mt-4'>
          A showcase of my best works with modern design and functionality
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className='relative group rounded-xl overflow-hidden shadow-lg border border-white/10 transition-transform'
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 p-3 text-center'>
              <h3 className='text-xl font-bold mb-1'>{project.title}</h3>
              <p className='text-gray-300 text-sm mb-3'>{project.desc}</p>
              <div className='flex gap-3 flex-wrap justify-center'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:opacity-90 transition shadow-md text-sm'
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1.5 border border-blue-400 rounded-md hover:bg-blue-500 hover:text-white flex items-center gap-1.5 transition text-sm'
                >
                  <FaGithub className='w-4 h-4' /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
