
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/atoms/button';
import React, { useContext } from 'react';
import { AuthenticatedContext } from '../infra/context/authenticated';
import { InitRealm } from '../infra/realm';


const CleanCache: React.FC = ({ navigation }) => {

  const { setUser } = useContext(AuthenticatedContext)

  const Clear = async () => {
    await AsyncStorage.clear();
    setUser(null)
    const realm = await InitRealm();
    realm.write(() => {
      realm.deleteAll();
    });
  }


  return (
    <Button children="Limpar cache" onPress={Clear} />
  )
}

export default CleanCache;