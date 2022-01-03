import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Index.scss";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import teamReducer from "./reducers/teamReducer";
const allReducers = combineReducers({ team: teamReducer });
const store = createStore(allReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
