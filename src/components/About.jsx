import React from 'react'

const About = () => {
  return (
    <section className='second-section section-div h-[500vh]'>
      <div className='div-container h-3/4 ml-auto rounded-l-[300px]'>
        <div className='flex flex-col gap-10 items-center text-white mt-[900px]' id='about'>
            <h1 className='text-6xl font-bold'>About Me</h1>
            <img src='/images/emmanuel.png' alt='emmanuel' className='w-3/4 h-3/4 bg-white rounded-full' />
            <p className='text-2xl mt-10 text-center'>
                I'm a music producer and DJ based in Walla Walla, Washington.
                I'm an international student from Zambia studying at Whitman College.
                I've been producing music and DJing for many years. 
                I love to make music and collaborate with other artists.
            </p>
        </div>
      </div>
    </section>
  )
}

export default About