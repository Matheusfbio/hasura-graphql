import { Route, Routes } from "react-router-dom";
import Forms from "./components/forms/forms";
import Users from "./components/user/user";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </>
  );
}
