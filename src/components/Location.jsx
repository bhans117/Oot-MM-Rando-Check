import React from 'react';
import LocationCheck from './LocationCheck';

const Location = ({data, showCheckedItems, hero, junk}) => {

  return (
    <div className='py-2 px-3  border- rounded my-2'>
      <div className='font-medium text-base'>{data.value}</div>
      <div>{Object.values(data).map((value, i) => 
        <div
          key={i}
        ><LocationCheck data={value} junk={junk} hero={hero} showCheckedItems={showCheckedItems} /></div>
      )}</div>
    </div>
  )
}

export default Location;