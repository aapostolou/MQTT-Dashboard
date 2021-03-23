import React from "react";

import { Provider } from "react-redux";
import { store } from "models";

import "./styles.css";

import Layout from "components/Layout";
import Debug from "components/Debug";

const App = () => (
  <Provider store={store}>
    <Debug />
    <Layout />
  </Provider>
);

export default App;
