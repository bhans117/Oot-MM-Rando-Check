import React, { useContext, useState } from 'react';
import FileInput from './FileInput';
import ItemsList from './ItemList';
import LocationList from './LocationList';
import { ContextSpoilerLog } from '../contextSpoilerLog';
import TabButton from './TabButton'
import FullLog from './FullLog';

const Dashboard = () => {
  const [tab, setTab] = useState('Locations')
  const logContext = useContext(ContextSpoilerLog)

  return (
    <div>
      <div className='fixed top-0 bg-white w-full border-b-2 px-20 py-3 z-50'>
      <FileInput />
      {logContext.getLog() && <>
        <div className='text-xs'>
          Seed: {logContext.getLog()['Seed'].secret}
        </div>
        <div className='text-xs font-light'>
          Version: {logContext.getLog()['Version'].secret}
        </div>
        <div className='my-5 row-auto space-x-3'>
        <span 
            onClick={() => setTab("Locations")}>
            <TabButton tab={tab}>Locations</TabButton>
          </span>
          <span 
            onClick={() => setTab("Items")}>
            <TabButton tab={tab}>Items</TabButton>
          </span>
          <span 
            onClick={() => setTab("Full Log")}>
            <TabButton tab={tab}>Full Log</TabButton>
          </span>
        </div>
      </>}
      </div>

      {logContext.getLog() && <>
        <div className='py-10 px-20 h-full mt-40'>
        {(tab === "Locations") && <LocationList /> }
        {(tab === "Items") && <ItemsList /> }
        {(tab === "Full Log") && <FullLog /> }
        </div>
      </>}
    </div>
  )
}

export default Dashboard;