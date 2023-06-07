import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET

const Music = () => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [index, setIndex] = useState(0);

  const nextTrack = () => {
    setIndex(index + 1);
    if (index > tracks.length - 2) setIndex(0);
  }

  const previousTrack = () => {
    setIndex(index - 1);
    if (index < 1) setIndex(tracks.length - 1);
  }

  const checkIndex = (index) => {
    if (index >= 16 && index < 21) return true;
  }

  async function getTracks() {
    const artistId = '4vt0CdR5NkqhsFLPIVg5a9';
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
    }
    const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
    const data = await response.json();
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.access_token,
      },
    }
    const albumResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, searchParameters);
    const albumData = await albumResponse.json();
    setAlbums(albumData.items);
    let music = [];
    for (let i = 0; i < albumData.items.length; i++) {
      const albumId = albumData.items[i].id;
      const trackResponse = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, searchParameters);
      const trackData = await trackResponse.json();
      music = music.concat(trackData.items);
    }
    setTracks(music);
  }

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <section className='fourth-section section-div h-[300vh]'>
      <div className='div-container h-3/4 mr-auto rounded-r-[100px] flex flex-col items-center justify-center text-white'>
          <h1 className='text-6xl font-bold'>Music</h1>
          <hr className='w-4/5 h-1 bg-white my-5' />

          <div className='w-2/3 h-[500px] my-5 bg-slate-200 px-2 pt-2 flex flex-col'>
            <img className='w-full h-[300px]' src={ checkIndex(index) ? albums[16]?.images[0].url : (index === 21) ? albums[17]?.images[0].url : albums[index]?.images[0].url } alt='album' className='w-full h-full object-cover' />
            <h1 className='text-4xl text-center my-5 text-black font-bold'>{tracks[index]?.name}</h1>
          </div>

          <h1 className='text-xl my-2 font-bold'>Track Preview</h1>
          <div className='flex items-center gap-5'>
            <button className='music-button' onClick={previousTrack}>
              <BiChevronLeft  />
            </button>
            <audio src={tracks[index]?.preview_url} controls />
            <button className='music-button' onClick={nextTrack}>
              <BiChevronRight />
            </button>
          </div>
      </div>
    </section>
  )
}

export default Music