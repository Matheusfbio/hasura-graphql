import { useKeycloak } from "@react-keycloak/web";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PrivateRoute(props: any) {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? props : null;
}
