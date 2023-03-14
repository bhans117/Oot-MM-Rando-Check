import React, { createContext, useState, useContext, useEffect } from "react";
import useSWR from 'swr';

export const ContextDashboardSettings = createContext();

const initialSettings = {
  'Checked Items': true,
  'Way of Hero': false,
  'No Junk': false,
  'Show Junk': false,
  'Show Location': false,
  'Health Upgrade': false,
  'Large Rupee': false,
}

const ProviderDashboardSettings = (props) => {
  const {data: savedSettings, mutate } = useSWR('dashboard-settings');
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    if (savedSettings) setSettings(savedSettings)
  }, [savedSettings])

  useEffect(() => {
    console.log(settings)
  }, [settings])

  const saveSettings = (newSettings) => {
    setSettings({...newSettings});
    localStorage.setItem('dashboard-settings', JSON.stringify(newSettings));
  }

  const toggleSetting = (settingName) => {
    let s = settings;
    s[settingName] = !s[settingName]
    saveSettings(s)
  }

  const data = { 
    settings,
    saveSettings,
    toggleSetting,
    mutate,
  };

  return <ContextDashboardSettings.Provider value={data} {...props} />;
}

const useContextDashboardSettings = () => {
  return useContext(ContextDashboardSettings);
}

export { ProviderDashboardSettings, useContextDashboardSettings };