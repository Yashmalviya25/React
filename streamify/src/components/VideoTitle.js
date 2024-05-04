import React from 'react';
import { CiPlay1 } from 'react-icons/ci';

const VideoTitle = ({ title, overview,onReplay  }) => {
  return (
    <div className='hidden md:inline-block w-1/2 pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-[10px] md:text-3xl md:mx-10 md:font-bold'>{title}</h1>
      <p className=' py-6  md:py-2 mx-1 md:mx-10 text-[5px] md:text-lg w-full md:w-1/2'>{overview}</p>
      <div className='flex items-center mx-2  md:mx-10 md:space-x-4'>
        <button onClick={onReplay} className='flex items-center md:mb-3 bg-gray-500 text-white py-1 md:py-4 px-3 md:px-12 text-[7px] md:text-lg rounded-lg hover:bg-opacity-50'>
          <CiPlay1 className='mr-1' />
          Replay
        </button>
        <button className='flex items-center md:mb-3 bg-gray-500 text-white py-1 md:py-4 px-3 md:px-12 text-[7px] md:text-lg rounded-lg hover:bg-opacity-50'>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;