import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';

import CreateHelpPost from '../volunteers/CreateHelpPost';
import CreateRequestPost from '../recipients/CreateRequestPost';
import ViewHelpPosts from '../volunteers/ViewHelpPosts';
import ViewRequestPosts from '../recipients/ViewRequestPosts';


type postProps = {
  sessionToken: any;
}

type postStates = {
  title: string;
  description: string;
  availability: string;
  instances: number;
  date: any;
  inactiveDate: any;
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
      title: "",
      description: "",
      availability: "",
      instances: 0,
      date: " ",
      inactiveDate: " ",
      updateToken: "",
      sessionToken: "",
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
            <Button href='/menu/volunteer/create'>Create Service Post</Button>
            <br></br>
            <br></br>
            <Button href='/menu/volunteer/posts'>View Service Posts</Button>
            <br></br>
            <br></br>
            <Button href='/menu/request/create'>Create Request Post</Button>
            <br></br>
            <br></br>
            <Button href='/menu/request/posts'>View Request Posts</Button>
          </Route>

          <Route path='/menu/volunteer/create'>
            <CreateHelpPost
              title={this.state.title}
              description={this.state.description}
              availability={this.state.availability}
              instances={this.state.instances}
              date={this.state.date}
              inactiveDate={this.state.inactiveDate}
              setTitle={this.state.setTitle}
              setDescription={this.state.setDescription}
              setAvailability={this.state.setAvailability}
              setInstances={this.state.setInstances}
              setDate={this.state.setDate}
              setInactiveDate={this.state.setInactiveDate}
              sessionToken={this.props.sessionToken}/>
          </Route>

          <Route path='/menu/volunteer/posts'>
            <ViewHelpPosts />
          </Route>

          <Route path='/menu/request/create'>
            <CreateRequestPost
              title={this.state.title}
              description={this.state.description}
              availability={this.state.availability}
              instances={this.state.instances}
              date={this.state.date}
              inactiveDate={this.state.inactiveDate}
              setTitle={this.state.setTitle}
              setDescription={this.state.setDescription}
              setAvailability={this.state.setAvailability}
              setInstances={this.state.setInstances}
              setDate={this.state.setDate}
              setInactiveDate={this.state.setInactiveDate}
              sessionToken={this.props.sessionToken}/>
          </Route>

          <Route path='/menu/request/posts'>
            <ViewRequestPosts />
          </Route>

        </Switch>
      </div>

    )
  }
}

export default Menu;