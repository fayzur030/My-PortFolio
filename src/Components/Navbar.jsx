import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  // Scroll listener for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 80;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) setActive(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='fixed w-full bg-[#0a0a1f]/80 backdrop-blur-md z-50 px-6 py-4 flex items-center justify-between'>
      <div className='text-2xl font-bold text-white'>Fayzur</div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-8 text-white font-medium'>
        {navItems.map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            className='relative cursor-pointer capitalize'
          >
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {item}
            </Link>

            {/* Light effect for active item */}
            {active === item && (
              <motion.div
                layoutId='underline'
                className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='focus:outline-none text-white'
        >
          {isOpen ? <span className='text-2xl'>&#10005;</span> : <span className='text-2xl'>&#9776;</span>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='absolute top-full left-0 w-full bg-[#0a0a1f]/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden text-white font-medium'
        >
          {navItems.map((item) => (
            <li key={item} className='cursor-pointer capitalize'>
              <Link
                onClick={() => setIsOpen(false)}
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
