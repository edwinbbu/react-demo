import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Filter extends Component {
  handleClick = type => {
    console.log(type);
  };
  render() {
    return (
      <div>
        <label>Filter: &nbsp;</label>
        <Button variant="secondary" size="sm" onClick={() => this.handleClick("all")}>
          All
        </Button>
        &nbsp;
        <Button variant="secondary" size="sm" onClick={() => this.handleClick("pending")}>
          Pending
        </Button>
        &nbsp;
        <Button variant="secondary" size="sm" onClick={() => this.handleClick("completed")}>
          Completed
        </Button>
      </div>
    );
  }
}

export default Filter;
