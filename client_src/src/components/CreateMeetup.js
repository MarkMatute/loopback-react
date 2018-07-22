import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CreateMeetup extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value,
    }
    this.addMeetup(newMeetup);
  }

  addMeetup(newMeetup) {
    axios.request({
      method: 'POST',
      url: 'http://localhost:3000/api/meetups',
      data: newMeetup
    }).then((response) => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <h1>Add Meetup</h1>
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" className="validate" ref="name"/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input id="city" type="text" className="validate" ref="city"/>
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s12">
                <input id="address" type="text" className="validate" ref="address" />
                <label htmlFor="address">Address</label>
              </div>
            </div>
            <input type="submit" value="Save" className="btn green"/>
          </form>
        </div>
      </div>
    )
  }
}
