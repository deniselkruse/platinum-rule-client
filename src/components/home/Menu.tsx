import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Card, Col, Row } from 'reactstrap';

import CreateHelpPost from '../volunteers/CreateVolunteerPost';
import CreateRequestPost from '../recipients/CreateRequestPost';
import ViewHelpPosts from '../volunteers/ViewVolunteerPosts';
import ViewRequestPosts from '../recipients/ViewRequestPosts';

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
                  <h3>I AM AVAILABLE TO HELP!</h3>
                  <Button href='/menu/volunteer/create'>Create a New Volunteer Post</Button>
                  <br />
                  <Button href='/menu/request/posts'>View Neighbor Request Posts</Button>
                </Card>

                <br /><br />

                <Card>
                  <h3>I NEED HELP!</h3>
                  <Button href='/menu/request/create'>Create a New Request Post</Button>
                  <br />
                  <Button href='/menu/volunteer/posts'>View Available Volunteer Posts</Button>
                </Card>
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
