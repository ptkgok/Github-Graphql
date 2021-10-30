import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: { Authorization: "bearer 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" }
});

export default client;