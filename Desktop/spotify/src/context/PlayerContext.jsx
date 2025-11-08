/* eslint-disable react-refresh/only-export-components */
import {useRef, createContext,useState} from 'react';
import { songsData } from '../assets/assets'; 



export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg=useRef();
  const seekBar=useRef();

  const [track,setTrack]=useState(songsData[0]);
  const [playStatus,setPlayStatus]=useState(false);
  const [time,setTime]=useState({currentTime:{
    second:0,
    minute:0
  },
  totalTIme:{
    second:0,
    minute:0
  }});

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,setPlayStatus,
    time,setTime,
    play,
    pause
  }

  const play=()=>{
    audioRef.current.play();
    setPlayStatus(true)
  }

  const pause=()=>{
    audioRef.current.pause();
    setPlayStatus(false)
  }

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;