import React from 'react'
import Switch from '@mui/material/Switch';

const DashboardToggle = (props) => {
  return (
    <div className={`${!props.noBoarder && 'border-2 p-2'} flex justify-between cursor-pointer`} onClick={props.onClick}>
      <div className='text-sm font-medium mr-4'>
        <div className='flex gap-3 items-center'>{props.children}</div>
      </div>
      <Switch 
        size='small'
        checked={props.toggleState}
        color="primary"
      />
    </div>
  )
}

export default DashboardToggle