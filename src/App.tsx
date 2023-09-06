import { Route, Routes } from "react-router-dom";
import Tasks from "./components/task/task";
import Forms from "./components/forms/forms";
import HomeScreen from "./screens/HomeScreen";
import { ReactKeycloakProvider } from "@react-keycloak/web/";
import keycloakConfig from "../keycloakConfig";

const initOptions = {
  onload: "check-sso",
};

export default function App() {
  return (
    <ReactKeycloakProvider
      authClient={keycloakConfig}
      initOptions={initOptions}
    >
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </ReactKeycloakProvider>
  );
}
