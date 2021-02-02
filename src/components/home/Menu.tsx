import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Card, Col } from 'reactstrap';

import CreateHelpPost from '../volunteers/CreateVolunteerPost';
import CreateRequestPost from '../recipients/CreateRequestPost';
import ViewHelpPosts from '../volunteers/ViewVolunteerPosts';
import ViewRequestPosts from '../recipients/ViewRequestPosts';

import About from './About';

import houses from '../../assets/houses.gif';

type postProps = {
  sessionToken?: any;
  fetchHelpPosts: any;
  userId: any;
}

class Menu extends React.Component<postProps, {}> {
  constructor(props: postProps) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    if (!this.props.sessionToken) {
      return <Redirect to="/" />
    } else {
      return <Redirect to="/menu" />
    }
  }


  render() {
    return (
      <div>
        <Router>
          <Switch>


            <Route exact path='/menu'>
              <br />
              <Col>
                <Card className="menuCard">
                  <br />
                  <h3 className="menuHeader" id="volunteerHeader">Volunteer to Help</h3>
                  <br />
                  <Button href='/menu/request/posts' className="volunteerButton">View Help Requests</Button>
                  <br />
                  <Button href='/menu/volunteer/create' className="volunteerButton">Create a Volunteer Post</Button>
                  <br />
                </Card>
                <br />
                <Card className="menuCard">
                  <br />
                  <h3 className="menuHeader" id="recipientHeader">Request Help</h3>
                  <br />
                  <Button href='/menu/volunteer/posts' className="recipientButton">View Volunteer Posts</Button>
                  <br />
                  <Button href='/menu/request/create' className="recipientButton">Create a Help Request</Button>
                  <br />
                </Card>

                <img src={houses} alt="loading..." className="houses" />
                <br />
              </Col>
            </Route>


            <Route path='/menu/volunteer/create'>
              <CreateHelpPost
                sessionToken={this.props.sessionToken}
                userId={this.props.userId} />
            </Route>

            <Route path='/menu/volunteer/posts'>
              <ViewHelpPosts
                sessionToken={this.props.sessionToken}
                userId={this.props.userId} />
            </Route>

            <Route path='/menu/request/create'>
              <CreateRequestPost
                sessionToken={this.props.sessionToken}
                userId={this.props.userId} />
            </Route>

            <Route path='/menu/request/posts'>
              <ViewRequestPosts
                sessionToken={this.props.sessionToken}
                userId={this.props.userId} />
            </Route>


            <Route path='/menu/about'>
              <About
                sessionToken={this.props.sessionToken} />
            </Route>

          </Switch>
        </Router>
      </div>

    )
  }
}

export default Menu;
