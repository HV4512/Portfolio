import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/bckendimg.png';

const Work = () => {
  return (<section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight  text-accent'>
              My Latest<br/>Work
            </h2>
            <p className='max-w-sm mb-8'>These Are Some Of My Latest Projects.</p>
            {/* <button className='btn btn-sm'>View All Projects</button> */}
          </div>
          {/* Image1*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
              <span className='text-gradient'>Full Stack Web Development</span>
              </div>
            {/* title */}
            <a href="https://techtonics.vercel.app/" target='_blank' rel="noreferrer">
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Tech - Tonic (Social Media Application)</span>
            </div>
            </a>
          </div>
          <div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('left',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-10'>
          {/* Image 2*/}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
            {/* Pretitle */}
            <div className='absolute -bottom-full mb-8 left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
              <span className='text-gradient'>Machine Learning</span>
              </div>
            {/* title */}
            <a href="https://colab.research.google.com/drive/1BvpIlbYniag1oWs7grwYXuUwKG1MCB38?usp=sharing" target='_blank' rel="noreferrer">
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Fake News Prediction (Logistic Regression)</span>
            </div>
            </a>
          </div>
          {/* Image 3 */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
              <span className='text-gradient'>Backend Development</span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>APIs and Microservices</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>);
};

export default Work;
