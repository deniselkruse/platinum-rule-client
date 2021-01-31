import React, { Component } from 'react';
import { Button, Card, CardHeader, CardTitle, CardText, Col, Container, Modal } from 'reactstrap';

import EditRequestPost from '../recipients/EditRequestPost';

type ViewRequestPostsProps = {
    sessionToken?: any;
    userId: any;
    isCurrentUser: boolean;
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
        this.fetchRequestPosts();
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
                <h4>THESE ARE THE REQUEST/RECIPIENT POSTS</h4>
                <div>
                    {this.state.requestPosts.length > 0 ? (this.state.requestPosts.map((event: any, index: any) => (

                        <Container key={this.state.requestPosts.id} className="serviceCard">

                            <Card
                                onMouseEnter={e => {
                                    this.setState({
                                        recipientId: event.id
                                    })
                                    console.log(this.state.recipientId)
                                }}
                                body inverse style={{
                                    backgroundColor: '#CECECE',
                                    borderColor: '#525252',
                                    borderWidth: '.25em'
                                }}>

                                <CardHeader tag="h4">
                                    Help Request
                                </CardHeader>
                                <CardTitle>
                                    {this.state.requestPosts[index].user.username}
                                    <p> needs help with</p>
                                    {this.state.requestPosts[index].title}
                                </CardTitle>
                                <CardText>
                                    Help request posted on
                                    <br />
                                    {this.state.requestPosts[index].createdAt}
                                </CardText>
                                <CardText>
                                    Description:
                                    <br />
                                    {this.state.requestPosts[index].description}
                                </CardText>
                                <CardText >
                                    Availability:
                                    <br />
                                    {Object.entries(this.state.requestPosts[index].availability).map((day, i) => (
                                        <div key={i}>
                                            { day[1] ? <span>{day[0]}</span> : null}
                                        </div>))
                                    }
                                </CardText>
                                <CardText >
                                    Instances:
                                    {this.state.requestPosts[index].instances}
                                </CardText>
                                <Button >Volunteer to help {this.state.requestPosts[index].user.username}</Button>

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
                                                onClick={this.openModal}>
                                                Edit Help Post
                                            </Button>
                                        </> : <></>
                                    }
                                    {this.props.isCurrentUser ?
                                        <></> : <></>}
                                </Col>
                            </Card>
                            <Modal isOpen={this.state.openModal}>
                                <EditRequestPost
                                    userId={this.props.userId}
                                    sessionToken={this.props.sessionToken}
                                    recipientId={this.state.recipientId}
                                    closeModal={this.closeModal}
                                    fetchRequestPosts={this.fetchRequestPosts}
                                />
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