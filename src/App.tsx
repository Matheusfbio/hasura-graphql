import { gql, useQuery } from "@apollo/client";
import "./App.css";

type Users = {
  id: string;
  username: string;
  created_at: string;
  updated_at: string;
};

const GET_USER = gql`
  query {
    users {
      id
      username
      created_at
      updated_at
    }
  }
`;

export default function App() {
  const { data } = useQuery<{ users: Users[] }>(GET_USER);

  console.log(data);

  return (
    <div className="app">
      <h1>All users</h1>
      {data?.users.map((users) => (
        <div key={users.id}>
          {users.username}
          <div>create at :{users.created_at}</div>
          <div>update at :{users.updated_at}</div>
        </div>
      ))}
    </div>
  );
}
