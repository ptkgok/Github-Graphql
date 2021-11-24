import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticatedContext} from '../../infra/context/authenticated';
import {InitRealm} from '../../infra/realm';

interface DataProps {
  user: {
    id: {type: string; indexed: boolean};
    name: string;
    login: string;
    avatarUrl: string;
    company: string;
    location: string;
    starredRepositories: {
      totalCount: number;
    };
  };
}

const Methods = (data: DataProps) => {
  const [login, setLogin] = React.useState('');
  const {setUser} = React.useContext(AuthenticatedContext);

  const handleLogin = React.useCallback(async () => {
    const user = JSON.stringify(data.user);
    await AsyncStorage.setItem('@user_github', user);

    const realm = await InitRealm();
    const newUser = {
      ...data.user,
      starredRepositories: data.user.starredRepositories.totalCount,
    };
    realm.write(() => {
      realm.create('User', newUser);
    });

    setUser(data.user);
  }, [data]);

  return {
    handleLogin,
    setLogin,
    login,
  };
};

export {Methods};
