import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div className=" min-h-screen bg-cover bg-[url('/src/public/images/bg.jpg')]">
      
     <GptSearchBar/>
     <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
