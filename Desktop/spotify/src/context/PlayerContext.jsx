/* eslint-disable react-refresh/only-export-components */
import {useRef, createContext,useState} from 'react';
import { songsData } from '../assets/assets'; 



export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

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

  const play = () => {
    if (audioRef.current) audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    if (audioRef.current) audioRef.current.pause();
    setPlayStatus(false);
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;