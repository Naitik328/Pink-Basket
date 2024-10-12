import React from 'react'
import bg from '/bg2.gif'
import bg2 from '/2.mp4'
const Banner = () => {
  return (
  <div className='w-full md:h-[450px] flex justify-center bg-[#fbd9d2]'>
  <video src={bg2} autoPlay loop muted></video>
  </div>
    
  )
}

export default Banner