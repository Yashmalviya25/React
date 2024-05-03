import React from 'react';
import { CiPlay1 } from 'react-icons/ci';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-1/2 pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl mx-10 font-bold'>{title}</h1>
      <p className='py-6 mx-10 text-lg w-1/3'>{overview}</p>
      <div className='flex items-center mx-10 space-x-4'>
        <button className='flex items-center mb-3 bg-gray-500 text-white py-4 px-12 text-lg rounded-lg hover:bg-opacity-50'>
          <CiPlay1 className='mr-1' />
          Play
        </button>
        <button className='flex items-center  mb-3 bg-gray-500 text-white py-4 px-12 text-lg hover:bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;