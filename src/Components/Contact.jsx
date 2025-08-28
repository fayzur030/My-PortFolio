import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, SendHorizontal } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_l6y1bu9', 'template_n870pad', form.current, {
        publicKey: '2wKsIjV1_BtbPMKKW',
      })
      .then(
        () => {
          console.log('✅ SUCCESS!')
          alert('✅ Message sent successfully!')
          form.current.reset()
        },
        (error) => {
          console.log('❌ FAILED...', error.text)
          alert('❌ Something went wrong. Try again!')
        }
      )
  }

  return (
    <section id='contact' className='py-16 sm:py-20 bg-gray-900 text-white'>
      {/* Heading */}
      <div className='max-w-4xl mx-auto text-center mb-10 sm:mb-12 px-4'>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-3xl sm:text-4xl md:text-5xl font-bold'
        >
          Contact <span className='text-blue-400'>Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg'
        >
          Feel free to reach out for collaborations or just a friendly hello 👋
        </motion.p>
      </div>

      {/* Form */}
      <div className='max-w-2xl mx-auto px-4'>
        <form ref={form} onSubmit={sendEmail} className='space-y-4'>
          <input
            type='text'
            name='user_name'
            placeholder='Your Name'
            required
            className='w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-400 outline-none text-sm sm:text-base'
          />
          <input
            type='email'
            name='user_email'
            placeholder='Your Email'
            required
            className='w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-400 outline-none text-sm sm:text-base'
          />
          <textarea
            name='message'
            rows={5}
            placeholder='Your Message'
            required
            className='w-full p-3 rounded-lg bg-gray-900 border border-gray-700 resize-none focus:border-blue-400 outline-none text-sm sm:text-base'
          ></textarea>
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 text-sm sm:text-base'
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className='flex justify-center gap-6 mt-8'>
          <a
            href='https://github.com/fayzur030'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-400 transition-colors duration-300'
          >
            <Github className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' />
          </a>
          <a
            href='https://www.linkedin.com/in/md-fayzur-rahman-b25364380/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-400 transition-colors duration-300'
          >
            <Linkedin className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' />
          </a>
          <a
            href='https://instagram.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-400 transition-colors duration-300'
          >
            <Instagram className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' />
          </a>
          <a
            href='https://t.me/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-400 transition-colors duration-300'
          >
            <SendHorizontal className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
