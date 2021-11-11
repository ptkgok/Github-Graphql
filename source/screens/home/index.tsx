import React, { useContext, useEffect, useState } from 'react';
import BaseTemplate from '../../components/templates/base';
import { AuthenticatedContext } from '../../infra/context/authenticated';
import CardList from '../../components/organisms/card-list';
import { InitRealm } from '../../infra/realm';
import { Title } from '../../components/theme/fonts.theme';
import crashlytics from '@react-native-firebase/crashlytics';
import Button from '../../components/atoms/button';
import remoteConfig from '@react-native-firebase/remote-config';
import { Text } from 'react-native';



const HomeScreen: React.FC = ({ navigation }) => {

  const { setUser } = useContext(AuthenticatedContext)
  const [users, setUsers] = useState(null)
  const [showFeature, setShowFeature] = useState(false)

  useEffect(() => {
    async function loadRepositories() {
      const realm = await InitRealm();
      const data = realm.objects('User');
      await setUsers(data);
    }
    loadRepositories();

    (async () => {
      const ShowButtonCrash = await remoteConfig().getBoolean("show_crash_button");
      const value = await remoteConfig().getValue('show_crash_button')
      console.log(value)
      console.log(ShowButtonCrash)
      setShowFeature(ShowButtonCrash)
    })()

  }, [])

  function Crashar() {
    crashlytics().log('Teste de crash')
    crashlytics().setCrashlyticsCollectionEnabled(true)
    crashlytics().crash()
  }

  return (
    <BaseTemplate>
      {showFeature !== false && <Button children="Crashar App" onPress={Crashar} />}

      {users ? <CardList cards={users} /> : <Title>Nada aqui</Title>}
    </BaseTemplate>
  )
}

export default HomeScreen;