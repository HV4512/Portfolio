import React from 'react';
import name1 from '../assets/name1.svg';

const Header = () => {
  return (
    <header className='py-8'>
    <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
    <a href='/'>

    <img src={name1} alt='' />
    </a>
    <button className='btn btn-sm'>Work with me</button>
    </div>
    </div>
    </header>
  );
};

export default Header;
