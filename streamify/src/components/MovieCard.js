import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'
const MovieCard = ({posterPath,movie}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={IMAGE_CDN_URL +posterPath} alt="card" />
    </div>
  )
}

export default MovieCard
