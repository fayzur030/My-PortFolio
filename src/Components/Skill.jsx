import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 92 },
  { name: 'JavaScript', value: 90 },
  { name: 'TypeScript', value: 85 },
  { name: 'React', value: 93 },
  { name: 'Tailwind', value: 88 },
]

const COLORS = [
  'url(#grad1)',
  'url(#grad2)',
  'url(#grad3)',
  'url(#grad4)',
  'url(#grad5)',
  'url(#grad6)',
]

const SkillsPie = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const activeSkill =
    activeIndex !== null ? data[activeIndex] : { name: 'Skills', value: 100 }

  return (
    <section
      id='skills'
      className='relative min-h-[70vh]  flex flex-col items-center justify-center bg-gray-950  text-white py-16 px-6 overflow-hidden'
    >
      {/* Section heading */}
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl md:text-5xl font-bold'
        >
          My{' '}
          <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Skills
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-gray-400 mt-4'
        >
          My core frontend stack visualized as a premium animated pie chart.
          Hover each slice or legend to explore details.
        </motion.p>
      </div>

      {/* Main content: legend + pie chart */}
      <div className='max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center'>
        {/* Left side: legend */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <div className='flex flex-wrap gap-2 pt-2'>
            {data.map((s, i) => (
              <span
                key={s.name}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`flex items-center gap-2 border px-3 py-1.5 rounded-full text-sm cursor-pointer transition duration-300 
                  ${
                    activeIndex === i
                      ? 'bg-white/20 border-white/30 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                  }`}
              >
                <span
                  className='inline-block w-3 h-3 rounded-full'
                  style={{
                    background:
                      i === 0
                        ? 'linear-gradient(90deg,#60a5fa,#a78bfa)'
                        : i === 1
                        ? 'linear-gradient(90deg,#a78bfa,#f472b6)'
                        : i === 2
                        ? 'linear-gradient(90deg,#f472b6,#fb7185)'
                        : i === 3
                        ? 'linear-gradient(90deg,#34d399,#22d3ee)'
                        : i === 4
                        ? 'linear-gradient(90deg,#22d3ee,#60a5fa)'
                        : 'linear-gradient(90deg,#fbbf24,#f97316)',
                  }}
                />
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right side: pie chart */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className='w-full h-[380px] md:h-[420px] relative'
        >
          <ResponsiveContainer>
            <PieChart>
              {/* Gradients */}
              <defs>
                <linearGradient id='grad1' x1='0' y1='0' x2='1' y2='1'>
                  <stop offset='0%' stopColor='#60a5fa' />
                  <stop offset='100%' stopColor='#a78bfa' />
                </linearGradient>
                <linearGradient id='grad2' x1='0' y1='0' x2='1' y2='1'>
                  <stop offset='0%' stopColor='#a78bfa' />
                  <stop offset='100%' stopColor='#f472b6' />
                </linearGradient>
                <linearGradient id='grad3' x1='0' y1='0' x2='1' y2='1'>
                  <stop offset='0%' stopColor='#f472b6' />
                  <stop offset='100%' stopColor='#fb7185' />
                </linearGradient>
                <linearGradient id='grad4' x1='0' y1='0' x2='1' y2='1'>
                  <stop offset='0%' stopColor='#34d399' />
                  <stop offset='100%' stopColor='#22d3ee' />
                </linearGradient>
                <linearGradient id='grad5' x1='0' y1='0' x2='1' y2='1'>
                  <stop offset='0%' stopColor='#22d3ee' />
                  <stop offset='100%' stopColor='#60a5fa' />
                </linearGradient>
                <linearGradient id='grad6' x1='0' y1='0' x2='1' y2='1'>
                  <stop offset='0%' stopColor='#fbbf24' />
                  <stop offset='100%' stopColor='#f97316' />
                </linearGradient>
              </defs>

              <Pie
                data={data}
                dataKey='value'
                nameKey='name'
                innerRadius='60%'
                outerRadius='90%'
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
                onMouseEnter={(_, idx) => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                isAnimationActive
                animationDuration={900}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: 'rgba(15,16,39,0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  color: '#fff',
                  backdropFilter: 'blur(6px)',
                  fontWeight: 500,
                }}
                itemStyle={{ color: '#fff' }}
                formatter={(value, name) => [`${value}%`, name]}
              />
              <Legend verticalAlign='bottom' height={24} />
            </PieChart>
          </ResponsiveContainer>

          {/* Center text */}
          <div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center'>
            <div className='text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              My Skill
            </div>
            <div
              className={`text-2xl font-bold transition-all duration-300 ${
                activeIndex !== null
                  ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              {activeSkill.name}
            </div>
            <div
              className={`text-lg transition-all duration-300 ${
                activeIndex !== null
                  ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                  : 'text-gray-300'
              }`}
            >
              {activeSkill.value}%
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsPie
