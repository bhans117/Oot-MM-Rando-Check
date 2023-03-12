import React, { useContext } from 'react';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import { ContextDashboardSettings } from '../contextDashboardSettings';

const ItemCheck = ({data, noStrike}) => {
  const logContext = useContext(ContextSpoilerLog)
  const settingsContext = useContext(ContextDashboardSettings);


  const clickCheck = () => {
    logContext.setCheck(data)
  }

  return (
    <div className='text-sm'>
        <span 
          className={`cursor-pointer 
            ${data.check && !noStrike && "line-through"}`
          }   
          onClick={() => clickCheck()}>{data.secret}</span>
        <span className='font-light'>{data.check && settingsContext.settings['Show Location'] && ` - ${data.value}`}</span>
    </div>
  )
}

export default ItemCheck;