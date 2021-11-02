import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: { Authorization: "bearer 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" }
});

export default client;