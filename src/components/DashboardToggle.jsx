import React from 'react'
import Switch from '@mui/material/Switch';

const style = 'p-2 border-2 w-fit flex items-center cursor-pointer';

const DashboardToggle = (props) => {
  return (
    <div className={style} onClick={props.onClick}>
      <div className='text-sm'>{props.children}</div>
      <Switch 
        size='small'
        checked={props.toggleState}
        color="primary"
      />
    </div>
  )
}

export default DashboardToggle