import React from 'react';
import Img from '../assets/3.png'; 
import { Link } from 'react-scroll';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'; 


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
    <div className='flex-1 text-center font-secondary lg:text-left'>
    <motion.h1 
    variants={fadeIn('up',0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, anount:0.7}}
    className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
    HARSH <span>VARDHAN</span></motion.h1>
    <motion.div 
    variants={fadeIn('up',0.4)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, anount:0.7}}
    className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
    <span className='text-white mr-4'>I am a</span>
    <TypeAnimation 
    sequence={[
      'Developer',
      2000,
      'Designer',
      2000,
      'Gamer',
      2000,
    ]} 
    speed={50}
    className='text-accent'
    wrapper='span'
    repeat={Infinity}
    />
    </motion.div>
    <motion.p 
    variants={fadeIn('up',0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, anount:0.7}}
    className='mb-8 max-w-lg mx-auto lg:mx-0'> Welcome To My Portfolio, Here You Can Find What I Know, What I Do And Who I Am.
    </motion.p> 
    <motion.div 
    variants={fadeIn('up',0.6)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, anount:0.7}}
    className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
     <Link to='contact' 
     smooth={true}
     className='cursor-pointer scroll-smooth'> <button className='btn btn-lg'>Contact Me</button> </Link>
    <a href='https://bit.ly/hv_4512' target="_blank" rel="noreferrer" className='text-gradient btn-link'>My Resume</a>
    </motion.div>
    {/* Socials */}
   <motion.div 
   variants={fadeIn('up',0.7)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, anount:0.7}}
   className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
   <a href='https://github.com/HV4512' target="_blank" rel="noreferrer"><FaGithub/></a>
   <a href='https://www.linkedin.com/in/harsh-vardhan-05/' target="_blank" rel="noreferrer"><FaLinkedin/></a>
   <a href='https://www.instagram.com/jobby.karn/' target="_blank" rel="noreferrer"><FaInstagram/></a>
   </motion.div>
    </div>
    <motion.div
    variants={fadeIn('down',0.5)}
    initial='hidden'
    whileInView={'show'}
    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'> {/* HeadShot Image */}
    <img src={Img} alt=''/>
    </motion.div>
    </div>
    </div>
    </section>
  );
};

export default Banner;
