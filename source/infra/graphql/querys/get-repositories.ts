import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
query repositories($login: String!) {
  repositoryOwner(login: $login) {
    repositories(first: 100) {
      nodes {
        name
        description
        primaryLanguage {
          name
        }
        stargazerCount
        updatedAt
      }
    }
  }
}
`

export { GET_REPOSITORIES }