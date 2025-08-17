import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import profile from '../assets/hero.png'

const Hero = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-[#0a0a1f] pt-24'
    >
      {/* Background Glow Blobs */}
      <div className='absolute inset-0 -z-20'>
        <div className='absolute top-10 left-10 w-[500px] h-[500px] bg-blue-600/40 rounded-full blur-[150px] animate-[blob1_25s_infinite]'></div>
        <div className='absolute bottom-20 right-20 w-[400px] h-[400px] bg-purple-600/40 rounded-full blur-[140px] animate-[blob2_30s_infinite]'></div>
      </div>

      {/* Flex Container: Image top in mobile, Text left in desktop */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 px-6'>
        {/* Floating Profile */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className='relative z-10 order-1 md:order-2'
        >
          <div className='absolute inset-0 rounded-full blur-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-50 animate-spin-slow'></div>
          <motion.img
            src={profile}
            alt='profile'
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className='relative w-44 h-48 md:w-60 md:h-60 mx-auto rounded-full border-4 border-transparent 
            bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-[0_0_50px_rgba(59,130,246,0.7)]'
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='text-center md:text-left max-w-lg order-2 md:order-1'
        >
          <h1 className='text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Hi, I'm Fayzur Rahman
          </h1>

          <h2 className='text-xl md:text-2xl text-gray-300 mb-6'>
            <Typewriter
              words={[
                'Frontend Developer 💻',
                'Frontend & UI/UX Designer 🎨',
                'React & TypeScript Enthusiast ⚡',
              ]}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className='text-gray-400 mb-10 leading-relaxed'>
            I build{' '}
            <span className='text-blue-400'>modern, responsive web apps</span>{' '}
            with
            <span className='text-purple-400'>
              {' '}
              React, TypeScript, Tailwind CSS
            </span>{' '}
            and create{' '}
            <span className='text-pink-400'>premium user experiences</span>.
          </p>

          {/* CTA Buttons */}
          <div className='flex justify-center md:justify-start gap-6'>
            <motion.a
              whileHover={{
                scale: 1.08,
                boxShadow: '0px 0px 25px rgba(59,130,246,0.8)',
              }}
              whileTap={{ scale: 0.95 }}
              href='#contact'
              className='px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg font-semibold'
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
              className='px-6 py-3 border border-purple-500 rounded-xl hover:bg-purple-600/20 font-semibold'
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-20px) scale(1.1); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-25px,15px) scale(1.1); }
        }
        .animate-[blob1_25s_infinite] { animation: blob1 25s infinite ease-in-out; }
        .animate-[blob2_30s_infinite] { animation: blob2 30s infinite ease-in-out; }
        .animate-spin-slow { animation: spin 50s linear infinite; }
      `}</style>
    </section>
  )
}

export default Hero
