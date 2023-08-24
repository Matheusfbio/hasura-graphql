import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

export default function useAuth() {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const clientUser = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
    });

    if (isRun.current) return;

    isRun.current = true;
    clientUser
      .init({
        onLoad: "login-required",
      })
      .then((res) => {
        setLogin(res);
      });
  }, []);

  return isLogin;
}
