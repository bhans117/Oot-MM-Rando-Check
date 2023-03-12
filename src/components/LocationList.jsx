import React, { useContext } from 'react';
import Location from './Location';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import { ContextDashboardSettings } from '../contextDashboardSettings';
import DashboardToggle from './DashboardToggle'

const LocationList = () => {
  const settingsContext = useContext(ContextDashboardSettings);
  const logContext = useContext(ContextSpoilerLog);

  return (
    <div>
      <div className='flex items-center my-3 gap-3'>
        <div className='font-semibold text-lg'>
          Locations
        </div> 

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Checked Items')}
          toggleState={settingsContext.settings['Checked Items']}
        >Checked Items</DashboardToggle>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Way of Hero')}
          toggleState={settingsContext.settings['Way of Hero']}
        >Way of Hero</DashboardToggle>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('No Junk')}
          toggleState={settingsContext.settings['No Junk']}
        >No Junk</DashboardToggle>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Health Upgrade')}
          toggleState={settingsContext.settings['Health Upgrade']}
        >Health Upgrade</DashboardToggle>

        <DashboardToggle 
          onClick={() => settingsContext.toggleSetting('Large Rupee')}
          toggleState={settingsContext.settings['Large Rupee']}
        >Large Rupees</DashboardToggle>

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