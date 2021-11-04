import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './infra/graphql/services';
import Routes from './routes';
import { AuthenticatedProvider } from './infra/context/authenticated';
import { NavigationContainer } from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';

const App = () => {

  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

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
