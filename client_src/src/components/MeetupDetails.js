import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class MeetupDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      details: ''
    }
  }

  componentDidMount() {
    this.getMeetup();
  }

  getMeetup() {
    axios.get(`http://localhost:3000/api/meetups/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ details: response.data });
      });
  }

  onDelete() {
    const id = this.state.details.id;
    axios.delete(`http://localhost:3000/api/meetups/${id}`)
      .then((response) => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div>
        <Link to="/" className="btn grey">Back</Link>
        <br/>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">{this.state.details.city}</li>
          <li className="collection-item">{this.state.details.address}</li>
        </ul>
        <Link className="btn green left" to={`/meetups/edit/${this.state.details.id}`}>Edit</Link>
        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}
