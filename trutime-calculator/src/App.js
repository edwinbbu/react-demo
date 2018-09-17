import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Col, ControlLabel } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      monday: {
        hours: null, minutes: null
      },
      tuesday: {
        hours: null, minutes: null
      },
      wednesday: {
        hours: null, minutes: null
      },
      thursday: {
        hours: null, minutes: null
      },
      friday: {
        hours: null, minutes: null
      },
      total: 0
    };
  }

  handleChange(e) {

    let hours = this.state.total + parseInt(e.target.value, 10);
    this.setState({ total: hours });
  }

  render() {
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
                  value={this.state.monday.hours}
                  placeholder="Enter hours"
                  onChange={this.handleChange}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  value={this.state.monday.minutes}
                  placeholder="Enter minutes"
                  onChange={this.handleChange}
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
                  value={this.state.tuesday.hours}
                  placeholder="Enter hours"
                  onChange={this.handleChange}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  value={this.state.tuesday.minutes}
                  placeholder="Enter minutes"
                  onChange={this.handleChange}
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
                  value={this.state.wednesday.hours}
                  placeholder="Enter hours"
                  onChange={this.handleChange}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  value={this.state.wednesday.minutes}
                  placeholder="Enter minutes"
                  onChange={this.handleChange}
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
                  value={this.state.thursday.hours}
                  placeholder="Enter hours"
                  onChange={this.handleChange}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  value={this.state.thursday.minutes}
                  placeholder="Enter minutes"
                  onChange={this.handleChange}
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
                  value={this.state.friday.hours}
                  placeholder="Enter hours"
                  onChange={this.handleChange}
                />
              </Col>
              <Col sm={2}>
                <FormControl
                  type="number"
                  value={this.state.friday.minutes}
                  placeholder="Enter minutes"
                  onChange={this.handleChange}
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
