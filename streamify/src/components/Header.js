import React from 'react';
import logo from '../public/images/logo.png';

const Header = () => {
  return (
    <div className='w-full bg-gradient-to-r from-cyan-50 to-blue-500 flex items-center p-4'>
      <img className="w-20" alt="main-logo" src={logo} />
    </div>
  );
};

export default Header;
