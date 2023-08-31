import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { client } from "./lib/apollo.ts";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../keycloak.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </ReactKeycloakProvider>
  </React.StrictMode>
);
