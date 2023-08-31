import { Route, Routes } from "react-router-dom";
import Tasks from "./components/task/task";
import Forms from "./components/forms/forms";
import HomeScreen from "./screens/HomeScreen";
import SecuredPage from "./screens/SecuredPage";
import PrivateRoute from "./hooks/PrivateRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route
        path="/secured"
        element={
          <PrivateRoute>
            <SecuredPage />
          </PrivateRoute>
        }
      />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  );
}
