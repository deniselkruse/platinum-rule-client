import React, { Component } from 'react';
import { Button, Card, CardHeader, CardTitle, CardText, Col, Container, Modal, Row } from 'reactstrap';

import EditRequestPost from '../recipients/EditRequestPost';

type ViewRequestPostsProps = {
    sessionToken?: any;
    userId: any;
    setAvailabilityArray: (e: any) => void;
    setIsOpen: (e: any) => void;
    isOpen: any;
}

type ViewRequestPostsState = {
    requestPosts: any;
    currentUser: boolean;
    modal: any;
    updateActive: boolean;
    setUpdateActive: (e: any) => void;
}

class ViewRequestPosts extends React.Component<ViewRequestPostsProps, ViewRequestPostsState> {
    constructor(props: ViewRequestPostsProps) {
        super(props)
        this.state = {
            requestPosts: [],
            currentUser: false,
            modal: false,
            updateActive: false,
            setUpdateActive: (e) => {
                this.setState({
                    updateActive: e
                })
            },
        };
        this.fetchRequestPosts = this.fetchRequestPosts.bind(this)
        this.user = this.user.bind(this)
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.modalOn = this.modalOn.bind(this);
    }

    componentDidMount() {
        this.fetchRequestPosts();
        this.user();
        this.openModal();
        this.closeModal();
        this.modalOn();
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
        fetch(`http://localhost:3000/recipient/${this.props.userId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json());
        console.log('Post successfully deleted.');
    }

    user() {
        if (this.props.userId === localStorage.getItem('userId')) {
            this.setState({ currentUser: true })
            console.log(this.props.userId)
        } else {
            this.setState({ currentUser: false })
        }
    }

//GONNA HAVE TO DELETE SOME OF THESE...

    openModal() {
        this.props.setIsOpen(true)
    };

    closeModal() {
        this.props.setIsOpen(false)
    };

    modalOn = () => {
        this.setState({ modal: !this.state.modal })
    };

    updateOn() {
        this.state.setUpdateActive(true);
    };

    updateOff() {
        this.state.setUpdateActive(false);
    };


    render() {
        return (
            <div>
                <h4>Help Requests</h4>
                <br />
                <div>
                    {this.state.requestPosts.length > 0 ? (this.state.requestPosts.map((event: any, index: any) => (
                        <Container key={this.state.requestPosts.id} className="serviceCard">
                            <Card body inverse style={{ backgroundColor: '#CECECE', borderColor: '#525252', borderWidth: '.25em' }}>
                                <CardHeader tag="h4">
                                    HEADER HERE
                                </CardHeader>
                                <CardTitle>
                                    {this.state.requestPosts[index].user.username}
                                    <p> needs help with</p>
                                    {this.state.requestPosts[index].title}
                                </CardTitle>
                                <CardText>
                                    posted on
                                    <br />
                                    {this.state.requestPosts[index].createdAt}
                                </CardText>
                                <CardText>
                                    Description:
                                    {this.state.requestPosts[index].description}
                                </CardText>
                                <CardText >
                                    Availability:
                                    <br />
                                    {this.state.requestPosts[index].availability}
                                </CardText>
                                <CardText >
                                    Instances:
                                    {this.state.requestPosts[index].instances}
                                </CardText>
                                <Button >Volunteer to help {this.state.requestPosts[index].user.username}</Button>

                               
                                    <Modal> 
                                    {/* isOpen={this.state.modal} Brings up a black screen. */}
                                        <EditRequestPost
                                            userId={this.state.requestPosts[index].user.userId}
                                            sessionToken={this.props.sessionToken}
                                            setAvailabilityArray={this.props.setAvailabilityArray}
                                            isOpen={this.props.isOpen}
                                            setIsOpen={this.props.setIsOpen} />
                                    </Modal> 
                                   
                                

                                <Row className="buttonRow">
                                    {!this.state.currentUser ?  // Is this working like it shoud be??
                                        <Col>
                                            <Button
                                                type="button"
                                                className="deletePost"
                                                onClick={this.deletePost}>
                                                Delete Request Post
                                            </Button>

                                            <Button
                                                type="button"
                                                className="editPost"
                                                onClick={() => { this.openModal() }}>
                                                Edit Request Post
                                            </Button>
                                        </Col> : <></>
                                    }
                                </Row>

                            </Card>
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