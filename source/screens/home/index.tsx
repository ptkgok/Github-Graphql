import React, { useContext, useEffect, useState } from 'react';
import BaseTemplate from '../../components/templates/base';
import { AuthenticatedContext } from '../../infra/context/authenticated';
import CardList from '../../components/organisms/card-list';
import { InitRealm } from '../../infra/realm';
import { Title } from '../../components/theme/fonts.theme';
import crashlytics from '@react-native-firebase/crashlytics';
import Button from '../../components/atoms/button';

const HomeScreen: React.FC = ({ navigation }) => {

  const { setUser } = useContext(AuthenticatedContext)
  const [users, setUsers] = useState(null)
  useEffect(() => {
    async function loadRepositories() {
      const realm = await InitRealm();
      const data = realm.objects('User');
      await setUsers(data);
    }
    loadRepositories();
  }, [])

  function Crashar() {
    crashlytics().log('Teste de crash')
    crashlytics().setCrashlyticsCollectionEnabled(true)
    crashlytics().crash()
  }

  return (
    <BaseTemplate>
      <Button children="CU" onPress={Crashar} />
      {users ? <CardList cards={users} /> : <Title>Nada aqui</Title>}
    </BaseTemplate>
  )
}

export default HomeScreen;