import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='fixed text-white bottom-0 flex flex-row w-full justify-center bg-cyan-800'>
        <div className='grid grid-cols-4 sm:w-1/2 wq:w-3/4 w-full items-baseline justify-center'>
        <Link className='flex flex-col justify-center items-center' to="/">
           <div className='text-sm'>🔥</div>
           <div className='text-sm pb-0.5'>Trending</div>
       </Link>
       <Link className='flex flex-col justify-center items-center' to="/movies">
           <div className='text-sm'>🎬</div>
           <div className='text-sm pb-0.5'>Movies</div>
       </Link>
       <Link className='flex flex-col justify-center items-center' to="/series">
           <div className='text-sm'>🖥️</div>
           <div className='text-sm pb-0.5'>Series</div>
       </Link>
       <Link className='flex flex-col justify-center items-center' to="/search">
           <div className='text-sm'>🔍</div>
           <div className='text-sm pb-0.5'>Search</div>
       </Link>
    </div>
    </div>
  )
}

export default Footer