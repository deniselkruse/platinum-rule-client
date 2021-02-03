import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, CardHeader, CardText, Container, Modal, Row } from 'reactstrap';

import EditRequestPost from '../recipients/EditRequestPost';

type ViewRequestPostsProps = {
    sessionToken?: any;
    userId: number;
}

type ViewRequestPostsState = {
    requestPosts: any;
    recipientId: number;
    currentUser: boolean;
    modal: boolean;
    openModal: boolean;
    updateActive: boolean;
    setUpdateActive: (e: any) => void;
}

class ViewRequestPosts extends React.Component<ViewRequestPostsProps, ViewRequestPostsState> {
    constructor(props: ViewRequestPostsProps) {
        super(props)
        this.state = {
            requestPosts: [],
            recipientId: 0,
            currentUser: false,
            modal: false,
            openModal: false,
            updateActive: false,
            setUpdateActive: (e) => {
                this.setState({
                    updateActive: e
                })
            }
        };
        this.fetchRequestPosts = this.fetchRequestPosts.bind(this);
    }

    componentDidMount() {
        // this.props.currentUser()
        this.fetchRequestPosts();
        if (!this.props.sessionToken) {
            return <Redirect to="/" />
        } else {
            return <Redirect to="/menu" />
        }
    }

    setRequestPosts = (postArray: any) => {
        console.log("postArray: ", postArray)
        this.setState({ requestPosts: postArray })
    }

    fetchRequestPosts = () => {
        fetch(`http://localhost:3000/recipient`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json())
            .then((data) => {
                this.setRequestPosts(data)
            })
    }

    deletePost = (event: any) => {
        fetch(`http://localhost:3000/recipient/${this.state.recipientId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json());
        console.log('Post successfully deleted.');
        this.fetchRequestPosts();
    }

    openModal = () => {
        this.setState({ openModal: true })
    }

    closeModal = () => {
        this.setState({ openModal: false })
    }

    render() {
        return (
            <div>
                <div className="viewPostsHeader">
                    <h4 className="viewRequestHeader">
                        Find Neighbors</h4>
                    <h4 className="viewRequestHeader">
                        to Help</h4>
                </div>
                <div>
                    {this.state.requestPosts.length > 0 ? (this.state.requestPosts.map((event: any, index: any) => (

                        <Container key={event.id} className="serviceCard">

                            <Card
                                onMouseEnter={e => {
                                    this.setState({
                                        recipientId: event.id
                                    })
                                    console.log(this.state.recipientId)
                                }}
                                body inverse style={{
                                    backgroundColor: '#AA9996',
                                    borderColor: '#716664',
                                    borderWidth: '.25em'
                                }}>

                                <CardHeader
                                    style={{
                                        backgroundColor: '#716664'
                                    }}>
                                    <p className="cardText">Your neighbor</p>
                                    <p className="cardUsername">{event.user.username}</p>
                                    <p className="cardText"> needs help with</p>
                                    <p className="cardHelpType">{event.title}</p>
                                </CardHeader>
                                <br />
                                <CardText>
                                    <p className="cardText">Description: </p>
                                    <p className="cardText">{event.description}</p>
                                </CardText>
                                <CardText >
                                    <p className="cardText">Availability:
                                    <br />
                                        {Object.entries(event.availability).map((day, i) => (
                                            <div key={i}>
                                                { day[1] ? <span>{day[0]}</span> : null}
                                            </div>))
                                        }</p>
                                </CardText>
                                <CardText >
                                    <p className="cardText">Instances: {event.instances}/{event.instances}</p>
                                </CardText>
                                {/* <CardText>
                                    <p className="cardText">Posted on:
                                    {this.state.requestPosts[index].createdAt}</p>
                                </CardText> */}
                                <Row className="cardButtons">
                                    <Button className="volunteerHelpButton">Volunteer to help {event.user.username}</Button>
                                </Row>

                                <Row className="cardButtons">
                                    {(event.user.id === this.props.userId) ?
                                        <>
                                            <Button
                                                type="button"
                                                className="recipientDeletePost"
                                                onClick={this.deletePost}>
                                                Delete
                                            </Button>
                                            <Button
                                                type="button"
                                                className="recipientEditPost"
                                                onClick={this.openModal}>
                                                Edit
                                            </Button>
                                        </> : <></>
                                    }
                                </Row>
                            </Card>

                            <Modal isOpen={this.state.openModal}>
                                <EditRequestPost
                                    userId={this.props.userId}
                                    sessionToken={this.props.sessionToken}
                                    recipientId={this.state.recipientId}
                                    closeModal={this.closeModal}
                                    fetchRequestPosts={this.fetchRequestPosts} />
                            </Modal>

                        </Container>
                    ))
                    ) : (
                        <div>

                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ViewRequestPosts;