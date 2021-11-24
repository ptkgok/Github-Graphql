import React, {useContext} from 'react';
import {Image, Text} from 'react-native';
import {useLazyQuery} from '@apollo/client';
import Button from '../../components/atoms/button';
import Logo from '../../assets/github_logo.png';
import Input from '../../components/atoms/input';
import {GridColumn, GridRow} from '../../components/templates/grids';
import {FontsTheme} from '../../components/theme';
import LoginTemplate from '../../components/templates/login';
import {GET_USERS} from '../../infra/graphql/querys/get-users';
import CleanCache from '../../utils/clean-cache';
import {RemoteConfigContext} from '../../infra/context/remote-config';

import {Methods} from './methods';

const LoginScreen: React.FC = () => {
  const {SHOW_CRASH_BUTTON} = useContext(RemoteConfigContext);

  const [getUser, {loading, error, data}] = useLazyQuery(GET_USERS);
  const {handleLogin, login, setLogin} = Methods(data);

  if (data) {
    handleLogin(data);
  }

  return (
    <LoginTemplate>
      <Image
        source={Logo}
        width={197.85}
        height={80}
        style={{position: 'absolute', top: '15%'}}
      />
      <GridColumn>
        {SHOW_CRASH_BUTTON === 'true' && <CleanCache />}
        <GridColumn style={{marginBottom: 32, marginTop: 10}}>
          <Text>{error && error.message}</Text>
          <Text>{loading && 'loading'}</Text>
          <FontsTheme.Title children="Buscar usuário" />
          <FontsTheme.Description children="Crie sua conta através do seu usuário do GitHub" />
        </GridColumn>
        <GridRow style={{marginBottom: 24}}>
          <Input
            placeholder="@username"
            onChangeText={(text: React.SetStateAction<string>) =>
              setLogin(text)
            }
          />
        </GridRow>
        <Button
          children="Cadastrar"
          onPress={() => getUser({variables: {login: login}})}
        />
      </GridColumn>
      <GridRow style={{position: 'absolute', bottom: 32}}>
        <Text>Termos de politica e privacidade</Text>
      </GridRow>
    </LoginTemplate>
  );
};

export default LoginScreen;
