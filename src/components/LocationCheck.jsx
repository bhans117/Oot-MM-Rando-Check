import React, { useContext } from 'react';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import { itemType } from '../utils/itemType';

const LocationCheck = ({data, showCheckedItems, hero, junk}) => {
  const logContext = useContext(ContextSpoilerLog)

  const isHero = (value) => {
    return logContext.getHeroLocations().includes(value)
  }

  const isJunk = (value) => {
    return itemType.junk.includes(value);
  }

  const clickCheck = () => {
    logContext.setCheck(data)
    logContext.getHeroLocations();
  }

  return (
    <div className='text-sm'>
        <span className={`cursor-pointer ${data.check && "line-through"} ${isHero(data.value) && hero &&  "bg-blue-100"} ${isJunk(data.secret) && junk &&  "text-gray-500"}`} onClick={() => clickCheck()}>{data.value}</span>
        <span className='font-light'>{data.check && showCheckedItems && ` - ${data.secret}`}</span>
    </div>
  )
}

export default LocationCheck;