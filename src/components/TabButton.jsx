import React from 'react';

const TabButton = (props) => {
  return <span 
    className={`p-2 border-2 cursor-pointer ${props.tab === props.children ? "bg-slate-100": ""}`}
  >{props.children}
  </span>
}

export default TabButton;