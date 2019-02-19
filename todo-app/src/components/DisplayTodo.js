import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toogleNote } from "../actions/notesAction";

class DisplayTodo extends Component {
  handleClick = id => {
    console.log("completed:", id);
    this.props.toogleNote(id);
  };

  checkFilter = note => {
    let type = this.props.filter;
    if (type === "pending") return note.completed === false;
    else return note.completed === true;
  };

  filterList = list => {
    let type = this.props.filter;
    if (type === "all") return list;
    else return list.filter(this.checkFilter);
  };

  render() {
    let list = this.filterList(this.props.notes);
    let notes = list.map((item, i) => {
      return (
        <li
          style={{ fontSize: "18px", textDecoration: item.completed ? "line-through" : "none" }}
          key={i}
          onClick={() => this.handleClick(i)}
        >
          {item.note}
        </li>
      );
    }, this);
    let displayComponent = <p>No Todo Created</p>;
    if (list.length === 0 && this.props.filter === "pending") {
      displayComponent = <p>No Todo Pending</p>;
    }
    if (list.length === 0 && this.props.filter === "completed") {
      displayComponent = <p>No Todo Completed</p>;
    }
    if (list.length > 0) {
      displayComponent = <ul>{notes}</ul>;
    }
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>List</h3>
        {displayComponent}
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
    notes: state.notes,
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  { toogleNote }
)(DisplayTodo);
