import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ADD_TASK } from "../mutations/Mutation";
import { GET_TASK } from "../queries/Query";

type Tasks = {
  task: string;
};

export default function Forms() {
  const [task, setTask] = useState<string>("");
  const { register } = useForm<Tasks>();
  const [insert_tasks] = useMutation(ADD_TASK, {
    refetchQueries: [{ query: GET_TASK }],
  });

  const navigate = useNavigate();

  function userNotification() {
    alert("Usuario cadastrado com sucesso");
  }

  return (
    <div className="flex  flex-col my-60 w-auto mx-96 items-center justify-self-center">
      <form
        className="flex flex-col text-center"
        onSubmit={(e) => {
          e.preventDefault();
          insert_tasks({
            variables: { task: task },
          });
        }}
      >
        <label>Tarefas</label>
        <input
          className=" shadow-inner  text-center hover:shadow-lg rounded-lg"
          {...register("task")}
          id="task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          className="flex-1 visible items-center bg-blue-600 hover:bg-green-600 m-5"
          onClick={userNotification}
          type="submit"
        >
          enviar
        </button>
        <button
          className="flex-1 visible bg-blue-600 hover:bg-green-600 p-1"
          onClick={() => navigate("/")}
          type="button"
        >
          Voltar para tela de lista de tarefas
        </button>
      </form>
    </div>
  );
}
