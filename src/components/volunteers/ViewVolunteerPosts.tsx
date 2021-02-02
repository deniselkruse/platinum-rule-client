import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, CardHeader, CardText, Container, Modal, Row } from 'reactstrap';

import EditHelpPost from './EditVolunteerPost';

type ViewHelpPostsProps = {
    sessionToken?: any;
    userId: any;
    // isCurrentUser: boolean;
}

type ViewHelpPostsState = {
    helpPosts: any;
    helpId: number;
    currentUser: boolean;
    modal: boolean;
    openModal: boolean;
    updateActive: boolean;
    setUpdateActive: (e: any) => void;
}

class ViewHelpPosts extends React.Component<ViewHelpPostsProps, ViewHelpPostsState> {
    constructor(props: ViewHelpPostsProps) {
        super(props)
        this.state = {
            helpPosts: [],
            helpId: 0,
            currentUser: false,
            modal: false,
            openModal: false,
            updateActive: false,
            setUpdateActive: (e) => {
                this.setState({
                    updateActive: e
                })
            },
        };
        this.fetchHelpPosts = this.fetchHelpPosts.bind(this);
    }

    componentDidMount() {
        this.fetchHelpPosts();
        if (!this.props.sessionToken) {
            return <Redirect to="/" />
        } else {
            return <Redirect to="/menu" />
        }
    }

    setHelpPosts = (postArray: any) => {
        console.log("postArray: ", postArray)
        this.setState({ helpPosts: postArray })
    }

    fetchHelpPosts = () => {
        fetch(`http://localhost:3000/help`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json())
            .then((data) => {
                this.setHelpPosts(data)
            })
    }

    deletePost = (event: any) => {
        fetch(`http://localhost:3000/help/${this.state.helpId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json());
        console.log('Post successfully deleted.');
        this.fetchHelpPosts();
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
                <h4 className="viewVolunteerHeader">Find Volunteers</h4>
                </div>
                
                <div>
                    {this.state.helpPosts.length > 0 ? (this.state.helpPosts.map((event: any, index: any) => (

                        <Container key={this.state.helpPosts.id} className="serviceCard">

                            <Card
                                onMouseEnter={e => {
                                    this.setState({
                                        helpId: event.id
                                    })
                                    console.log(this.state.helpId)
                                }}
                                body inverse
                                style={{
                                    backgroundColor: '#96A7AA',
                                    borderColor: '#646F71',
                                    borderWidth: '.25em'
                                }}>

                                <CardHeader
                                    style={{
                                        backgroundColor: '#646F71'
                                    }}>
                                    <p className="cardText">Your neighbor</p>
                                    <p className="cardUsername">{this.state.helpPosts[index].user.username}</p>
                                    <p className="cardText">is available to help with</p>
                                    <p className="cardHelpType">{this.state.helpPosts[index].title}</p>
                                </CardHeader>
                                <br />
                                <CardText>
                                    <p className="cardText">Description:</p>
                                    <p className="cardText">{this.state.helpPosts[index].description}</p>
                                </CardText>
                                <CardText >
                                    <p className="cardText">Availability:
                                    <br />
                                        {Object.entries(this.state.helpPosts[index].availability).map((day, i) => (
                                            <div key={i}>
                                                { day[1] ? <span>{day[0]}</span> : null}
                                            </div>))
                                        }</p>
                                </CardText>
                                <CardText >
                                    <p className="cardText">Instances: {this.state.helpPosts[index].instances}/{this.state.helpPosts[index].instances}</p>
                                </CardText>
                                <CardText>
                                    <p className="cardText">Posted on:
                                    {this.state.helpPosts[index].createdAt}</p>
                                </CardText>
                                <Row className="cardButtons">
                                    <Button className="requestHelpButton">Request help from {this.state.helpPosts[index].user.username}</Button>
                                </Row>

                                <Row className="cardButtons">
                                    {/* {this.props.isCurrentUser ? */}
                                        {/* <> */}
                                            <Button
                                                type="button"
                                                className="volunteerDeletePost"
                                                onClick={this.deletePost}>
                                                Delete
                                            </Button>

                                            <Button
                                                type="button"
                                                className="volunteerEditPost"
                                                onClick={this.openModal}>
                                                Edit
                                            </Button>
                                        {/* </> : <></> */}
                                    {/* // } */}
                                    {/* // {this.props.isCurrentUser ? */}
                                    {/* //     <></> : <></>} */}
                                </Row>
                            </Card>

                            <Modal isOpen={this.state.openModal}>
                                <EditHelpPost
                                    userId={this.props.userId}
                                    sessionToken={this.props.sessionToken}
                                    helpId={this.state.helpId}
                                    closeModal={this.closeModal}
                                    fetchHelpPosts={this.fetchHelpPosts} />
                            </Modal>

                        </Container>
                    ))
                    ) : (
                            <div>

                            </div>
                        )}
                    <br />
                </div>
            </div>
        )
    }
}

export default ViewHelpPosts;