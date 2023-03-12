import React, { useContext } from 'react';
import ItemCheck from './ItemCheck';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import { itemType } from '../utils/itemType';
import { ContextDashboardSettings } from '../contextDashboardSettings';
import DashboardToggle from './DashboardToggle'

const ItemsList = () => {
  const logContext = useContext(ContextSpoilerLog);
  const settingsContext = useContext(ContextDashboardSettings);

  const getFilteredItems = () => {
    return logContext.getItemList().filter(item => (!itemType['Junk'].includes(item.secret)))
  }

  const getJunkItmes = () => {
    return logContext.getItemList().filter(item => (itemType['Junk'].includes(item.secret)))
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

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Show Location')}
          toggleState={settingsContext.settings['Show Location']}
        >Show Location</DashboardToggle>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Show Junk')}
          toggleState={settingsContext.settings['Show Junk']}
        >Show Junk</DashboardToggle>
      </div>

      <div className='p-2 border-2 my-5'>
        <div className='font-semibold mb-2'>Your Collection</div>
        {logContext.getItemList() && getYourCollection(getFilteredItems()).map((value, i) => 
          <div key={i}>
            <ItemCheck data={value}  noStrike/>
          </div>
        )}
        {settingsContext.settings['Show Junk'] && <div>
          <div className='mt-2 mb-1 font-bold text-gray-700 text-sm'>Junk</div>
          {logContext.getItemList() && getYourCollection(getJunkItmes()).map((value, i) => 
            <div key={i}>
              <ItemCheck data={value}  noStrike/>
            </div>
          )}
        </div>}
      </div>

      <div className='p-2 border-2'>
      <div className='font-semibold mb-2'>All Items</div>
        {logContext.getItemList() && getFilteredItems().map((value, i) => 
          <div key={i}>
            <ItemCheck data={value} />
          </div>
        )}

        {settingsContext.settings['Show Junk'] && <div>
            <div className='mt-2 mb-1 font-bold text-gray-700 text-sm'>Junk</div>
            {logContext.getItemList() && getJunkItmes().map((value, i) => 
              <div key={i}>
                <ItemCheck data={value} />
              </div>
            )}
          </div>}
      </div>
    </div>
  )
}

export default ItemsList;