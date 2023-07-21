import { gql } from "@apollo/client";

export const GET_USER = gql`
  query ShowUsers {
    users {
      id
      username
      created_at
      updated_at
    }
  }
`;
