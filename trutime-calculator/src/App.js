import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Col, ControlLabel, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.calculateTotal = this.calculateTotal.bind(this);
    this.addItem = this.addItem.bind(this);
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
      total: 0,
      totMinutes: 0,
      checkedItems: new Set(),
      average: 0,
      size: 0
    };
  }

  calculateTotal(day,hours,minutes) {
    console.log("inside calculate");
    console.log("day:", day);
    console.log("hours:",hours);
    console.log("minutes:",minutes);

    let total = this.state.total - this.state[day].hours + hours;
    this.addItem(day);
    
    if(minutes){
      let totMinutes = this.state.totMinutes - this.state[day].minutes + minutes;
      if(totMinutes>=60){
        total=total+parseInt(totMinutes/60,10);
        totMinutes=totMinutes%60;
      }
      this.setState({ [day]: { hours, minutes }, total: total, totMinutes: totMinutes});
    }
    else{
      minutes=0;
      this.setState({ [day]: { hours, minutes }, total: total });
    }
    
  }
  addItem(item) {
    this.setState(({ checkedItems }) => ({
      checkedItems: new Set(checkedItems.add(item))
    }), () => {
      this.getPendingHours(this.state.checkedItems.size)
    });
    //console.log("intermediate:",this.state);
  }
  getPendingHours(size) {
    if (size === 5) {
      let average = (this.state.total) / (5);
      this.setState({ average, size });
    }
    else {
      let average = (45 - this.state.total) / (5 - size);
      this.setState({ average, size });
    }
  }
  render() {
    console.log("current State:", this.state);
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
                      let values=e.target.value.split('.');
                      let hours=parseInt(values[0],10);
                      let min=parseInt(values[1],10);
                      this.calculateTotal('monday',hours,min);
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
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let values=e.target.value.split('.');
                      let hours=parseInt(values[0],10);
                      let min=parseInt(values[1],10);
                      this.calculateTotal('tuesday',hours,min);
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
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let values=e.target.value.split('.');
                      let hours=parseInt(values[0],10);
                      let min=parseInt(values[1],10);
                      this.calculateTotal('wednesday',hours,min);
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
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let values=e.target.value.split('.');
                      let hours=parseInt(values[0],10);
                      let min=parseInt(values[1],10);
                      this.calculateTotal('thursday',hours,min);
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
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      let values=e.target.value.split('.');
                      let hours=parseInt(values[0],10);
                      let min=parseInt(values[1],10);
                      this.calculateTotal('friday',hours,min);
                    }
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button >Calculate</Button>
              </Col>
            </FormGroup>
          </Form>
          <hr></hr>
          <DisplayDetails total={this.state.total} totMinutes={this.state.totMinutes} average={this.state.average} size={this.state.size}/>
        </div>
      </div>
    );
  }
}

function DisplayDetails(props) {
  let average=props.average;
  average=parseFloat(average).toFixed(2);
  console.log("average:",average);
  if(props.size===5){
    return (
      <div>
        <h3 style={{ marginLeft: '200px' }}>You have total of {props.total} hours and {props.totMinutes} minutes</h3>
        <h3 style={{ marginLeft: '200px' }}>You have an average of {average} hours this week </h3>
      </div>
    )
  }
  if (props.total !== 0 && props.average !== 0) {
    return (
      <div>
        <h3 style={{ marginLeft: '200px' }}>You have total of {props.total} hours and {props.totMinutes} minutes</h3>
        <h3 style={{ marginLeft: '200px' }}>You have to remain for {average} hours daily </h3>
      </div>
    )
  }
  else {
    return <div />
  }

}
export default App;
