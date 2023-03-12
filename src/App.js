import './App.css';
import { SWRConfig } from 'swr'
import Dashboard from './components/Dashboard';
import { localStorageFetcher } from './utils/fetchers'
import { ProviderSpoilerLog } from './contextSpoilerLog'
import ReactGA from 'react-ga'
import { useEffect } from 'react';

ReactGA.initialize("G-9VVT8FC5P9")

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, []);

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
