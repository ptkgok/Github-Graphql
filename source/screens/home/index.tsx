import Button from '../../components/atoms/button';
import React, { useContext, useEffect, useState } from 'react';
import BaseTemplate from '../../components/templates/base';
import { AuthenticatedContext } from '../../infra/context/authenticated';
import CardList from '../../components/organisms/card-list';
import { FakeCards } from '../../utils/fake-cards';
import { InitRealm } from '../../infra/realm';
const HomeScreen: React.FC = ({ navigation }) => {

  const { user } = useContext(AuthenticatedContext)
  const [users, setUsers] = useState([])

  console.log(users)

  useEffect(() => {
    async function loadRepositories() {
      const realm = await InitRealm();

      const data = realm.objects('User');

      setUsers(data);
    }

    loadRepositories();
  }, [])

  return (
    <BaseTemplate>
      <CardList cards={FakeCards} />
    </BaseTemplate>
  )
}

export default HomeScreen;