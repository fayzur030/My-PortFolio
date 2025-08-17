import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = ['home', 'about', 'projects', 'skills', 'contact']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed w-full z-50'>
      {/* Navbar main */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='max-w-7xl mx-auto flex justify-between items-center h-16 px-6 
           bg-dark-gradient/70 backdrop-blur-lg rounded-b-2xl'
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.15, textShadow: '0 0 12px #60A5FA' }}
          className='text-2xl font-extrabold cursor-pointer 
                     bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 
                     text-transparent bg-clip-text'
        >
          Fayzur
        </motion.div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-10'>
          {navItems.map((section) => (
            <motion.div
              key={section}
              whileHover={{
                scale: 1.1,
                color: '#F472B6',
                textShadow: '0 0 10px #F472B6',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={section}
                smooth
                duration={600}
                spy={true}
                offset={-64}
                activeClass='text-pink-400 font-bold glow'
                className='cursor-pointer text-lg font-medium text-gray-200 
                           hover:text-indigo-400 relative group'
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span
                  className='absolute left-0 bottom-[-4px] w-0 h-[2px] 
                                 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 
                                 transition-all duration-300 group-hover:w-full'
                ></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className='text-white px-3 py-2 rounded-md hover:text-indigo-400 hover:scale-110 transition-all'
          >
            {isOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className='md:hidden flex flex-col gap-6 px-6 py-8 text-white 
                       bg-dark-gradient/90 backdrop-blur-lg shadow-xl rounded-b-2xl'
          >
            {navItems.map((section, index) => (
              <motion.div
                key={section}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  color: '#F472B6',
                  textShadow: '0 0 10px #F472B6',
                }}
              >
                <Link
                  to={section}
                  smooth
                  duration={600}
                  spy={true}
                  offset={-64}
                  activeClass='text-pink-400 font-bold glow'
                  onClick={() => setIsOpen(false)}
                  className='cursor-pointer text-lg font-medium block'
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extra CSS for glow effect */}
      <style>{`
        .glow {
          text-shadow: 0 0 12px #F472B6, 0 0 24px #F472B6;
        }
      `}</style>
    </nav>
  )
}

export default Navbar
