import * as React from "react";
import * as ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";


// Main component
import App from "./App";

// Apollo client
const client = new ApolloClient({ uri: process.env.REACT_APP_API });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.querySelector("#root")
);