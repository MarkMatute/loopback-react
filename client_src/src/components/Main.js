import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Meetups from './Meetups';
import CreateMeetup from './CreateMeetup';
import MeetupDetails from './MeetupDetails';
import EditMeetup from './EditMeetup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Meetups} />
      <Route exact path="/about" component={About} />
      <Route exact path="/meetups/add" component={CreateMeetup} />
      <Route exact path="/meetups/details/:id" component={MeetupDetails} />
      <Route exact path="/meetups/edit/:id" component={EditMeetup} />
    </Switch>
  </main>
)

export default Main;
