import React, { Component } from 'react';
import Event from './Event.js';
import { InfoAlert } from './Alert.js';

class EventList extends Component {
    
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {!navigator.onLine ? 
        <InfoAlert text="You're offline. The list of events you see is cached data." />: 
        ("")}
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;