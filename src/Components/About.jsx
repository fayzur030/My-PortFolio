import { motion } from 'framer-motion'
import { BookOpen, Code2, Rocket } from 'lucide-react'
import profile from '../assets/profile2.png'

const timeline = [
  {
    year: '2023',
    title: 'Started Web Development',
    desc: 'Learned HTML, CSS, and basic JavaScript.',
    icon: <BookOpen className='w-6 h-6 text-blue-400' />,
  },
  {
    year: '2024',
    title: 'Frontend Developer Journey',
    desc: 'Mastered React, Tailwind CSS, and built small projects.',
    icon: <Code2 className='w-6 h-6 text-green-400' />,
  },
  {
    year: '2025',
    title: 'Advanced Learning',
    desc: 'Learning TypeScript, Zustand, and building full e-commerce apps.',
    icon: <Rocket className='w-6 h-6 text-pink-400' />,
  },
]

const techStack = [
  { name: 'JavaScript', color: 'from-yellow-400 to-orange-500', level: 90 },
  { name: 'TypeScript', color: 'from-blue-400 to-blue-600', level: 80 },
  { name: 'React', color: 'from-cyan-400 to-blue-500', level: 85 },
  { name: 'Tailwind CSS', color: 'from-teal-400 to-emerald-500', level: 88 },
  { name: 'HTML', color: 'from-orange-400 to-red-500', level: 95 },
  { name: 'CSS', color: 'from-indigo-400 to-purple-500', level: 92 },
]

const stats = [
  { name: 'Projects Completed', value: 24 },
  { name: 'Clients Worked With', value: 10 },
  { name: 'Experience Years', value: 3 },
]

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen relative overflow-hidden text-white pt-24 px-6 py-16 bg-[#0a0a1f]'
    >
      {/* Background Glow Blobs */}
      <div className='absolute top-10 left-10 w-[400px] h-[400px] bg-blue-600/40 rounded-full blur-[150px] animate-[blob1_25s_infinite] -z-20'></div>
      <div className='absolute bottom-20 right-20 w-[400px] h-[400px] bg-pink-600/40 rounded-full blur-[140px] animate-[blob2_30s_infinite] -z-20'></div>

      <div className='max-w-6xl grid md:grid-cols-2 gap-12 items-start relative z-10'>
        {/* Left Side - Profile + Skills Progress */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='space-y-10 flex flex-col items-center'
        >
          <motion.img
            src={profile}
            alt='profile'
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className='w-72 h-72 rounded-full shadow-2xl border-4 border-transparent bg-gradient-to-tr from-blue-500 to-purple-600 p-1 object-cover'
          />

          {/* Skills Progress */}
          <div className='w-full'>
            <h3 className='text-2xl font-semibold mb-4 text-center'>
              My Skills
            </h3>
            <div className='space-y-4'>
              {techStack.map((tech, idx) => (
                <div key={idx}>
                  <div className='flex justify-between mb-1 text-sm font-medium'>
                    <span>{tech.name}</span>
                    <span>{tech.level}%</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-3 overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1.5, delay: idx * 0.2 }}
                      className={`h-3 rounded-full bg-gradient-to-r ${tech.color} shadow-lg`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats / Achievements */}
          <div className='mt-8 grid grid-cols-3 gap-4 text-center'>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: idx * 0.3 }}
                className='bg-white/5 rounded-lg p-4 shadow-md hover:shadow-blue-500/30 transition'
              >
                <h4 className='text-3xl font-bold text-blue-400'>
                  {stat.value}+
                </h4>
                <p className='text-gray-300 text-sm'>{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - About + Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl'
        >
          <h2 className='text-4xl font-bold mb-4'>About Me</h2>
          <p className='text-gray-300 mb-6 leading-relaxed'>
            Hi, I am{' '}
            <span className='text-blue-400 font-semibold'>Fayzur Rahman</span>.
            A passionate{' '}
            <span className='text-green-400'>Frontend Developer</span> skilled
            in building modern and interactive web apps.
          </p>

          <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
          <div className='relative border-l-2 border-gradient-to-b from-blue-500 to-pink-500 pl-6 space-y-8'>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className='relative bg-white/5 p-4 rounded-xl shadow-md hover:shadow-blue-500/30 transition'
              >
                <div className='absolute -left-12 top-4 w-10 h-10 flex items-center justify-center bg-gray-900 border-2 border-blue-500 rounded-full shadow-md'>
                  {item.icon}
                </div>
                <h4 className='text-lg font-bold'>
                  {item.year} - {item.title}
                </h4>
                <p className='text-gray-400 text-sm'>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className='mt-10 flex gap-4'>
            <a
              href='#contact'
              className='px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition shadow-lg'
            >
              Hire Me
            </a>
            <a
              href='/resume.pdf'
              className='px-6 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition'
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Custom Blob Animations */}
      <style jsx>{`
        @keyframes blob1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -20px) scale(1.1);
          }
        }
        @keyframes blob2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-25px, 15px) scale(1.1);
          }
        }
        .animate-[blob1_25s_infinite] {
          animation: blob1 25s infinite ease-in-out;
        }
        .animate-[blob2_30s_infinite] {
          animation: blob2 30s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default About
