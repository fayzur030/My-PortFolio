import React from 'react'
import { motion } from 'framer-motion'
import aboutIllustration from '../assets/about.png'

const About = () => {
  return (
    <section
      id='about'
      className='relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 overflow-hidden'
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='flex-1'
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-6'>About Me</h2>
        <p className='text-base md:text-lg leading-relaxed'>
          Hi! I’m Md. Fayzur Rahman, a passionate Frontend Developer who loves
          turning ideas into interactive and responsive web experiences. I
          specialize in React, TypeScript, and modern web technologies to build
          clean, scalable, and user-friendly interfaces.
        </p>
      </motion.div>

      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='flex-1 flex justify-center relative'
      >
        <motion.img
          src={aboutIllustration}
          alt='About Illustration'
          className='w-72 md:w-96 rounded-xl shadow-2xl transition-shadow duration-500'
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.7)',
            transition: { duration: 0.5 },
          }}
        />

        {/* Blobs */}
        <div className='absolute -top-12 -left-12 w-48 h-48 bg-indigo-500 rounded-full opacity-30 blur-3xl animate-blob'></div>
        <div className='absolute -bottom-12 -right-12 w-48 h-48 bg-pink-500 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000'></div>
        <div className='absolute top-20 right-1/3 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000'></div>
      </motion.div>
    </section>
  )
}

export default About
