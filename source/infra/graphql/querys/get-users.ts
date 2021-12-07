import {gql} from '@apollo/client';

const GET_USERS = gql`
  query user($login: String!) {
    user(login: $login) {
      id
      avatarUrl
      login
      name
      company
      location
      starredRepositories {
        totalCount
      }
    }
  }
`;

export {GET_USERS};
