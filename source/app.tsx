import Button from './components/atoms/button'
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './infra/graphql/services';
import Routes from './routes';
import { AuthenticatedProvider } from './infra/context/authenticated';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <AuthenticatedProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthenticatedProvider>
    </ApolloProvider>
  );
};


export default App;
