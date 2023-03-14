import React, { useContext } from 'react';
import ItemsList from './ItemList';
import LocationList from './LocationList';
import FullLog from './FullLog';
import { ProviderDashboardSettings } from '../contextDashboardSettings'
import Home from './Home';
import Heeader from './Heeader';
import { ContextSpoilerLog } from '../contextSpoilerLog';


const Dashboard = () => {
  const logContext = useContext(ContextSpoilerLog);

  return (
    <ProviderDashboardSettings>
      <Heeader tab={logContext.tab} setTab={(tab) => logContext.setTab(tab)} />
      <div className={`px-20 h-full ${logContext.getLog() ? 'my-64' : 'my-32'}`}>
      {(logContext.tab === "Home") && <Home /> }
      {logContext.getLog() && <>
        {(logContext.tab === "Locations") && <LocationList /> }
        {(logContext.tab === "Items") && <ItemsList /> }
        {(logContext.tab === "Full Log") && <FullLog /> }
      </>}

      <a href='https://forms.gle/g8MJqEbnYUEg9Xsv6' target='_blank' rel="noreferrer"  className='fixed bottom-5 right-5 py-2 px-2 rounded-md bg-slate-500 text-white font-semibold text-sm cursor-pointer h-fit w-fit'>
        Bug Report
      </a>
      </div>
    </ProviderDashboardSettings>
  )
}

export default Dashboard;