import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <DisplayTodo />
      </div>
    );
  }
}

export default App;
