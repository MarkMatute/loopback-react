import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CreateMeetup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      city: '',
      address: '',
    };
  }

  componentWillMount() {
    this.getMeetup();
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value,
    }
    this.updateMeetup(newMeetup);
  }

  getMeetup() {
    axios.get(`http://localhost:3000/api/meetups/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          city: response.data.city,
          address: response.data.address
        });
      });
  }

  updateMeetup(newMeetup) {
    axios.request({
      method: 'PUT',
      url: `http://localhost:3000/api/meetups/${this.state.id}`,
      data: newMeetup
    }).then((response) => {
      this.props.history.push('/');
    });
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Edit Meetup</h1>
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
            <div className="row">
              <div className="input-field col s12">
                <input id="name" name="name" type="text" className="validate" ref="name" value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input id="city" name="city" type="text" className="validate" ref="city" value={this.state.city} onChange={this.handleInputChange.bind(this)}/>
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s12">
                <input id="address" name="address" type="text" className="validate" ref="address" value={this.state.address} onChange={this.handleInputChange.bind(this)}/>
                <label htmlFor="address">Address</label>
              </div>
            </div>
            <input type="submit" value="Save" className="btn green" />
          </form>
        </div>
      </div>
    )
  }
}
