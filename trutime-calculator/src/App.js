import React, { Component } from "react";
import { FormControl, FormGroup, Form, Col, ControlLabel, Button } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monday: {
        hours: 0,
        minutes: 0
      },
      tuesday: {
        hours: 0,
        minutes: 0
      },
      wednesday: {
        hours: 0,
        minutes: 0
      },
      thursday: {
        hours: 0,
        minutes: 0
      },
      friday: {
        hours: 0,
        minutes: 0
      },
      total: 0,
      totMinutes: 0,
      checkedItems: new Set(),
      average: 0,
      size: 0
    };
    this.calculateTotal = this.calculateTotal.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  calculateTotal(day, time) {
    console.log("time:", time);

    let duration = time.split(".");
    let hours = duration[0] ? duration[0] : 0;
    let minutes = duration[1] ? duration[1] : 0;
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    console.log("day:", day);
    console.log("hours:", hours);
    console.log("minutes:", minutes);

    let total = this.state.total - this.state[day].hours + hours;
    this.addItem(day);

    console.log("inside if");
    let totMinutes = this.state.totMinutes - this.state[day].minutes + minutes;
    if (totMinutes >= 60) {
      total = total + parseInt(totMinutes / 60, 10);
      totMinutes = totMinutes % 60;
    } else if (totMinutes < 0) {
      console.log("totMinutes", totMinutes);
      total = total - parseInt(totMinutes / -60 + 1, 10);
      totMinutes = 60 + (totMinutes % 60);
    }
    this.setState({ [day]: { hours, minutes }, total: total, totMinutes: totMinutes });
  }
  addItem(item) {
    this.setState(
      ({ checkedItems }) => ({
        checkedItems: new Set(checkedItems.add(item))
      }),
      () => {
        this.getPendingHours(this.state.checkedItems.size);
      }
    );
  }
  getPendingHours(size) {
    if (size === 5) {
      let average = this.state.total / 5;
      this.setState({ average, size });
    } else {
      let average = (45 - this.state.total) / (5 - size);
      this.setState({ average, size });
    }
  }
  render() {
    // console.log("current State:", this.state);
    return (
      <div>
        <h2 style={{ marginLeft: "250px", padding: "10px!important" }}>TruTime Calculator</h2>
        <div className="row" style={{ padding: "10px" }}>
          <Form horizontal>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Monday
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter hours"
                  onChange={e => {
                    if (e.target.value !== "") {
                      this.calculateTotal("monday", e.target.value);
                    }
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Tuesday
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter hours"
                  onChange={e => {
                    if (e.target.value !== "") {
                      this.calculateTotal("tuesday", e.target.value);
                    }
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Wednesday
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter hours"
                  onChange={e => {
                    if (e.target.value !== "") {
                      this.calculateTotal("wednesday", e.target.value);
                    }
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Thursday
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter hours"
                  onChange={e => {
                    if (e.target.value !== "") {
                      this.calculateTotal("thursday", e.target.value);
                    }
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Friday
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter hours"
                  onChange={e => {
                    if (e.target.value !== "") {
                      this.calculateTotal("friday", e.target.value);
                    }
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button>Calculate</Button>
              </Col>
            </FormGroup>
          </Form>
          <hr />
          <DisplayDetails
            total={this.state.total}
            totMinutes={this.state.totMinutes}
            average={this.state.average}
            size={this.state.size}
          />
        </div>
      </div>
    );
  }
}

function DisplayDetails(props) {
  let average = props.average;
  average = parseFloat(average).toFixed(2);
  console.log("average:", average);
  if (props.size === 5) {
    return (
      <div>
        <h3 style={{ marginLeft: "200px" }}>
          You have total of {props.total} hours and {props.totMinutes} minutes
        </h3>
        <h3 style={{ marginLeft: "200px" }}>You have an average of {average} hours this week </h3>
      </div>
    );
  }
  if (props.total !== 0 && props.average !== 0) {
    return (
      <div>
        <h3 style={{ marginLeft: "200px" }}>
          You have total of {props.total} hours and {props.totMinutes} minutes
        </h3>
        <h3 style={{ marginLeft: "200px" }}>You have to remain for {average} hours daily </h3>
      </div>
    );
  } else {
    return <div />;
  }
}
export default App;
