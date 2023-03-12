import React, { createContext, useState, useContext, useEffect } from "react";
import useSWR from 'swr';
import {fetchFullLog} from './utils/fetchers'

export const ContextSpoilerLog = createContext();

const ProviderSpoilerLog = (props) => {
  const {data: localStoreLog, mutate } = useSWR('spoiler-log');
  const {data: fullLog, mutate: mutateFullLog } = useSWR('spoiler-log-txt', fetchFullLog);
  const [log, setLog] = useState(localStoreLog);
  const [heroLoc, setHeroLoc] = useState();

  useEffect(() => {
    setLog(localStoreLog)
    setHeroLoc(null)
  }, [localStoreLog])

  const getLog = () => {
    return log;
  }

  const saveLog = (newLog) => {
    setLog(newLog);
    mutate()
  }

  const getItemList = () => {
    let locations =  Object.values(log['Location List']).filter(value => value.value != null);
    let itemsList = [];
    for (let i = 0; i < locations.length; i++) {
      Object.values(locations[i]).forEach(value => {
        if (value.value) itemsList.push(value)
      })
    }
    itemsList.sort((a, b) => { 
      if (a.secret < b.secret) return -1;
      else return 1;
    });
    return itemsList;
  }

  const getLocations = () => {
    if (!log['Location List']) return [];
    return Object.values(log['Location List']).filter(value => value.value != null)
  }

  const getHeroLocations = () => {
    if (heroLoc) return heroLoc;
    if (!log['Spheres']) return [];
    let spheres = Object.values(log['Spheres']).filter(value => value.value != null);
    
    let locations = [];
    for (let i = 0; i < spheres.length; i++) {
        let sphere = Object.values(spheres[i]).filter(value => value.value != null);
        sphere.forEach(loc => {
          locations.push(loc.value)
        })
    }
    setHeroLoc(locations);
    return locations;
  }

  const setCheck = (itemData) => {
    if (!log['Location List']) return;
    let locations =  Object.values(log['Location List']).filter(value => value.value != null);
    for (let i = 0; i < locations.length; i++) {
      Object.values(locations[i]).forEach(locationValue => {
        if (itemData.value === locationValue.value) {
          let check = log['Location List'][locations[i].value][locationValue.value]['check'];
          if (check) check = !check;
          else check = true;
          log['Location List'][locations[i].value][locationValue.value]['check'] = check;
          setLog({...log});
          localStorage.setItem('spoiler-log', JSON.stringify(log));
        }
      })
    }
  }

  const data = { 
    getLog,
    saveLog,
    getItemList,
    getLocations,
    setCheck,
    mutate,
    mutateFullLog,
    fullLog,
    getHeroLocations
  };

  return <ContextSpoilerLog.Provider value={data} {...props} />;
}

const useContextSpoilerLog = () => {
  return useContext(ContextSpoilerLog);
}

export { ProviderSpoilerLog, useContextSpoilerLog };