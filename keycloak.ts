import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:4000",
  realm: "myrealm",
  clientId: "MatheusClient",
});

export default keycloak;
