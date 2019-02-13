import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container" style={{ marginTop: "20px" }}>
          <AddTodo />
          <DisplayTodo />
        </div>
      </Provider>
    );
  }
}

export default App;
