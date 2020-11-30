import React from "react";
import "./styles.css";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <div className="App">
      <h1>Movies API Application</h1>
      <Provider store={store}>
      <BrowserRouter>
      <ApplicationRoutes />
      </BrowserRouter>
      </Provider>
    </div>
  );
}



 


