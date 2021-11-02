import React from 'react';
import CardList from '../../components/organisms/card-list';
import BaseTemplate from '../../components/templates/base';
import { FlatList, Text, SafeAreaView, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../infra/graphql/querys/get-repositories';
import CardRepositories from '../../components/molecules/card-repositories';


const RepositoriesOfUsers: React.FC = ({ route, navigation }) => {

  const { login } = route.params

  const { data, error, loading } = useQuery(GET_REPOSITORIES, { variables: { login } })

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error...</Text>

  return (
    <BaseTemplate>
      <SafeAreaView>
        <FlatList
          data={data.repositoryOwner.repositories.nodes}
          renderItem={({ item }) => <CardRepositories infos={item} />}
          ItemSeparatorComponent={() => <View style={{ margin: "5%" }} />}
        />
      </SafeAreaView>
    </BaseTemplate>
  )
}

export default RepositoriesOfUsers;