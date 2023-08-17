import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section className='section' id='about' ref={ref} >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* Img */}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 bg-about bg-contain h-[640px] bg-no-repeat mix-blend-lighten bg-top  '></motion.div>
        {/* Text */}
        <motion.div 
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent text-bold'>About me.</h2>
          <h3 className='h3 mb-4'>I am a Front-end developer.<br />Computer Science Undergrad At SRM
          </h3>
          <p className='mb-6'>1.
            I am a 4th year Undergrad at SRM 
            Describe the image you’d like to generate. The more detail you can provide, the better.
            3.
            Choose an image style from our available options like Watercolor, Filmic, Neon, Color Pen</p>
          {/* Stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          {/* Years of experience */}
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
             { inView?
              <CountUp start={0} end={2} duration={3}/>:null}
              </div>
              <div className='font-primary text-sm tracing-[2px]'>
              Years of <br/>Experience
              </div>
            </div>
          {/* Projects Completed*/}
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
             { inView?
              <CountUp start={0} end={10} duration={3}/>:null}+
              </div>
              <div className='font-primary text-sm tracing-[2px]'>
              Projects<br/>Completed
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>Contact me</button>
          <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </div>
          </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
