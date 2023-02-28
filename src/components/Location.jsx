import React from 'react';
import LocationCheck from './LocationCheck';

const Location = ({data}) => {

  return (
    <div className='py-2 px-3 bg-slate-100 border- rounded my-2'>
      <div className='font-medium text-base'>{data.value}</div>
      <div>{Object.values(data).map((value, i) => 
        <div
          key={i}
        ><LocationCheck data={value} /></div>
      )}</div>
    </div>
  )
}

export default Location;