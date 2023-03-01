import React from 'react';

const TabHeader = (props) => {
  return<div className='font-semibold text-lg my-5'>
    {props.children}
  </div> 
}

export default TabHeader;