import { gql } from "@apollo/client";

export const ADD_TASK = gql`
  mutation createTask($task: String!) {
    insert_tasks(objects: { task: $task }) {
      returning {
        task
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTasks($task: String!) {
    delete_tasks(where: { task: { _eq: $task } }) {
      affected_rows
    }
  }
`;
