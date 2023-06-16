import { useState, useEffect} from 'react'
import Section from '../components/Section'

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
        <Section>
            <h1 className="text-4xl font-bold">Music</h1>
        </Section>
    )
}

export default Music