import './App.css';
import { SWRConfig } from 'swr'
import Dashboard from './components/Dashboard';
import { localStorageFetcher } from './utils/fetchers'
import { ProviderSpoilerLog } from './contextSpoilerLog'

function App() {

  return (
    <SWRConfig
      value={{
        fetcher: localStorageFetcher
      }}
    >
      <ProviderSpoilerLog>
        <Dashboard />
      </ProviderSpoilerLog>
    </SWRConfig>
  )
}

export default App;
