import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
query { 
  viewer { 
    repositories(first: 10) {
      nodes {
        name
      }
    }
  }
}
`

export { GET_REPOSITORIES }