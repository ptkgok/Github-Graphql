import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: { Authorization: "bearer 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" }
});

export default client;