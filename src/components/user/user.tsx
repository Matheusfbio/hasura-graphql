import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_USER } from "../queries/Query";
import { DELETE_USER } from "../mutations/Mutation";

type Users = {
  id: string;
  username: string;
  created_at: string;
  updated_at: string;
};

export default function Users() {
  const { data, loading } = useQuery<{ users: Users[] }>(GET_USER);
  const [DeleteUser] = useMutation(DELETE_USER);
  const navigate = useNavigate();
  const removeUser = (username: string) => {
    DeleteUser({
      variables: {
        username: username,
      },
      refetchQueries: [{ query: GET_USER }],
    });
  };

  if (loading) {
    return (
      <h1 className="flex-1 p-28 justify-center text-center ">Carregando...</h1>
    );
  }

  // console.log(removeUser);

  return (
    <div className="flex flex-col justify-self-center items-center text-center py-8 ">
      <h1>All users</h1>
      {data?.users.map((users) => (
        <div className="flex justify-around">
          <div className="flex flex-row m-2 w-60 justify-between">
            <div>{users.username}</div>
            <button
              className="flex-row bg-blue-600 hover:bg-green-700 w-24"
              onClick={() => removeUser(users.username)}
            >
              Delete user
            </button>
          </div>
        </div>
      ))}
      <button
        className="flex-row bg-blue-600 hover:bg-green-700 p-2 m-3 w-80 justify-items-center"
        onClick={() => navigate("Forms")}
      >
        Create a new user
      </button>
    </div>
  );
}
