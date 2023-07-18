import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Users = {
  username: string;
};

const MUTATION_USER = gql`
  mutation createUser($username: String) {
    insert_users(objects: { username: $username }) {
      returning {
        id
        username
      }
    }
  }
`;

export default function Forms() {
  const [username, setUsername] = useState<string>("");
  const { register } = useForm<Users>();
  const [insert_users] = useMutation(MUTATION_USER);
  const navigate = useNavigate();

  function userNotification() {
    alert("Usuario " + username + " cadastrado com sucesso");
  }

  return (
    <div className="flex  flex-col my-60 w-auto mx-96 items-center justify-self-center">
      <form
        className="flex flex-col text-center"
        onSubmit={(e) => {
          e.preventDefault();
          insert_users({
            variables: { username: username },
          });
        }}
      >
        <label>Username</label>
        <input
          className=" shadow-inner  text-center hover:shadow-lg rounded-lg"
          {...register("username")}
          id="username"
          value={undefined}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {/* <input
          className="flex-1 items-center bg-blue-600 hover:bg-green-600 m-5"
          type="submit"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /> */}
        <button
          className="flex-1 visible items-center bg-blue-600 hover:bg-green-600 m-5"
          onClick={userNotification}
        >
          enviar
        </button>
        <button
          className="flex-1 visible bg-blue-600 hover:bg-green-600 p-1"
          onClick={() => navigate("/")}
        >
          Voltar para tela de lista de usuarios
        </button>
      </form>
    </div>
  );
}
