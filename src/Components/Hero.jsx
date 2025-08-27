import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import profileImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section
      id='home'
      className='relative flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] px-6 md:px-20 pt-32 md:pt-20'
    >
      {/* Right Image (Mobile first) */}
      <motion.div
        className='w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0 order-1 md:order-2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <motion.div
          className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 shadow-2xl'
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <img
            src={profileImage}
            alt='Fayzur'
            className='w-full h-full object-cover'
          />
        </motion.div>
      </motion.div>

      {/* Left Text */}
      <div className='z-10 w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 order-2 md:order-1'>
        <motion.h1
          className='text-5xl md:text-7xl font-extrabold text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{' '}
          <span className='bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent'>
            Fayzur
          </span>
        </motion.h1>

        <motion.h2
          className='text-xl md:text-2xl text-gray-300 min-h-[40px]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            words={[
              'Frontend Developer',
              'React Developer',
              'Responsive Web Apps Builder',
              'Tailwind CSS Expert',
              'React & TypeScript Enthusiast ⚡',
            ]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <p className='text-gray-400 mb-10 leading-relaxed'>
          I build{' '}
          <span className='text-teal-400 font-medium'>
            modern, responsive web apps
          </span>{' '}
          with{' '}
          <span className='text-indigo-500 font-medium'>
            React, TypeScript, Tailwind CSS
          </span>{' '}
          and create{' '}
          <span className='text-pink-400 font-medium'>
            premium user experiences
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-row justify-center md:justify-start gap-6'>
          <motion.a
            whileHover={{
              scale: 1.08,
              boxShadow: '0px 0px 25px rgba(59,130,246,0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            href='#contact'
            className='px-6 py-3 bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 rounded-xl shadow-lg font-semibold text-white text-center'
          >
            Hire Me
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.08,
              boxShadow: '0px 0px 25px rgba(236,72,153,0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            href='/resume.pdf'
            download
            className='px-6 py-3 border border-pink-500 rounded-xl hover:bg-pink-600/20 font-semibold text-white text-center'
          >
            Download CV
          </motion.a>
        </div>
      </div>

      {/* Floating Blobs */}
      <div className='hidden md:block'>
        <div className='absolute top-10 left-10 w-40 h-40 bg-teal-400/20 rounded-full animate-[blob_12s_infinite]'></div>
        <div className='absolute top-1/3 right-20 w-32 h-32 bg-indigo-500/20 rounded-full animate-[blob_12s_infinite] animation-delay-2000'></div>
        <div className='absolute bottom-20 left-1/2 w-48 h-48 bg-pink-500/20 rounded-full animate-[blob_12s_infinite] animation-delay-4000'></div>
        <div className='absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-[blob_12s_infinite] animation-delay-6000'></div>
      </div>
    </section>
  )
}

export default Hero
