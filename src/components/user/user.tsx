import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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

export default function Users() {
  const { data, loading } = useQuery<{ users: Users[] }>(GET_USER);
  const navigate = useNavigate();

  if (loading) {
    return (
      <h1 className="flex-1 p-28 justify-center text-center ">Carregando...</h1>
    );
  }

  // console.log(data);

  return (
    <>
      <div className="flex-1 justify-center items-center text-center py-8 ">
        <h1>All users</h1>
        {data?.users.map((users) => (
          <div>
            <div key={users.id}>
              {users.username}
              <div>create at :{users.created_at}</div>
              <div>update at :{users.updated_at}</div>
            </div>
          </div>
        ))}
        <button
          className="flex-row bg-blue-600 hover:bg-green-700 w-80 justify-items-center"
          onClick={() => navigate("Forms")}
        >
          Crie um novo
        </button>
      </div>
    </>
  );
}
