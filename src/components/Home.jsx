import React from 'react'
import TwitchStreamerList from './TwitchStreamerList'

const Home = () => {
  return (
    <div className='flex flex-col gap-5'>
    <div className='text-lg font-bold'>Welcome</div>
    <div className='text-md font-semibold'>Use Cases:</div>
      <ol className='list-decimal pl-10'>
        <li>Quickly check what item is at a location without having to look at the entire spoiler log.</li>
        <li>Highlight all the necessary check "Way of Hero"</li>
        <li>Highlight checks with junk: typically heart peices and rupees</li>
        <li>Highlight checks with upgrades</li>
        <li>Highlight checks with large rupees: 50 or more.</li>
      </ol>
      <div className='text-md font-semibold'>How to use:</div>
      <ol className='list-decimal pl-10'>
        <li>Click Upload Spoiler Log</li>
        <li>Choose a spoiler log to upload</li>
        <li>On the locations tab, click any location to mark it as checked</li>
        <li>On the items tab, click any item to add it to inventory. It will show up as checked in the locations tab.</li>
      </ol>
      <TwitchStreamerList />
    </div>
  )
}

export default Home