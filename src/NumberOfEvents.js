import React, { Component } from 'react';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 32
  }
  
  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      return window.alert('Choose number between 1-32');
    } else {
      this.setState({ 
        numberOfEvents: number,
      });
    }
  };

  render() {
    return (
      <div>
        <p>Change number of shown events between 1-32</p>
        
        <input type="number" value={this.state.numberOfEvents} className="newValue" onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}

export default NumberOfEvents;