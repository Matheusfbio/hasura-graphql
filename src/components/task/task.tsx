import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_TASK } from "../queries/Query";
import { DELETE_TASK } from "../mutations/Mutation";

type Tasks = {
  id: string;
  task: string;
  created_at: string;
  updated_at: string;
};

export default function Tasks() {
  const { data, loading } = useQuery<{ tasks: Tasks[] }>(GET_TASK);
  const [DeleteTask] = useMutation(DELETE_TASK);
  const navigate = useNavigate();
  const removeTask = (task: string) => {
    DeleteTask({
      variables: {
        task: task,
      },
      refetchQueries: [{ query: GET_TASK }],
    });
  };

  if (loading) {
    return (
      <h1 className="flex-1 p-28 justify-center text-center ">Carregando...</h1>
    );
  }

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="py-8">All tasks</h1>
      {data?.tasks.map((tasks) => (
        <div className="flex ml-36">
          <div className="flex flex-row m-2 w-60 justify-between">
            <div>{tasks.task}</div>
            {/* <button className="flex-row bg-blue-600 hover:bg-green-700 w-24">
              Update task
            </button> */}
          </div>
          <div className="flex flex-row m-2 w-60 justify-between">
            <button
              className="flex-row bg-blue-600 hover:bg-green-700 w-24"
              onClick={() => removeTask(tasks.task)}
            >
              Delete task
            </button>
          </div>
        </div>
      ))}
      <button
        className="flex-row bg-blue-600 hover:bg-green-700 p-2 m-3 w-80 justify-items-center"
        onClick={() => navigate("Forms")}
      >
        Create a new tasks
      </button>
      <button
        className="flex-row bg-blue-600 hover:bg-green-700 p-2 mt-96 w-80 justify-items-center"
        onClick={() => navigate("/")}
      >
        Back the Home
      </button>
    </div>
  );
}
