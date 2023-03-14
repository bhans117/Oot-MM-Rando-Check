import React, { useContext } from 'react'
import FileInput from './FileInput';
import TabButton from './TabButton'
import { ContextSpoilerLog } from '../contextSpoilerLog';
import headerImage from '../img/ootmm.png'

const Heeader = ({tab, setTab}) => {
  const logContext = useContext(ContextSpoilerLog);

  return (
    <div className='fixed top-0 bg-white w-full z-50 flex flex-col'>
      
      <div className='flex justify-between border-b-2 px-10 items-center py-2'>
        <div className='flex gap-5 items-center cursor-pointer' onClick={() => setTab("Home")} >
          <img src={headerImage} alt="headerImage" className='w-40 h-20'/>
          <div className='text-xl font-bold'>OoTMM Randomizer Guide</div>
        </div>
        
        <div className='flex gap-3'>
          <FileInput />
          <a className='py-3 px-2 rounded-md bg-gray-300 text-slate-800 font-bold cursor-pointer w-fit h-fit' href='https://ootmm.com/' target='_blank' rel="noreferrer" >Generate New Seed</a>
        </div>
      </div>


      <div>
        {logContext.getLog() && 
        <div className='flex flex-col px-10 pt-2 bg-slate-100 border'>
          {logContext.getLog()['Name'] && <div className='text-sm font-medium'>
            {logContext.getLog()['Name']}
          </div>}
          <div className='text-xs'>
            Seed: {logContext.getLog()['Seed'].secret}
          </div>
          <div className='text-xs font-light'>
            Version: {logContext.getLog()['Version'].secret}
          </div>
          <div className='flex my-5 gap-3'>
            <span 
              onClick={() => setTab("Home")}>
              <TabButton tab={tab}>Home</TabButton>
            </span>
            <span 
              onClick={() => setTab("Locations")}>
              <TabButton tab={tab}>Locations</TabButton>
            </span>
            <span 
              onClick={() => setTab("Items")}>
              <TabButton tab={tab}>Items</TabButton>
            </span>
            <span 
              onClick={() => setTab("Full Log")}>
              <TabButton tab={tab}>Full Log</TabButton>
            </span>
          </div>
        </div>}
      </div>
      
    </div>
  )
}

export default Heeader