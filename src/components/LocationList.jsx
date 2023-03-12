import React, { useContext } from 'react';
import Location from './Location';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import { ContextDashboardSettings } from '../contextDashboardSettings';
import DashboardToggle from './DashboardToggle'
import poh from '../img/poh.png'
import rupee from '../img/rupee.png'
import triforce from '../img/triforce.png'
const imgStyle = "w-4 h-4"

const LocationList = () => {
  const settingsContext = useContext(ContextDashboardSettings);
  const logContext = useContext(ContextSpoilerLog);

  return (
    <div>
      <div className='font-semibold text-lg'>
        Quest Settings
      </div> 
      <div className='flex-col w-fit my-3 gap-3'>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Way of Hero')}
          toggleState={settingsContext.settings['Way of Hero']}
        ><img src={triforce} className={imgStyle}/>Show Way of Hero</DashboardToggle>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('No Junk')}
          toggleState={settingsContext.settings['No Junk']}
        ><div className='text-gray-400 w-4 text-center'>J</div>Show Junk</DashboardToggle>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Health Upgrade')}
          toggleState={settingsContext.settings['Health Upgrade']}
        ><img src={poh} className={imgStyle}/>Show Health Upgrades</DashboardToggle>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Large Rupee')}
          toggleState={settingsContext.settings['Large Rupee']}
        ><img src={rupee} className={imgStyle}/>Show Large Rupees</DashboardToggle>

      </div>

      <div className='font-semibold text-lg'>
        Locations
      </div>
      <div className='w-fit'>
        <DashboardToggle 
            noBoarder
            onClick={() => settingsContext.toggleSetting('Checked Items')}
            toggleState={settingsContext.settings['Checked Items']}
        >Show items at checked locations</DashboardToggle>
      </div>

      {logContext.getLocations() && logContext.getLocations().map((value, i) => 
        <div key={i}>
          <Location
            data={value}
          />
        </div>
      )}
    </div>
  )
}

export default LocationList;