import React from "react";
import "./App.css";
import WebRoutes from "./routes/index";
import { client } from "./apollo/index";
import { ApolloProvider } from "@apollo/client";
function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <WebRoutes />
      </ApolloProvider>
    </div>
  );
}

export default App;
