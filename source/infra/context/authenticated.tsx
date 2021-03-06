import AsyncStorage from '@react-native-async-storage/async-storage';
import { InitRealm } from '../../infra/realm';
import React, { createContext, useEffect } from 'react';

interface IAuthenticatedContext {
  authenticated: boolean;
  user: object | null;
  setUser: (user: object | null) => void;
}

export const AuthenticatedContext = createContext({} as IAuthenticatedContext)

export const AuthenticatedProvider: React.FC = ({ children }) => {

  const [user, setUser] = React.useState<object | null>(null);

  useEffect(() => {
    (async () => {
      // const userString: any = await AsyncStorage.getItem('@user_github');
      // const user = JSON.parse(userString);
      const realm = await InitRealm()
      const user = realm.objects('User')

      user.length > 0 && setUser(user)
    })()
  }, [])

  return (
    <AuthenticatedContext.Provider value={{ authenticated: !!user, user, setUser }}>
      {children}
    </AuthenticatedContext.Provider>
  )
}
