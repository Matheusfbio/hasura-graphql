import { Route, Routes } from "react-router-dom";
import Forms from "./components/forms/forms";
import useAuth from "./hooks/useAuth";
import Tasks from "./components/task/task";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const isLogin = useAuth();

  return isLogin ? (
    <Routes>
      // <Route path="/" element={<Tasks />} />
      // <Route path="/forms" element={<Forms />} />
    </Routes>
  ) : (
    <Routes>
      // <Route path="/" element={<HomeScreen />} />
      // <Route path="/tasks" element={<Tasks />} />
      // <Route path="/forms" element={<Forms />} />
    </Routes>
  );
}
