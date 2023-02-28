import logo from './logo.svg';
import './App.css';
import useSWR, { SWRConfig } from 'swr'
import Dashboard from './components/Dashboard';
import { localStorageFetcher } from './utils/fetchers'

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: localStorageFetcher
      }}
    >
      <Dashboard />
    </SWRConfig>
  )
}

export default App;
