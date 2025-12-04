import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaGraduationCap, FaBullseye } from 'react-icons/fa'

const skills = [
  { name: 'React', level: 92, colorFrom: '#61dafb', colorTo: '#7f00ff' },
  { name: 'TypeScript', level: 88, colorFrom: '#3178c6', colorTo: '#00bfff' },
  { name: 'Tailwind CSS', level: 95, colorFrom: '#38bdf8', colorTo: '#6366f1' },
  { name: 'JavaScript', level: 90, colorFrom: '#f7df1e', colorTo: '#f97316' },
  {
    name: 'Framer Motion',
    level: 85,
    colorFrom: '#f213a4',
    colorTo: '#8b5cf6',
  },
  { name: 'Git/GitHub', level: 80, colorFrom: '#f1502f', colorTo: '#6b21a8' },
]

// const keySkills = [
//   'React JS', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Next.js', 'Git', 'Framer Motion'
// ];

const achievements = [
  'Built 5+ responsive websites for clients',
  'Completed multiple frontend projects using React & TypeScript',
  'Contributor to open-source projects on GitHub',
]

const projects = [
  { title: 'Portfolio Website', link: '#' },
  { title: 'E-commerce Web App', link: '#' },
  { title: 'Dashboard Admin Panel', link: '#' },
]

const traits = [
  'Passionate about writing clean code',
  'Fast learner & problem solver',
  'Team player with good communication skills',
]

const funFacts = [
  'I love coffee ☕ and coding late nights',
  'Always exploring new tech & design trends',
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
      className='min-h-screen flex flex-col items-center gap-12 px-6 md:px-20 py-20 bg-gray-950 text-white'
    >
      {/* Heading */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='text-center space-y-4'
      >
        <motion.h2
          variants={item}
          className='text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500'
        >
          About <span className='text-white'>Me</span>
        </motion.h2>
        <motion.p
          variants={item}
          className='text-gray-400 max-w-xl mx-auto text-base text-justify md:text-center'
        >
          I design and develop **modern, responsive web applications** with
          clean code, smooth UI, and engaging UX for global clients.
        </motion.p>
      </motion.div>

      {/* Key Skills */}
      {/* <motion.div variants={container} initial="hidden" whileInView="show" className="flex flex-wrap gap-3 justify-center mt-6">
        {keySkills.map((skill, i) => (
          <motion.span key={i} variants={item} className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full text-xs sm:text-sm font-medium cursor-default shadow-md">
            {skill}
          </motion.span>
        ))}
      </motion.div> */}

      {/* Bio & Info Cards */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='w-full flex flex-col md:flex-row gap-12 mt-10'
      >
        {/* Left: Bio */}
        <motion.div variants={item} className='flex-1 space-y-5'>
          <h3 className='text-2xl sm:text-3xl font-semibold text-indigo-400'>
            Hello, I’m Fayzur Rahman 👋
          </h3>
          <p className='text-gray-300 text-base text-justify md:text-left'>
            I’m a{' '}
            <span className='text-pink-400 font-semibold'>
              Frontend Developer
            </span>{' '}
            crafting **scalable, responsive, and visually stunning web
            applications** using React, TypeScript, and Tailwind CSS. My focus
            is on **performance, accessibility, and user delight**.
          </p>
          <p className='text-gray-400 text-base text-justify md:text-left'>
            Beyond development, I explore UI/UX trends, contribute to
            open-source, and continuously improve my skills to meet
            **international standards**.
          </p>
        </motion.div>

        {/* Right: Info Cards */}
        <motion.div
          variants={item}
          className='flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6'
        >
          {[
            {
              icon: <FaLaptopCode />,
              title: 'Experience',
              desc: '1+ years in professional Frontend',
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
              title: 'Specialization',
              desc: 'Clean UI • Reusable Components',
              color: '#6366f1',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.06,
                boxShadow: `0 0 25px ${card.color}66`,
              }}
              className='bg-gray-850 p-6 rounded-3xl flex flex-col items-center text-center transition-all hover:bg-gray-800'
            >
              <div className='text-3xl mb-3' style={{ color: card.color }}>
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

      {/* Circular Skills */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='flex flex-wrap gap-6 md:gap-14 justify-center mt-10 w-full max-w-6xl'
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
            <div className='relative w-28 h-28'>
              <motion.div
                className='absolute inset-0 rounded-full blur-xl opacity-30'
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
            <p className='mt-3 text-sm font-medium'>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements */}
      {/* <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='mt-10 max-w-3xl w-full'
      >
        <h3 className='text-xl sm:text-2xl font-semibold text-indigo-400 mb-4'>
          Achievements / Experience
        </h3>
        <ul className='list-disc list-inside text-gray-300 space-y-2'>
          {achievements.map((ach, i) => (
            <motion.li key={i} variants={item}>
              {ach}
            </motion.li>
          ))}
        </ul>
      </motion.div> */}

      {/* Projects */}
      {/* <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='mt-10 max-w-3xl w-full'
      >
        <h3 className='text-xl sm:text-2xl font-semibold text-indigo-400 mb-4'>
          Projects / Portfolio Highlights
        </h3>
        <ul className='list-decimal list-inside text-gray-300 space-y-2'>
          {projects.map((proj, i) => (
            <motion.li key={i} variants={item}>
              <a
                href={proj.link}
                className='text-teal-400 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                {proj.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div> */}

      {/* Personal Traits */}
      {/* <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='mt-10 max-w-3xl w-full'
      >
        <h3 className='text-xl sm:text-2xl font-semibold text-indigo-400 mb-4'>
          Personal Traits / Work Style
        </h3>
        <ul className='list-disc list-inside text-gray-300 space-y-2'>
          {traits.map((trait, i) => (
            <motion.li key={i} variants={item}>
              {trait}
            </motion.li>
          ))}
        </ul>
      </motion.div> */}

      {/* Fun / Personal Touch */}
      {/* <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        className='mt-10 max-w-3xl w-full'
      >
        <h3 className='text-xl sm:text-2xl font-semibold text-indigo-400 mb-4'>
          Fun / Personal Touch
        </h3>
        <ul className='list-disc list-inside text-gray-400 space-y-2'>
          {funFacts.map((fact, i) => (
            <motion.li key={i} variants={item}>
              {fact}
            </motion.li>
          ))}
        </ul>
      </motion.div> */}

      {/* CTA Buttons */}
      <motion.div
        variants={item}
        className='flex flex-wrap gap-5 justify-center mt-10'
      >
        {[
          {
            text: 'View Projects',
            href: '#projects',
            from: '#06b6d4',
            to: '#9333ea',
          },
          {
            text: 'Contact Me',
            href: '#contact',
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
              scale: 1.08,
              boxShadow: `0 0 25px ${btn.to}66, 0 0 50px ${btn.from}44`,
            }}
            href={btn.href}
            download={btn.download || false}
            className='px-7 py-3 rounded-2xl text-white font-semibold text-base transition-all'
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
