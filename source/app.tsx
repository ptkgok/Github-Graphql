import React, {useEffect} from 'react';
import {ApolloProvider} from '@apollo/client';
import client from './infra/graphql/services';
import Routes from './routes';
import {AuthenticatedProvider} from './infra/context/authenticated';
import {NavigationContainer} from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import codePush from 'react-native-code-push';
import RemoteConfigProvider from './infra/context/remote-config';
import * as Sentry from '@sentry/react-native';

const App = () => {
  Sentry.init({
    dsn: env.process.DSN_SENTRY,
    tracesSampleRate: 1.0,
  });
  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  return (
    <ApolloProvider client={client}>
      <AuthenticatedProvider>
        <RemoteConfigProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </RemoteConfigProvider>
      </AuthenticatedProvider>
    </ApolloProvider>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
