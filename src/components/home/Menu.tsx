import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';

import CreateHelpPost from '../volunteers/CreateHelpPost';
import ViewHelpPosts from '../volunteers/ViewHelpPosts';

type postProps = {
  sessionToken: any;
}

type postStates = {
  username: string;
  firstName: string;
  lastInitial: string;
  owner: string;
  title: string;
  description: string;
  availability: boolean;
  instances: number;
  date: any;
  inactiveDate: any;
  setUsername: (e: any) => any;
  setFirstName: (e: any) => any;
  setLastInitial: (e: any) => any;
  setOwner: (e: any) => any;
  setTitle: (e: any) => any;
  setDescription: (e: any) => any;
  setAvailability: (e: any) => any;
  setInstances: (e: any) => any;
  setDate: (e: any) => any;
  setInactiveDate: (e: any) => any;
  updateToken: any;
  sessionToken: any;
}

class Menu extends React.Component<postProps, postStates> {
  constructor(props: postProps) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastInitial: "",
      owner: "",
      title: "",
      description: "",
      availability: false,
      instances: 0,
      date: " ",
      inactiveDate: " ",
      updateToken: "",
      sessionToken: "",
      setUsername: (e) => {
        this.setState({
          username: e
        })
      },
      setFirstName: (e) => {
        this.setState({
          firstName: e
        })
      },
      setLastInitial: (e) => {
        this.setState({
          lastInitial: e
        })
      },
      setOwner: (e) => {
        this.setState({
          owner: e
        })
      },
      setTitle: (e) => {
        this.setState({
          title: e
        })
      },
      setDescription: (e) => {
        this.setState({
          description: e
        })
      },
      setAvailability: (e) => {
        this.setState({
          availability: e
        })
      },
      setInstances: (e) => {
        this.setState({
          instances: e
        })
      },
      setDate: (e) => {
        this.setState({
          date: e
        })
      },
      setInactiveDate: (e) => {
        this.setState({
          inactiveDate: e
        })
      }
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/menu'>
            <Button href='/menu/create'>Create Service Post</Button>
            <br></br>
            <br></br>
            <Button href='/menu/posts'>View Service Posts</Button>
          </Route>
          <Route path="/menu/create">
            <CreateHelpPost
              username={this.state.username}
              firstName={this.state.firstName}
              lastInitial={this.state.lastInitial}
              owner={this.state.owner}
              title={this.state.title}
              description={this.state.description}
              availability={this.state.availability}
              instances={this.state.instances}
              date={this.state.date}
              inactiveDate={this.state.inactiveDate}
              setUsername={this.state.setUsername}
              setFirstName={this.state.setFirstName}
              setLastInitial={this.state.setLastInitial}
              setOwner={this.state.setOwner}
              setTitle={this.state.setTitle}
              setDescription={this.state.setDescription}
              setAvailability={this.state.setAvailability}
              setInstances={this.state.setInstances}
              setDate={this.state.setDate}
              setInactiveDate={this.state.setInactiveDate}
              sessionToken={this.props.sessionToken} 
            />
          </Route>

          <Route path="/menu/posts">
            <ViewHelpPosts />
          </Route>
        </Switch>
      </div>

    )
  }
}

export default Menu;