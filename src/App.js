import React, { Component } from "react";
import MainPanel from "./components/MainPanel";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
class App extends Component {
  /**
   * Renders the main view. Wrapped inside the provider to work with Redux
   * @returns {string}
   */
  render() {
    return (
      <Provider store={store}>
        <MainPanel />
      </Provider>
    );
  }
}

export default App;
