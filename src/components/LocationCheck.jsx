import React, { useContext } from 'react';
import { ContextSpoilerLog } from '../contextSpoilerLog';

const LocationCheck = ({data}) => {
  const logContext = useContext(ContextSpoilerLog)

  const clickCheck = () => {
    logContext.setCheck(data)
  }

  return (
    <div className='text-sm'>
        <span className='cursor-pointer' onClick={() => clickCheck()}>{data.value}</span>
        <span className='font-bold'>{data.check && ` - ${data.secret}`}</span>
    </div>
  )
}

export default LocationCheck;