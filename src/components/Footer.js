import React from 'react'
import Harsh from '../assets/Harsh.svg'
import Vardhan from '../assets/Vardhan.svg';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='bg-black h-[15vh] flex items-center justify-between '>
            <div className=''>
                <img src={Harsh} alt='Harsh' />
                <img src={Vardhan} alt='Vardhan' />
            </div>
            <div className='flex items-center max-w-max mx-auto lg:mx-0'>

                <div className='flex flex-col gap-y-6 px-4'>
                    <a href='https://github.com/HV4512' target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/harsh-vardhan-05/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href='https://www.instagram.com/jobby.karn/' target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>
                <div className='flex flex-col gap-y-2 px-4'>
                    <a href='https://github.com/HV4512' target="_blank" rel="noreferrer"> Github </a>
                    <a href='https://www.linkedin.com/in/harsh-vardhan-05/' target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href='https://www.instagram.com/jobby.karn/' target="_blank" rel="noreferrer">Instagram</a>
                </div>

            </div>
        </section>
    )
}

export default Footer