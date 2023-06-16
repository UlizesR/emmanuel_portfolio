import React from 'react'
import { SiApplemusic, SiSpotify, SiLinkedin, SiInstagram } from 'react-icons/si'

const Menu = (props) => {
    const { menuOpened, setMenuOpened, setSection } = props

    return (
        <>
            <button 
                onClick={() => setMenuOpened(!menuOpened)}
                className='z-20 fixed top-3 right-10 p-2.5 bg-red-500 w-11 h-11 rounded-xl'
            >
                <div
                    className={`bg-white h-1 rounded-md w-full transition-all ${
                    menuOpened ? "rotate-45 translate-y-0.5" : ""
                    }`}
                />
                <div
                    className={`bg-white h-1 rounded-md w-full my-1 ${
                    menuOpened ? "hidden" : ""}`}
                />
                    <div
                    className={`bg-white h-1 rounded-md w-full transition-all ${
                    menuOpened ? "-rotate-45 -translate-y-0.5" : ""}`}
                />
            </button>
            <div
                className={`z-10 fixed top-0 right-0 bottom-0 bg-gray-400 transition-all overflow-hidden flex flex-col
                ${menuOpened ? "w-80" : "w-0"}`}
            >
                <div className="flex-1 flex flex-col justify-center gap-6 p-8">
                    <div className='flex flex-col items-start justify-center gap-6 my-auto'>
                        <MenuItem label="Home" onClick={() => setSection(0)} />
                        <MenuItem label="About" onClick={() => setSection(1)} />
                        <MenuItem label="Music" onClick={() => setSection(2)} />
                        <MenuItem label="Contact" onClick={() => setSection(3)} />
                    </div>
                    <div className='flex gap-5 h-8 my-5'>
                        <a href="https://open.spotify.com/artist/4vt0CdR5NkqhsFLPIVg5a9" target="_blank" rel="noreferrer">
                            <SiApplemusic className='text-3xl text-gray-600' />
                        </a>
                        <a href="https://open.spotify.com/artist/4vt0CdR5NkqhsFLPIVg5a9" target="_blank" rel="noreferrer">
                            <SiSpotify className='text-3xl text-gray-600' />
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                            <SiLinkedin className='text-3xl text-gray-600' />
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                            <SiInstagram className='text-3xl text-gray-600' />
                        </a>
                    </div>
                </div> 
            </div>
        </>
  )
}

const MenuItem = (props) => {
    const { label, onClick } = props
    return (
        <button
            onClick={onClick}
            className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
        >
            {label}
        </button>
    )
}

export default Menu