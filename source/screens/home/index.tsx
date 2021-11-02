import Button from '../../components/atoms/button';
import React, { useContext, useEffect, useState } from 'react';
import BaseTemplate from '../../components/templates/base';
import { AuthenticatedContext } from '../../infra/context/authenticated';
import CardList from '../../components/organisms/card-list';
import { FakeCards } from '../../utils/fake-cards';
import { InitRealm } from '../../infra/realm';
import CleanCache from '../../utils/clean-cache';
const HomeScreen: React.FC = ({ navigation }) => {

  const { setUser } = useContext(AuthenticatedContext)
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function loadRepositories() {
      const realm = await InitRealm();
      const data = realm.objects('User');
      await setUsers(data);
    }
    loadRepositories();
  }, [])


  return (
    <BaseTemplate>
      <CardList cards={users} />
    </BaseTemplate>
  )
}

export default HomeScreen;