import React, { Component } from 'react';
import { Button, Card, CardHeader, CardTitle, CardText, Col, Container, Modal } from 'reactstrap';

import EditHelpPost from './EditVolunteerPost';

type ViewHelpPostsProps = {
    sessionToken?: any;
    userId: any;
    isCurrentUser: boolean;
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

    toggle = () => {
        this.setState({ modal: !this.state.modal })
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
                <h4>VIEWING VOLUNTEER POSTS</h4>
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
                                body inverse style={{
                                    backgroundColor: '#CECECE',
                                    borderColor: '#525252',
                                    borderWidth: '.25em'
                                }}>

                                <CardHeader tag="h4">
                                    HEADER HERE
                                </CardHeader>
                                <CardTitle>
                                    {this.state.helpPosts[index].user.username}
                                    <p>is available to help with</p>
                                    {this.state.helpPosts[index].title}
                                </CardTitle>
                                <CardText>
                                    posted on
                                    {this.state.helpPosts[index].date}
                                </CardText>
                                <CardText>
                                    Description:
                                    {this.state.helpPosts[index].description}
                                </CardText>
                                <CardText >
                                    Availability:
                                    <br />
                                    {Object.entries(this.state.helpPosts[index].availability).map((day, i) => (
                                        <div key={i}>
                                            { day[1] ? <span>{day[0]}</span> : null}
                                        </div>))
                                    }
                                </CardText>
                                <CardText >
                                    Instances:
                                    {this.state.helpPosts[index].instances}
                                </CardText>
                                <Button >Request help from {this.state.helpPosts[index].user.username} </Button>

                                <Col >
                                    {!this.props.isCurrentUser ?
                                        <>
                                            <Button
                                                type="button"
                                                className="deletePost"
                                                onClick={this.deletePost}>
                                                Delete Help Post
                                            </Button>
                                            <Button
                                                type="button"
                                                className="editPost"
                                                onClick={this.toggle}>
                                                Edit Help Post
                                            </Button>
                                        </> : <></>
                                    }
                                    {this.props.isCurrentUser ?
                                        <></> : <></>}
                                </Col>
                            </Card>
                            <Modal
                                isOpen={this.state.openModal}>
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
                </div>
            </div>
        )
    }
}

export default ViewHelpPosts;