import React, { useLayoutEffect } from 'react'
import {Link} from 'react-scroll'
import { FiPhoneCall } from 'react-icons/fi'
import { RiUserLine } from 'react-icons/ri'
import { SiMusicbrainz } from 'react-icons/si'
import { SlMusicToneAlt, SlHome } from 'react-icons/sl'
import gsap from 'gsap'

import '../styles/global.modules.css'

const Navbar = () => {

    const tl = gsap.timeline()

    const center = window.innerWidth / 2

    useLayoutEffect(() => {
        tl.to('#nav', {
            x: center,
            scrollTrigger: {
                trigger: '.fourth-section',
                start: 'top-=1000 bottom',
                end: 'top top',
                scrub: true,
                immediateRender: false,
                markers: true
            }
        })
    }, [])


    return (
        <nav className='fixed bottom-2 w-1/2 overflow-hidden z-50' id='nav'>
            <div className='container mx-auto'>
                <div 
                    className='navbar-div'
                >
                    <Link 
                        to='hero' 
                        smooth={true} 
                        duration={1000} 
                        className='link'
                    >
                        <SlHome className='ricon'/>
                    </Link>
                    <Link 
                        to='about' 
                        smooth={true} 
                        duration={1000} 
                        className='link'
                    >
                        <RiUserLine className='ricon'/>
                    </Link>
                    <Link 
                        to='tech' 
                        smooth={true} 
                        duration={1000} 
                        className='link'
                    >
                        <SiMusicbrainz className='ricon'/>
                    </Link>
                    <Link 
                        to='music' 
                        smooth={true} 
                        duration={1000} 
                        className='link'
                    >
                        <SlMusicToneAlt className='ricon'/>
                    </Link>
                    <Link 
                        to='contact' 
                        smooth={true} 
                        duration={1000} 
                        className='link'
                    >
                        <FiPhoneCall className='ricon'/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar