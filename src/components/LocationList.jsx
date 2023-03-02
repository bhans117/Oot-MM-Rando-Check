import React, { useContext, useState } from 'react';
import Location from './Location';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import Switch from '@mui/material/Switch';


const LocationList = () => {
  const [showCheckedItems, setShowCheckedItems] = useState(false);
  const logContext = useContext(ContextSpoilerLog);
  const toggleShowCheckedItems = () => {
    setShowCheckedItems(!showCheckedItems)
  }

  return (
    <div>
      <div className='flex items-center my-3'>
        <div className='font-semibold text-lg mr-5'>
          Locations
        </div> 

        <div className='p-2 border-2 w-fit flex items-center cursor-pointer' onClick={toggleShowCheckedItems}>
              <div className='text-sm'>Show Items</div>
              <Switch 
                size='small'
                checked={showCheckedItems}
                onChange={toggleShowCheckedItems}
                color="primary"
              />
        </div>
      </div>

      {logContext.getLocations() && logContext.getLocations().map((value, i) => 
        <div key={i}>
          <Location data={value} showCheckedItems={showCheckedItems}/>
        </div>
      )}
    </div>
  )
}

export default LocationList;