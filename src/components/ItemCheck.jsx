import React, { useContext } from 'react';
import { ContextSpoilerLog } from '../contextSpoilerLog';

const ItemCheck = ({data, showLocations, noStrike}) => {
  const logContext = useContext(ContextSpoilerLog)


  const clickCheck = () => {
    logContext.setCheck(data)
  }

  return (
    <div className='text-sm'>
        <span className={`cursor-pointer ${data.check && !noStrike && "line-through"}`} onClick={() => clickCheck()}>{data.secret}</span>
        <span className='font-light'>{data.check && showLocations && ` - ${data.value}`}</span>
    </div>
  )
}

export default ItemCheck;