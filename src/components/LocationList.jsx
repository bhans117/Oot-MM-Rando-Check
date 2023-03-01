import React, { useContext } from 'react';
import Location from './Location';
import { ContextSpoilerLog } from '../contextSpoilerLog';

const LocationList = () => {
  const logContext = useContext(ContextSpoilerLog)

  return (
    <div>
      <div className='font-semibold text-lg my-5'>
        Locations
      </div> 

      {logContext.getLocations() && logContext.getLocations().map((value, i) => 
        <div key={i}>
          <Location data={value}/>
        </div>
      )}
    </div>
  )
}

export default LocationList;