import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {Authorization: 'bearer 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'},
});

export default client;
