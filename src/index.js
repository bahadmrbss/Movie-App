import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

const allExtensions = composeWithDevTools(
  applyMiddleware(thunk, promise, logger)
);

const myStore = createStore(rootReducer, allExtensions);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
