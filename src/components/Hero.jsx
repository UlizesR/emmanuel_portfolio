import React from 'react'
import {BsInstagram, BsLinkedin, BsSpotify} from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'

const Hero = () => {
  return (
    <section className='first-section h-[300vh] w-full relative overflow-hidden' id='hero'>
      <div className='h-full w-1/2 bg-transparent p-10 flex flex-col justify-start'>
        <div className='mt-[275px]'>
          <h1 className='text-5xl text-white font-bold'>
            Hello, I'm <span className='text-blue-500'>eMMANUEL</span>
          </h1>
          <h2 className='text-2xl text-white font-bold mt-5'>
            Music Producer - DJ
          </h2>
          <div className='mt-20 text-3xl text-white flex gap-5'>
            <a href='https://www.instagram.com/mr.eass_negus/' target='_blank' >
              <BsInstagram className='hover:text-violet-600'/>
            </a>
            <a href='https://www.linkedin.com/in/emmanuel-sakala-b0b9b321a/' target='_blank' >
              <BsLinkedin className='hover:text-violet-600'/>
            </a>
            <a href='https://open.spotify.com/artist/4vt0CdR5NkqhsFLPIVg5a9' target='_blank' >
              <BsSpotify className='hover:text-violet-600'/>
            </a>
            <a href='https://open.spotify.com/artist/4vt0CdR5NkqhsFLPIVg5a9' target='_blank' >
              <SiApplemusic className='hover:text-violet-600'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero