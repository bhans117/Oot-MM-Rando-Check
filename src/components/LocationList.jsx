import React, { useContext, useState } from 'react';
import Location from './Location';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import Switch from '@mui/material/Switch';

const LocationList = () => {
  const [showCheckedItems, setShowCheckedItems] = useState(false);
  const [showHero, setHero] = useState(false);
  const [showJunkHelper, setShowJunkHelper] = useState(false);
  const logContext = useContext(ContextSpoilerLog);
  const toggleShowCheckedItems = () => {
    setShowCheckedItems(!showCheckedItems)
  }

  return (
    <div>
      <div className='flex items-center my-3 gap-3'>
        <div className='font-semibold text-lg'>
          Locations
        </div> 

        <div className='p-2 border-2 w-fit flex items-center cursor-pointer' onClick={toggleShowCheckedItems}>
              <div className='text-sm'>Checked Items</div>
              <Switch 
                size='small'
                checked={showCheckedItems}
                onChange={toggleShowCheckedItems}
                color="primary"
              />
        </div>
        <div className='p-2 border-2 w-fit flex items-center cursor-pointer' onClick={() => setHero(!showHero)}>
              <div className='text-sm'>Way of Hero</div>
              <Switch 
                size='small'
                checked={showHero}
                onChange={() => setHero(!showHero)}
                color="primary"
              />
        </div>
        <div className='p-2 border-2 w-fit flex items-center cursor-pointer' onClick={() => setShowJunkHelper(!showJunkHelper)}>
              <div className='text-sm'>No Junk</div>
              <Switch 
                size='small'
                checked={showJunkHelper}
                onChange={() => setShowJunkHelper(!showJunkHelper)}
                color="primary"
              />
        </div>
      </div>

      {logContext.getLocations() && logContext.getLocations().map((value, i) => 
        <div key={i}>
          <Location data={value} hero={showHero} junk={showJunkHelper} showCheckedItems={showCheckedItems}/>
        </div>
      )}
    </div>
  )
}

export default LocationList;