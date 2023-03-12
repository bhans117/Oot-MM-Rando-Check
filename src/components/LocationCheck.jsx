import React, { useContext } from 'react';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import { itemType } from '../utils/itemType';
import { ContextDashboardSettings } from '../contextDashboardSettings';
import poh from '../img/poh.png'
import rupee from '../img/rupee.png'
import triforce from '../img/triforce.png'

const LocationCheck = ({data}) => {
  const logContext = useContext(ContextSpoilerLog)
  const settingsContext = useContext(ContextDashboardSettings);

  const isHero = (value) => {
    return logContext.getHeroLocations().includes(value) && settingsContext.settings['Way of Hero'];
  }

  const isJunk = (value) => {
    return itemType['Junk'].includes(value) && settingsContext.settings['No Junk'];
  }

  const isHealthUpgrade = (value) => {
    return itemType['Health Upgrade'].includes(value) && settingsContext.settings['Health Upgrade'];
  }

  const isLargeRupee = (value) => {
    return itemType['Large Rupee'].includes(value) && settingsContext.settings['Large Rupee'];
  }

  const clickCheck = () => {
    logContext.setCheck(data)
    logContext.getHeroLocations();
  }

  const imgStyle = "w-4 h-4"

  return (<div className='flex flex-wrap'>
    <div className='text-sm w-fit flex gap-1 items-center'>
      {isHealthUpgrade(data.secret) && <img className={imgStyle} src={poh} alt="poh"/>}
      {isLargeRupee(data.secret) && <img className={imgStyle} src={rupee} alt="rupee"/>}
      {isHero(data.value) && <img className={imgStyle} src={triforce} alt="triforce"/>}
     
      <div 
      className={`cursor-pointer
        ${data.check && "line-through"} 
        ${isJunk(data.secret) && "text-gray-400"}`
      } 
      onClick={() => clickCheck()}>
        {data.value}
      </div>
    </div>
    <div className='font-light text-xs'>{data.check && settingsContext.settings['Checked Items'] && ` - ${data.secret}`}</div>

  </div>)
}

export default LocationCheck;