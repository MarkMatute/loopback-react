import React from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

export default class Meetups extends React.Component {

  constructor() {
    super();
    this.state = {
      meetups: []
    }
  }

  componentWillMount() {
    this.getMeetups();
  }

  getMeetups() {
    axios.get('http://localhost:3000/api/meetups')
      .then((response) => {
        this.setState({ meetups: response.data });
      });
  }

  render() {
    const meetUpItems = this.state.meetups.map((meetup, index) => {
      return (
        <MeetupItem meetup={meetup} key={meetup.id}/>
      )
    });

    return (
      <div>
        Meetups
        <ul className="collection">
          {meetUpItems}
        </ul>
      </div>
    )
  }
}
