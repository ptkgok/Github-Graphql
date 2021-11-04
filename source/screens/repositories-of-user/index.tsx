import React from 'react';
import CardList from '../../components/organisms/card-list';
import BaseTemplate from '../../components/templates/base';
import { FlatList, Text, SafeAreaView, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../infra/graphql/querys/get-repositories';
import CardRepositories from '../../components/molecules/card-repositories';
import { Title } from '../../components/theme/fonts.theme';


const RepositoriesOfUsers: React.FC = ({ route, navigation }) => {

  const { login } = route.params
  console.log(login)
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { variables: { login } })

  if (loading) return <BaseTemplate><Text>Carregando...</Text></BaseTemplate>
  if (error) return <BaseTemplate><Text>Houve algum erro...</Text></BaseTemplate>

  return (
    <BaseTemplate>
      <SafeAreaView>
        {
          data.repositoryOwner.repositories.nodes.length > 0 ? <FlatList
            data={data.repositoryOwner.repositories.nodes}
            renderItem={({ item }) => <CardRepositories infos={item} />}
            ItemSeparatorComponent={() => <View style={{ margin: "5%" }} />}
          /> : <Title>Não tem nenhum repositório</Title>
        }
      </SafeAreaView>
    </BaseTemplate>
  )
}

export default RepositoriesOfUsers;