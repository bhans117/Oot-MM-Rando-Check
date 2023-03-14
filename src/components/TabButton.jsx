import React from 'react';

const TabButton = (props) => {
  return <span 
    className={`p-2 border-2 cursor-pointer font-semibold ${props.tab === props.children ? "bg-slate-800 text-white": "bg-white"}`}
  >{props.children}
  </span>
}

export default TabButton;