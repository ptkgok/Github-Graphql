import Button from '../../components/atoms/button';
import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../infra/graphql/querys/get-repositories';
import BaseTemplate from '../../components/templates/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticatedContext } from '../../infra/context/authenticated';
import CleanCache from '../../utils/clean-cache';

const HomeScreen: React.FC = ({ navigation }) => {

  const { loading, error, data } = useQuery(GET_REPOSITORIES)
  const { user } = useContext(AuthenticatedContext)

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;


  return (
    <BaseTemplate>
      <CleanCache navigation={navigation} />
      <Text>{user?.login}</Text>
    </BaseTemplate>
  )
}

export default HomeScreen;