import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET

const Music = () => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

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

console.log(albums);

  return (
    <section className='fourth-section h-[300vh] w-full relative overflow-hidden'>
      <div className='h-1/2 w-full flex flex-col  justify-center'>
        <div className='h-full w-[40%] p-10 flex flex-col bg-[rgba(175,0,255,0.25)] rounded-r-[100px]' id='music'>
          <div className='flex h-full flex-col gap-10 justify-start items-center text-white mt-20'>
            <h1 className='text-6xl font-bold '>Music</h1>
            <div className='h-1/4 w-2/3 flex items-center justify-center'>
              <button className='h-1/2 w-1/2 bg-[rgba(175,0,255,0.25)] rounded-[100px] text-white font-bold text-2xl'>
                <BiChevronLeft />
              </button>
              <Card className=' border-0'>
                <Card.Img src={albums[8]?.images[0].url} />
                <Card.Body className='flex flex-col gap-10 justify-center items-center'>
                  <Card.Title className='text-4xl text-white font-bold'>
                    {tracks[8]?.name}
                  </Card.Title>
                </Card.Body>
              </Card>
              <button className='h-1/2 w-1/2 bg-[rgba(175,0,255,0.25)] rounded-[100px] text-white font-bold text-2xl'>
                <BiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Music