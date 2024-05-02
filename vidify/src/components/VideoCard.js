import React from 'react'

const VideoCard = ({info}) => {
    const {snippet} = info;
    const {channelTitle,title,thumbnails} = snippet;
    // console.log(info);
  return (
    <div className='p-3 m-3 w-64 shadow-lg rounded-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        {/* <li>{statistics.viewCount}</li> */}
      </ul>
    </div>
  )
}

export default VideoCard;
