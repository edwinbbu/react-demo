import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default class AddTodo extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("test");
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <h2>Todo</h2>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control placeholder="Enter Note" />
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
