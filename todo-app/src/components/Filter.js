import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Filter extends Component {
  handleClick = type => {
    console.log(type);
  };

  render() {
    let length = this.props.notes.length;
    let displayComponent = <div />;
    if (length > 1) {
      displayComponent = (
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

    return displayComponent;
  }
}

Filter.propTypes = {
  notes: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Filter);
