import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Card, Col, Row } from 'reactstrap';

import CreateHelpPost from '../volunteers/CreateVolunteerPost';
import CreateRequestPost from '../recipients/CreateRequestPost';
import ViewHelpPosts from '../volunteers/ViewVolunteerPosts';
import ViewRequestPosts from '../recipients/ViewRequestPosts';

import houses from '../../assets/houses.gif';

type postProps = {
  sessionToken?: any;
  isCurrentUser: boolean;
  userId: string;
  fetchHelpPosts: any;
}

class Menu extends React.Component<postProps, {}> {
  constructor(props: postProps) {
    super(props);
    this.state = {
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
                <Card>
                  <h3 className="menuHeader">Volunteer to Help</h3>
                  <br />
                  <Button href='/menu/request/posts'>View Help Requests</Button>
                  <br />
                  <Button href='/menu/volunteer/create'>Create a Volunteer Post</Button>
                </Card>

                <br /><br />

                <Card>
                  <h3 className="menuHeader">Request Help</h3>
                  <br />
                  <Button href='/menu/volunteer/posts'>View Volunteer Posts</Button>
                  <br />
                  <Button href='/menu/request/create'>Create a Help Request</Button>
                </Card>

                <img src={houses} alt="loading..." className="houses" />
                <br />
              </Col>
            </Route>


            <Route path='/menu/volunteer/create'>
              <CreateHelpPost
                sessionToken={this.props.sessionToken} />
            </Route>

            <Route path='/menu/volunteer/posts'>
              <ViewHelpPosts
                sessionToken={this.props.sessionToken}
                userId={this.props.userId}
                isCurrentUser={this.props.isCurrentUser}
              />
            </Route>

            <Route path='/menu/request/create'>
              <CreateRequestPost
                sessionToken={this.props.sessionToken}
              />
            </Route>

            <Route path='/menu/request/posts'>
              <ViewRequestPosts
                sessionToken={this.props.sessionToken}
                userId={this.props.userId}
                isCurrentUser={this.props.isCurrentUser}
              />
            </Route>


          </Switch>
        </Router>
      </div>

    )
  }
}

export default Menu;
