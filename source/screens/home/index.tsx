import Button from '../../components/atoms/button';
import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../infra/graphql/querys/get-repositories';
import BaseTemplate from '../../components/templates/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticatedContext } from '../../infra/context/authenticated';
import CleanCache from '../../utils/clean-cache';
import Card from '../../components/molecules/card';
import CardList from '../../components/organisms/card-list';
import { FakeCards } from '../../utils/fake-cards';

const HomeScreen: React.FC = ({ navigation }) => {

  const { user } = useContext(AuthenticatedContext)
  console.log(user)

  return (
    <BaseTemplate>
      <CleanCache navigation={navigation} />
      <Text>{user?.login}</Text>
      {/* <Card card={{ username: user?.login, name: user?.name,   }} /> */}
      <CardList cards={FakeCards} />
    </BaseTemplate>
  )
}

export default HomeScreen;