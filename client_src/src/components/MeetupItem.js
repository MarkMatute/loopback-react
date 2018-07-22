import React from 'react';
import {Link} from 'react-router-dom';

export default class MeetupItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      meetup: props.meetup
    }
  }

  render() {
    return (
      <li key={this.state.meetup.id} className="collection-item">
        <Link to={`/meetups/details/${this.state.meetup.id}`}>{this.state.meetup.name}</Link>
      </li>
    )
  }
}
