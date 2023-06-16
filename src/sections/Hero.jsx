import React from 'react'
import { SiApplemusic, SiSpotify } from 'react-icons/si'

import Section from '../components/Section'

export const Hero = () => {
    return (
        <Section styles={"flex flex-col items-start justify-center p-8 mx-auto"}>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hello There,
                <br />
                I'm <span className='text-red-500 px-1 italic'>eMMANUEL</span>
            </h1>
            <p className='text-lg text-gray-600 mt-4'>
                I am a music producer and dj
            </p>
            <div className='flex gap-5 h-8 my-5'>
                <a href="https://open.spotify.com/artist/4vt0CdR5NkqhsFLPIVg5a9" target="_blank" rel="noreferrer">
                    <SiApplemusic className='text-4xl text-red-500' />
                </a>
                <a href="https://open.spotify.com/artist/4vt0CdR5NkqhsFLPIVg5a9" target="_blank" rel="noreferrer">
                    <SiSpotify className='text-4xl text-red-500' />
                </a>
            </div>
            <button 
                className='bg-red-500 text-lg text-white font-bold px-4 py-2 rounded-2xl mt-16'
            >
                Get in touch
            </button>
        </Section>
    )
}

export default Hero