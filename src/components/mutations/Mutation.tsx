import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation createUser($username: String!) {
    insert_users(objects: { username: $username }) {
      returning {
        username
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($username: String!) {
    delete_users(where: { username: { _eq: $username } }) {
      affected_rows
    }
  }
`;
