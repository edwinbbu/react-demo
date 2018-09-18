import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Col, ControlLabel } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.state = {
      monday: {
        hours: 0, minutes: 0
      },
      tuesday: {
        hours: 0, minutes: 0
      },
      wednesday: {
        hours: 0, minutes: 0
      },
      thursday: {
        hours: 0, minutes: 0
      },
      friday: {
        hours: 0, minutes: 0
      },
      total: 0
    };
  }

  calculateTotal() {

    let hours = this.state.monday.hours;
    this.setState({ total: hours });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2 style={{ marginLeft: '250px', padding: '10px!important' }}>TruTime Calculator</h2>
        <div className='row' style={{ padding: '10px' }}>
          <Form horizontal>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Monday
            </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter hours"
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let hours = parseInt(e.target.value, 10);
                      let total = this.state.total - this.state.monday.hours + hours;
                      let minutes = this.state.monday.minutes
                      this.setState({ monday: { hours, minutes },total: total })
                    }
                  }}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter minutes"
                  onChange={(e) => this.handleChange(e, "monday")}
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
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let hours = parseInt(e.target.value, 10);
                      let total = this.state.total - this.state.tuesday.hours + hours;
                      let minutes = this.state.tuesday.minutes
                      this.setState({ tuesday: { hours, minutes },total: total })
                    }
                  }}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter minutes"
                  onChange={(e) => this.handleChange(e, "tuesday")}
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
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let hours = parseInt(e.target.value, 10);
                      let total = this.state.total - this.state.wednesday.hours + hours;
                      let minutes = this.state.wednesday.minutes
                      this.setState({ wednesday: { hours, minutes },total: total })
                    }
                  }}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter minutes"
                  onChange={(e) => this.handleChange(e, "wednesday")}
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
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let hours = parseInt(e.target.value, 10);
                      let total = this.state.total - this.state.thursday.hours + hours;
                      let minutes = this.state.thursday.minutes
                      this.setState({ thursday: { hours, minutes },total: total })
                    }
                  }}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter minutes"
                  onChange={(e) => this.handleChange(e, "thursday")}
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
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let hours = parseInt(e.target.value, 10);
                      let total = this.state.total - this.state.friday.hours + hours;
                      let minutes = this.state.friday.minutes
                      this.setState({ friday: { hours, minutes },total: total })
                    }
                  }}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  placeholder="Enter minutes"
                  onChange={(e) => this.handleChange(e, "friday")}
                />
              </Col>
            </FormGroup>
          </Form>
          <hr></hr>
          <DisplayDetails total={this.state.total} />
        </div>
      </div>
    );
  }
}

function DisplayDetails(props) {
  return (
    <h3 style={{ marginLeft: '200px' }}>You have total of {props.total} hours</h3>
  )
}
export default App;
