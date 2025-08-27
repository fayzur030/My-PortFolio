import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaGraduationCap, FaBullseye } from 'react-icons/fa'

const skills = [
  { name: 'React', level: 90, colorFrom: '#61dafb', colorTo: '#7f00ff' },
  { name: 'TypeScript', level: 85, colorFrom: '#3178c6', colorTo: '#00bfff' },
  { name: 'Tailwind CSS', level: 95, colorFrom: '#38bdf8', colorTo: '#6366f1' },
  {
    name: 'JavaScript (ES6+)',
    level: 88,
    colorFrom: '#f7df1e',
    colorTo: '#f97316',
  },
  {
    name: 'Framer Motion',
    level: 80,
    colorFrom: '#f213a4',
    colorTo: '#8b5cf6',
  },
  { name: 'Git/GitHub', level: 75, colorFrom: '#f1502f', colorTo: '#6b21a8' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const radius = 40
const circumference = 2 * Math.PI * radius

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen flex flex-col items-center gap-12 px-6 md:px-20 py-20 bg-gray-900 text-white'
    >
      {/* Heading */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='text-center space-y-4 z-10 relative'
      >
        <motion.h2
          variants={item}
          className='text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500'
        >
          About <span className='text-white'>Me</span>
        </motion.h2>
        <motion.p
          variants={item}
          className='text-gray-400 max-w-xl mx-auto text-base'
        >
          Crafting modern, interactive & user-friendly web applications with
          passion and creativity.
        </motion.p>
      </motion.div>

      {/* Bio & Info Cards */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='w-full max-w-5xl flex flex-col md:flex-row gap-10 z-10'
      >
        {/* Left: Bio */}
        <motion.div variants={item} className='flex-1 space-y-5'>
          <h3 className='text-2xl sm:text-3xl font-semibold text-indigo-400'>
            Hi, I’m Fayzur Rahman 👋
          </h3>
          <p className='text-gray-300 text-base'>
            I’m a{' '}
            <span className='text-pink-400 font-semibold'>
              Frontend Developer
            </span>{' '}
            passionate about building{' '}
            <span className='text-indigo-400'>modern, responsive websites</span>{' '}
            with smooth animations and engaging UX.
          </p>
          <p className='text-gray-400 text-base'>
            Outside coding, I explore design trends, open-source projects, and
            enjoy learning new tech daily.
          </p>
        </motion.div>

        {/* Right: Info Cards */}
        <motion.div
          variants={item}
          className='flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5'
        >
          {[
            {
              icon: <FaLaptopCode />,
              title: 'Experience',
              desc: '1+ years in Frontend Dev',
              color: '#06b6d4',
            },
            {
              icon: <FaGraduationCap />,
              title: 'Education',
              desc: 'Self-taught & continuous learner',
              color: '#ec4899',
            },
            {
              icon: <FaBullseye />,
              title: 'Focus',
              desc: 'Clean UI • Reusable Components',
              color: '#6366f1',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow: `0 0 20px ${card.color}55`,
              }}
              className='bg-gray-800 p-6 rounded-2xl flex flex-col items-center text-center transition-all hover:bg-gray-700'
            >
              <div className='text-3xl mb-2' style={{ color: card.color }}>
                {card.icon}
              </div>
              <h4
                className='font-semibold text-sm'
                style={{ color: card.color }}
              >
                {card.title}
              </h4>
              <p className='text-gray-400 text-xs mt-1'>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='flex flex-wrap gap-6 justify-center mt-8 w-full max-w-5xl'
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.15,
              boxShadow: `0 0 25px ${skill.colorTo}55, 0 0 50px ${skill.colorFrom}33`,
            }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center cursor-pointer relative'
          >
            <div className='relative w-24 h-24'>
              <motion.div
                className='absolute inset-0 rounded-full blur-lg opacity-30'
                style={{
                  background: `conic-gradient(${skill.colorFrom}, ${skill.colorTo})`,
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              />
              <svg className='w-full h-full -rotate-90 relative z-10'>
                <circle
                  cx='48'
                  cy='48'
                  r={radius}
                  stroke='#2d3748'
                  strokeWidth='6'
                  fill='transparent'
                />
                <motion.circle
                  cx='48'
                  cy='48'
                  r={radius}
                  strokeWidth='6'
                  fill='transparent'
                  strokeLinecap='round'
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{
                    strokeDashoffset: circumference * (1 - skill.level / 100),
                  }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  stroke={`url(#grad${i})`}
                />
                <defs>
                  <linearGradient
                    id={`grad${i}`}
                    x1='0%'
                    y1='0%'
                    x2='100%'
                    y2='0%'
                  >
                    <stop offset='0%' stopColor={skill.colorFrom} />
                    <stop offset='100%' stopColor={skill.colorTo} />
                  </linearGradient>
                </defs>
              </svg>
              <span className='absolute inset-0 flex items-center justify-center font-bold text-sm sm:text-base text-white'>
                {skill.level}%
              </span>
            </div>
            <p className='mt-2 text-sm'>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        variants={item}
        className='flex flex-wrap gap-4 justify-center mt-8 z-10 relative'
      >
        {[
          {
            text: 'View Projects',
            href: '#A', // Projects section id
            from: '#06b6d4',
            to: '#9333ea',
          },
          {
            text: 'Contact Me',
            href: '#contact', // Contact section id
            from: '#8b5cf6',
            to: '#f472b6',
          },
          {
            text: 'Download CV',
            href: '/cv.pdf',
            from: '#22c55e',
            to: '#14b8a6',
            download: true,
          },
        ].map((btn, i) => (
          <motion.a
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 20px ${btn.to}55, 0 0 40px ${btn.from}33`,
            }}
            href={btn.href}
            download={btn.download || false}
            className='px-6 py-3 rounded-lg text-white font-semibold text-base transition'
            style={{
              background: `linear-gradient(90deg, ${btn.from}, ${btn.to})`,
            }}
          >
            {btn.text}
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export default About
