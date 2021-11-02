import React, { useCallback, useContext } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import Button from '../../components/atoms/button';
import Logo from '../../assets/github_logo.png'
import Input from '../../components/atoms/input';
import { GridColumn, GridRow } from '../../components/templates/grids';
import { FontsTheme } from '../../components/theme';
import LoginTemplate from '../../components/templates/login';
import { GET_USERS } from '../../infra/graphql/querys/get-users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CleanCache from '../../utils/clean-cache';
import { AuthenticatedContext } from '../../infra/context/authenticated';
import { InitRealm } from '../../infra/realm';
import { ArrowBackIcon } from '../../assets/icons';


const AddUserScreen: React.FC = ({ navigation }) => {
  const [login, setLogin] = React.useState('');

  const [getUser, { loading, error, data }] = useLazyQuery(GET_USERS);

  if (data) {
    (async () => {
      const realm = await InitRealm()
      const user = {
        ...data.user,
        starredRepositories: data.user.starredRepositories.totalCount
      };
      realm.write(() => {
        realm.create('User', user)
      })
      navigation.reset({ routes: [{ name: 'Home' }] });
    })()
  }

  return (
    <LoginTemplate>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: "10%", left: 25 }}>
        <Image source={ArrowBackIcon} width={32} height={32} />
      </TouchableOpacity>
      <Image source={Logo} width={197.85} height={80} style={{ position: 'absolute', top: "20%", left: 25 }} />
      <GridColumn>
        <GridColumn>
          <Text>{error && error.message}</Text>
          <Text>{loading && "loading"}</Text>
          <FontsTheme.Title margin="10px 0%" children="Buscar usuário" />
          <FontsTheme.Description children="Adicione seus novos usuários do GitHub" />
        </GridColumn>
        <GridRow margin="10% 0%">
          <Input placeholder="@username" onChangeText={(text) => setLogin(text)} />
        </GridRow>
        <Button children="Cadastrar" onPress={() => getUser({ variables: { login: login } })} />
      </GridColumn>
      <GridRow style={{ position: 'absolute', bottom: 32 }}>
        <Text>Termos de politica e privacidade</Text>
      </GridRow>
    </LoginTemplate>
  )
}

export default AddUserScreen;