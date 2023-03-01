import React, { useContext } from 'react';
import { ContextSpoilerLog } from '../contextSpoilerLog';

const ItemCheck = ({data}) => {
  const logContext = useContext(ContextSpoilerLog)


  const clickCheck = () => {
    logContext.setCheck(data)
  }

  return (
    <div className='text-sm'>
        <span className='cursor-pointer' onClick={() => clickCheck()}>{data.secret}</span>
        <span className='font-bold'>{data.check && ` - ${data.value}`}</span>
    </div>
  )
}

export default ItemCheck;