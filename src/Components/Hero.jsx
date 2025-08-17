import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden px-6 md:px-12'
    >
      {/* Text */}
      <div className='relative z-10 flex-1 flex flex-col gap-6 max-w-2xl'>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-4xl md:text-6xl font-bold'
        >
          Hi, I'm <span className='text-green-400'>Fayzur</span>
        </motion.h1>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-2xl md:text-3xl font-semibold'
        >
          <Typewriter
            words={['Web Developer', 'React Enthusiast', 'UI/UX Lover']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className='text-base md:text-lg leading-relaxed'
        >
          Hi! I’m Md. Fayzur Rahman, a passionate Frontend Developer.
        </motion.p>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: [10, -10, 10], opacity: 1 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className='flex-1 flex justify-center md:justify-end mb-10 md:mb-0 relative'
      >
        <motion.img
          src={heroImage}
          alt='Hero Illustration'
          className='w-80 md:w-[400px] rounded-xl shadow-2xl'
          style={{ filter: 'drop-shadow(0 0 20px rgba(79,70,229,0.3))' }}
          whileHover={{
            scale: 1.03,
            filter: 'drop-shadow(0 0 30px rgba(79,70,229,0.6))',
            transition: { duration: 0.5 },
          }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
