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

export const GET_TASK = gql`
  query ShowTasks {
    tasks {
      id
      task
      created_at
      updated_at
    }
  }
`;
