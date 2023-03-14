import React from 'react'
import TwitchStreamerCard from './TwitchStreamerCard'
import { twitchStreamers } from '../utils/resourceData.js'

const TwitchStreamerList = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='text-lg font-bold'>OoTMM Streamers to Watch</div>
      <div className='flex gap-5'>
        {twitchStreamers.map((streamer, i) => (
          <TwitchStreamerCard data={streamer} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default TwitchStreamerList