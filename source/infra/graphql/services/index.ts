import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: { Authorization: "bearer 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" }
});

export default client;