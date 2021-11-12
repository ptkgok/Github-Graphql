import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: { Authorization: "bearer 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" }
});

export default client;