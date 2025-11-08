import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
  const { seekBar, seekBg, play, pause, track } = useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black flex items-center justify-between text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt={track.name} />
                <div>
                        <p>{track.name}</p>
                        <p>{track.desc?.slice(0,12)}</p>
                </div>
        </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffle"  />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="prev"  />
                <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="play"  />
                <img onClick={pause} className='w-4 cursor-pointer' src={assets.next_icon} alt="next"  />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="loop"  />
        </div>
        <div className='flex items-center gap-5'>
                <p>1:06</p>
                <div  ref={seekBg}  className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none width-0 bg-green-800 rounded-full ' />
                </div>
                <p>3:20</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-55'>
        <img  className="w-4" src={assets.play_icon} alt="" />
        <img  className="w-4" src={assets.mic_icon} alt="" />
        <img  className="w-4" src={assets.queue_icon} alt="" />
        <img  className="w-4" src={assets.speaker_icon} alt="" />
        <img  className="w-4" src={assets.volume_icon} alt="" />
        <div
                className="w-20 bg-slate-50 rounded-full cursor-pointer h-1">
        </div>
        <img  className="w-4" src={assets.mini_player_icon} alt="" />
        <img  className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player
