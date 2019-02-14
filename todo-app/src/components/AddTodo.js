import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNote } from "../actions/notesAction";

class AddTodo extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let element = document.getElementById("note");
    let note = element.value;
    console.log("note:", note);
    if (note !== "") this.props.addNote(note);
    element.value = "";
  };

  render() {
    return (
      <div>
        <h2>Todo</h2>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control id="note" placeholder="Enter Note" autoComplete="off" />
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
