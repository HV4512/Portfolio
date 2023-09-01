import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqfwbgl', 'template_h6hztw2', form.current, '_02IuP1OFU42miwYr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return( 
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* Text */}
      <motion.div
      variants={fadeIn('right',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.3}}
      className='flex-1 flex justify-start items-center'>
        <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get In Touch</h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work<br/>Together!</h2>
        </div>
      </motion.div>
      {/* Form */} 
      <motion.form 
      ref={form} onSubmit={sendEmail}
      variants={fadeIn('left',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.3}} 
      className='flex-1 border rounded-2xl flex flex-col gap-y-6
      pb-24 p-6 items-start'>
        <input
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
        type='text'
        name="user_name"
        placeholder='Your Name'
        />
        <input
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
        type='email'
        name="user_email"
        placeholder='Your E-mail'
        />
        <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
         focus:border-accent transition-all resize-none mb-12'
         placeholder='Your Message'
         name="message"
         ></textarea>
         <button type="submit" value="Send" className='btn btn-lg'>Send Message</button>
      </motion.form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
