import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: { Authorization: "bearer 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" }
});

export default client;