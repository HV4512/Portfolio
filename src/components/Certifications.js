import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';

import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

// Services data
const services=[
  
  {
    name : 'AWS Academy Cloud Architecting',
    description: "Worked on AWS servers and learnt about creating Web Apps.",
    link:'https://drive.google.com/file/d/1NZJG1ZOBQ8jtcQnttOhXvWHi0vYWC-uw/view?usp=sharing',
  },
  {
    name : 'JavaScript WITH HTML AND CSS',
    description: "This covered how to build modern webpages using JavaScript.",
    link:'https://drive.google.com/file/d/12cKcfxHZ-DdEzZ3PvvvtXcL1GpCgwdNh/view?usp=sharing',
  },
  // {
  //   name : 'Building Chatbot',
  //   description: "Built a conversational chatbot using Natural Language Processing and IBM's Watson Assistant. ",
  //   link:'https://drive.google.com/file/d/1GW-q6PWcHpLKAeMLokZ7dMNQLkxhvhzE/view?usp=sharing',
  // },
  {
    name : 'Introduction To IOT',
    description: "Learnt about fundamentals of IoT.",
    link:'https://drive.google.com/file/d/1j24OSptsVKaO4S13Vn_wtOJxJUCZytcZ/view?usp=sharing',
  },
  {
    name : 'SQL Intermediate',
    description: "It covers topics like query optimization, data modeling.",
    link:'https://www.hackerrank.com/certificates/dcb2a88a7389',
  },
];

const Services = () => {
  return( 
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & Image*/}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 flex items-center mix-blend-lighten mb-12 lg:mb-0'>
        <div>

        <h2 className='h2 text-accent mt-4 mb-2'>Certifications</h2>
        <h3 className='h3 max-w-[455px] mb-8'>I have completed.</h3>
        </div>
        {/* <button className='btn btn-sm'>See My Work</button> */}
        </motion.div>
        {/* Services*/}
        <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex1'>

          {/* Service List */}
          <div>
            {services.map((service,index)=> {
              // Destructure Service
              const {name,description,link}=service;

              return(
              <div className='border-b border-white/20 h-[146px] mb-[20px] flex justify-center items-center' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description} </p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a className='btn w-5 h-5 mb-[25px]'  href={link} target='_blank' rel="noreferrer"><BsArrowUpRight/></a>
                  <a className='text-gradient text-sm mx-1' href={link} target='_blank' rel="noreferrer">See Certificate</a>
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>

    </section>
  );
};

export default Services;
