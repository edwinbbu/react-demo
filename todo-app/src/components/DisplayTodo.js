import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toogleNote } from "../actions/notesAction";

class DisplayTodo extends Component {
  handleClick = id => {
    console.log("completed:", id);
    // this.props.toogleNote(id);
  };
  render() {
    var list = this.props.notes;
    var notes = list.map((item, i) => {
      return (
        <li style={{ fontSize: "18px" }} key={i} onClick={this.handleClick(i)}>
          {item.note}
        </li>
      );
    });
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>List</h3>
        <ul>{notes}</ul>
      </div>
    );
  }
}

DisplayTodo.propTypes = {
  toogleNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { toogleNote }
)(DisplayTodo);
