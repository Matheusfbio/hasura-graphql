// import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function HomeScreen() {
  // const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="flex text-center justify-center p-10">
        <h1 className="text-4xl">Welcome the home Page</h1>
      </div>
      <div className="flex justify-center items-center py-80">
        {/* <button
          className="bg-blue-600 hover:bg-green-700 p-10"
          onClick={() => navigate("/tasks")}
        >
          Login
        </button> */}
      </div>
    </>
  );
}
