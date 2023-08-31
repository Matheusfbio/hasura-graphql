import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://hasura-todolist.hasura.app/v1/graphql",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret":
        "7lHHByL2ii32O7UsYL0QewzaaXWwfLAaPTxPhMoXRJM7KG9REFfcG8d0M9ZtM524",
    },
  }),
  cache: new InMemoryCache(),
});
