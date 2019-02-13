import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNote } from "../actions/notesAction";

class AddTodo extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let note = document.getElementById("note").value;
    console.log("note:", note);
    this.props.addNote(note);
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <h2>Todo</h2>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control id="note" placeholder="Enter Note" />
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

AddTodo.propTypes = {
  addNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { addNote }
)(AddTodo);
