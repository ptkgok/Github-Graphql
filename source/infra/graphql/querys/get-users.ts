import { gql } from "@apollo/client";

const GET_USERS = gql`
  query user($login: String!) {
    user(login: $login) {
      avatarUrl
      login
      repositories(first: 10) {
        nodes {
          nameWithOwner
        }
      }
    }
    }
  `

export { GET_USERS }