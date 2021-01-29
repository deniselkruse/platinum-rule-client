import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Modal } from 'reactstrap';

import CreateHelpPost from '../volunteers/CreateHelpPost';
import CreateRequestPost from '../recipients/CreateRequestPost';
import ViewHelpPosts from '../volunteers/ViewHelpPosts';
import ViewRequestPosts from '../recipients/ViewRequestPosts';
import EditRequestPost from '../recipients/EditRequestPost';

type postProps = {
  sessionToken?: any;
  userId: any;
  fetchHelpPosts: any;
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
  availabilityArray: Array<string>
  setAvailabilityArray: (e: any) => void;
  isOpen: any;
  setIsOpen: (e: any) => void;
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
      isOpen: false,
      setIsOpen: (e) => {
        this.setState({ isOpen: e })
      },
      availabilityArray: [],
      setAvailabilityArray: (e) => {
        this.setState({ availabilityArray: e })
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
      },
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.state.setIsOpen(true)
  }

  closeModal() {
    this.state.setIsOpen(false)
  }


  render() {
    return (
      <div>
        <br />
        <br />
        <Router>
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
                sessionToken={this.props.sessionToken}
                setAvailabilityArray={this.state.setAvailabilityArray}
                availabilityArray={this.state.availabilityArray}
              />
            </Route>

            <Route path='/menu/volunteer/posts'>
              <ViewHelpPosts
                sessionToken={this.props.sessionToken} />
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
                sessionToken={this.props.sessionToken}
                setAvailabilityArray={this.state.setAvailabilityArray}
                availabilityArray={this.state.availabilityArray}
              />
            </Route>

            <Route path='/menu/request/posts'>
              <ViewRequestPosts
                sessionToken={this.props.sessionToken}
                userId={this.props.userId}
                setAvailabilityArray={this.state.setAvailabilityArray}
                isOpen={this.state.isOpen}
                setIsOpen={this.state.setIsOpen}
              />
            </Route>

            <Route path='/menu/request/posts/edit'>
              <EditRequestPost
                sessionToken={this.props.sessionToken}
                userId={this.props.userId}
                setAvailabilityArray={this.state.setAvailabilityArray}
                isOpen={this.state.isOpen}
                setIsOpen={this.state.setIsOpen}
              />
            </Route>

          </Switch>
        </Router>
      </div>

    )
  }
}

export default Menu;
