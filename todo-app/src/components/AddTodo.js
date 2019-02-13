import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("state:", this.state);
  };

  handleChange = e => {
    this.setState({ note: e.target.value });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <h2>Todo</h2>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control placeholder="Enter Note" onChange={this.handleChange} />
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Add Todo
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
