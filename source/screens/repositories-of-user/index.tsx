import React from 'react';
import * as RN from 'react-native';
import BaseTemplate from '../../components/templates/base';
import {useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../../infra/graphql/querys/get-repositories';
import CardRepositories from '../../components/molecules/card-repositories';
import {Title} from '../../components/theme/fonts.theme';

type Props = {
  route?: any;
};

const RepositoriesOfUsers: React.FC<Props> = ({route}) => {
  const {login} = route.params;

  const {data, error, loading} = useQuery(GET_REPOSITORIES, {
    variables: {login},
  });

  if (loading) {
    return (
      <BaseTemplate>
        <RN.Text>Carregando...</RN.Text>
      </BaseTemplate>
    );
  }
  if (error) {
    return (
      <BaseTemplate>
        <RN.Text>Houve algum erro...</RN.Text>
      </BaseTemplate>
    );
  }

  return (
    <BaseTemplate>
      <RN.SafeAreaView>
        {data.repositoryOwner.repositories.nodes.length > 0 ? (
          <RN.FlatList
            data={data.repositoryOwner.repositories.nodes}
            renderItem={({item}) => <CardRepositories infos={item} />}
            ItemSeparatorComponent={() => <RN.View style={{margin: '5%'}} />}
          />
        ) : (
          <Title>Não tem nenhum repositório</Title>
        )}
      </RN.SafeAreaView>
    </BaseTemplate>
  );
};

export default RepositoriesOfUsers;
