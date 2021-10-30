import React, { ReactNode, useCallback, useContext } from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { gql, GraphQLRequest, useLazyQuery, useQuery } from '@apollo/client';
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



const LoginScreen: React.FC = ({ navigation }) => {
  const [login, setLogin] = React.useState('');
  const { setUser } = useContext(AuthenticatedContext)

  const [getUser, { loading, error, data }] = useLazyQuery(GET_USERS);
  const handleLogin = useCallback(async () => {
    console.log(data.user)
    try {
      const user = JSON.stringify(data.user);
      await AsyncStorage.setItem('@user_github', user)
      setUser(data.user)
    } catch (error) {

    }
  }, [data])

  if (data) handleLogin()


  return (
    <LoginTemplate>
      <Image source={Logo} width={197.85} height={80} style={{ position: 'absolute', top: "15%" }} />
      <GridColumn>
        <GridColumn>
          {data && <Image source={{ uri: data.user.avatarUrl }} style={{ width: 50, height: 50 }} />}
          <Text>{data && data.user.login}</Text>

          <CleanCache navigation={navigation} />

          <Text>{error && error.message}</Text>
          <Text>{loading && "loading"}</Text>
          <FontsTheme.Title margin="10px 0%" children="Buscar usuário" />
          <FontsTheme.Description children="Crie sua conta através do seu usuário do GitHub" />
        </GridColumn>
        <GridRow margin="10% 0%">
          <Input placeholder="@username" onChangeText={text => setLogin(text)} />
        </GridRow>
        <Button children="Cadastrar" onPress={() => getUser({ variables: { login: login } })} />
      </GridColumn>
      <GridRow style={{ position: 'absolute', bottom: 32 }}>
        <Text>Termos de politica e privacidade</Text>
      </GridRow>
    </LoginTemplate>
  )
}

export default LoginScreen;