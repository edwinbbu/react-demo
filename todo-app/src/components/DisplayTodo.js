import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotes } from "../actions/notesAction";

class DisplayTodo extends Component {
  componentDidMount() {
    let notes = this.props.getNotes;
    console.log("Disp:", notes);
  }
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>List</h3>
      </div>
    );
  }
}

DisplayTodo.propTypes = {
  getNotes: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(DisplayTodo);
