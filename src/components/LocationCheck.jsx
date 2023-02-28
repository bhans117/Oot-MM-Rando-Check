import React, {useState} from 'react';

const LocationCheck = ({data}) => {
  const [showSecret, setShowSecret] = useState(false)

  return (
    <div className='text-sm' onClick={() => setShowSecret(!showSecret)}>
        <span className='cursor-pointer' onClick={() => setShowSecret(!showSecret)}>{data.value}</span>
        <span className='font-bold'>{showSecret && ` - ${data.secret}`}</span>
    </div>
  )
}

export default LocationCheck;