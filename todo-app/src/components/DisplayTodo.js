import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class DisplayTodo extends Component {
  render() {
    var list = this.props.notes;
    var notes = list.map(function(note, i) {
      return (
        <li style={{ fontSize: "18px" }} key={i}>
          {note}
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
  notes: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(DisplayTodo);
