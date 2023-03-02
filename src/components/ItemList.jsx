import React, { useContext, useState } from 'react';
import ItemCheck from './ItemCheck';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import { itemType } from '../utils/itemType';
import Switch from '@mui/material/Switch';

const ItemsList = () => {
  const [showJunk, setShowJunk] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const logContext = useContext(ContextSpoilerLog);
  const toggleShowJunk = () => {
    setShowJunk(!showJunk)
  }

  const toggleShowLocations = () => {
    setShowLocations(!showLocations)
  }

  const getFilteredItems = () => {
    return logContext.getItemList().filter(item => (!itemType.junk.includes(item.secret)))
  }

  const getJunkItmes = () => {
    return logContext.getItemList().filter(item => (itemType.junk.includes(item.secret)))
  }

  const getYourCollection = (filteredArray) => {
    return filteredArray.filter(item => item.check)
  }


  return (
    <div>

      <div className='flex items-center my-3 gap-3'>
        <div className='font-semibold text-lg'>
          Items
        </div>

        <div className='p-2 border-2 w-fit flex items-center cursor-pointer' onClick={toggleShowLocations}>
              <div className='text-sm'>Show Location</div>
              <Switch 
                size='small'
                checked={showLocations}
                onChange={toggleShowLocations}
                color="primary"
              />
        </div>

        <div className='p-2 border-2 w-fit flex items-center cursor-pointer' onClick={toggleShowJunk}>
              <div className='text-sm'>Show Junk</div>
              <Switch 
                size='small'
                checked={showJunk}
                onChange={toggleShowJunk}
                color="primary"
              />
        </div>
      </div>

      <div className='p-2 border-2 my-5'>
        <div className='font-semibold mb-2'>Your Collection</div>
        {logContext.getItemList() && getYourCollection(getFilteredItems()).map((value, i) => 
          <div key={i}>
            <ItemCheck data={value} showLocations={showLocations} noStrike/>
          </div>
        )}
        {showJunk && <div>
          <div className='mt-2 mb-1 font-bold text-gray-700 text-sm'>Junk</div>
          {logContext.getItemList() && getYourCollection(getJunkItmes()).map((value, i) => 
            <div key={i}>
              <ItemCheck data={value} showLocations={showLocations} noStrike/>
            </div>
          )}
        </div>}
      </div>

      <div className='p-2 border-2'>
      <div className='font-semibold mb-2'>All Items</div>
        {logContext.getItemList() && getFilteredItems().map((value, i) => 
          <div key={i}>
            <ItemCheck data={value} showLocations={showLocations}/>
          </div>
        )}

        {showJunk && <div>
            <div className='mt-2 mb-1 font-bold text-gray-700 text-sm'>Junk</div>
            {logContext.getItemList() && getJunkItmes().map((value, i) => 
              <div key={i}>
                <ItemCheck data={value} showLocations={showLocations}/>
              </div>
            )}
          </div>}
      </div>
    </div>
  )
}

export default ItemsList;