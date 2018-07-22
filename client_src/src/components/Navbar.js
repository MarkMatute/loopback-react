import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Meetups</a>
            <a data-target="main-menu" className="button-collapse sidenav-trigger show-on-large">
              <i className="fa fa-bars"></i>
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i> Meetups
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-question-circle"></i> About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="main-menu">
          <li>
            <Link to="/">
              <i className="fa fa-users"></i> Meetups
            </Link>
            <Link to='/meetups/add'>
              <i className="fa fa-plus"></i> Add Meetup
            </Link>
            <Link to="/">
              <i className="fa fa-question-circle"></i> About
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
