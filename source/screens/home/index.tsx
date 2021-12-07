import React, {useContext, useEffect, useState} from 'react';
import BaseTemplate from '../../components/templates/base';
import CardList from '../../components/organisms/card-list';
import {InitRealm} from '../../infra/realm';
import {Title} from '../../components/theme/fonts.theme';
import Button from '../../components/atoms/button';
import {handleForceCrashApp} from '../../utils/crash-app';
import {RemoteConfigContext} from '../../infra/context/remote-config';

const HomeScreen: React.FC = () => {
  const {SHOW_CRASH_BUTTON} = useContext(RemoteConfigContext);

  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await InitRealm();
      const data: any = realm.objects('User');
      await setUsers(data);
    }
    loadRepositories();
  }, []);

  return (
    <BaseTemplate>
      {SHOW_CRASH_BUTTON === 'true' && (
        <Button children="Crashar App" onPress={handleForceCrashApp} />
      )}
      {users ? <CardList cards={users} /> : <Title>Nada aqui</Title>}
    </BaseTemplate>
  );
};

export default HomeScreen;
