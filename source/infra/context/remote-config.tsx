import React, { useEffect } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';

interface RemoteConfigProps {
  SHOW_CRASH_BUTTON: boolean;
  setShowCrashButton?: (show: boolean) => void;
}

export const RemoteConfigContext = React.createContext({} as RemoteConfigProps)

const RemoteConfigProvider: React.FC = ({ children }) => {

  const [SHOW_CRASH_BUTTON, setShowCrashButton] = React.useState()

  useEffect(() => {
    remoteConfig()
      .setDefaults({
        show_crash_button: 'disabled',
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(() => { remoteConfig().fetch(0) })
      .then(() => setShowCrashButton(remoteConfig().getValue('show_crash_button')._value))
  }, [])

  return (
    <RemoteConfigContext.Provider value={{ SHOW_CRASH_BUTTON, setShowCrashButton }}>
      {children}
    </RemoteConfigContext.Provider>
  )
}

export default RemoteConfigProvider;