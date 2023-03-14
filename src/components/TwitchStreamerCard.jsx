import React from 'react'
import { TwitchPlayer } from 'react-twitch-embed';


const TwitchStreamerCard = ({data}) => {
  return (

    <a
      className='flex flex-col border-2 w-fit rounded-md shadow-lg'
      href={data.link}
      target='_blank'
      rel="noreferrer"
    >
      <TwitchPlayer id={data.channel} channel={data.channel} width={420} height={200} autoplay muted onReady={() => console.log('player ready')} />
      <div className='flex items-center gap-2 py-2 px-3 '>
        <img className ='w-16 h-16 rounded-full drop-shadow-2xl' src={data.icon} alt={data.name}/>
        <div className='font-semibold text-lg'>{data.name}</div>
      </div>
    </a>

  )
}

export default TwitchStreamerCard