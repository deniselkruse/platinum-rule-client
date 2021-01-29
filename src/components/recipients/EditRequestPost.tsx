import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

import Availability from '../forms/Availability';

type EditRequestProps = {
    sessionToken?: any;
    userId: any;
    setAvailabilityArray: (e: any) => void;
    isOpen: any;
    setIsOpen: any;
}

type EditRequestState = {
    title: string;
    description: string;
    availability: string;
    instances: number;
    date: string;
    inactiveDate: string;
    setTitle: (e: any) => any;
    setDescription: (e: any) => any;
    setAvailability: (e: any) => any;
    setInstances: (e: any) => any;
    setDate: (e: any) => any;
    setInactiveDate: (e: any) => any;
    updateActive: boolean;
    setUpdateActive: (e: any) => void;
    availabilityArray: Array<string>;
}


class EditRequestPost extends React.Component<EditRequestProps, EditRequestState> {
    constructor(props: EditRequestProps) {
        super(props);
        this.state = {
            updateActive: false,
            setUpdateActive: (e) => {
                this.setState({
                    updateActive: e
                })
            },
            title: "",
            setTitle: (e) => {
                this.setState({
                    title: e
                })
            },
            description: "",
            setDescription: (e) => {
                this.setState({
                    description: e
                })
            },
            availability: "",
            setAvailability: (e) => {
                this.setState({
                    availability: e
                })
            },
            instances: 0,
            setInstances: (e) => {
                this.setState({
                    instances: e
                })
            },
            date: " ",
            setDate: (e) => {
                this.setState({
                    date: e
                })
            },
            inactiveDate: " ",
            setInactiveDate: (e) => {
                this.setState({
                    inactiveDate: e
                })
            },
            availabilityArray: []
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    postUpdate = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/recipient/${this.props.userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                recipient: {
                    title: this.state.title,
                    description: this.state.description,
                    availability: this.state.availability,
                    instances: this.state.instances,
                    date: this.state.date, // Fix date formatting
                    inactiveDate: this.state.inactiveDate,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log('Update successful.');
                    this.state.setUpdateActive(true);
                    console.log(response)
                } else {
                    console.log('Update failed.')
                }
                return response.json();
            })
    };


    componentDidMount() {
        if (!this.props.sessionToken) {
            return <Redirect to="/menu" />
        } else {
            return <Redirect to="/volunteer/posts" />
        }
    }

//GONNA HAVE TO DELETE SOME OF THESE...

    openModal() {
        this.props.setIsOpen(true)
    }

    closeModal() {
        this.props.setIsOpen(false)
    }

    updateOn() {
        this.state.setUpdateActive(true);
    }

    updateOff() {
        this.state.setUpdateActive(false);
    }

    render() {

        return (
            <div>
                <Modal>
                    <ModalHeader>Update Help Request Post</ModalHeader>
                    <ModalBody>
                        <Container className="postContainer">
                            <Card
                                body inverse style={{
                                    backgroundColor: '#CECECE',
                                    borderColor: '#525252',
                                    borderWidth: '.25em'
                                }}>
                                <Form
                                    className='postForm'
                                    onSubmit={this.postUpdate}>
                                    <FormGroup>
                                        <Label
                                            htmlFor="helpTitle"
                                            className="helpTitle">
                                            Type of Help Available
                                        </Label>
                                        <Input
                                            className="helpTitle"
                                            type="select"
                                            onChange={(e) => { this.setState({ title: e.target.value }) }}
                                            value={this.state.title}>
                                            <option value="">Select One</option>
                                            <option value="Rake Leaves">Rake Leaves</option>
                                            <option value="Shovel Snow">Shovel Snow</option>
                                            <option value="Take Out Trash">Take Out Trash</option>
                                            <option value="Mow Lawn">Mow Lawn</option>
                                            <option value="Walk Dogs">Walk Dogs</option>
                                            <option value="Grocery Run">Grocery Run</option>
                                            <option value="Pharmacy Pickup">Pharmacy Pickup</option>
                                            <option value="Essential Errand">Essential Errand</option>
                                            <option value="Phone Check-ins">Phone Check-ins</option>
                                            <option value="Other">Other - Please list in description.</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label
                                            htmlFor="description"
                                            className="helpDescription">
                                            Description
                                    </Label>
                                        <Input
                                            className="helpDescription"
                                            type="textarea"
                                            onChange={(e) => { this.setState({ description: e.target.value }) }}
                                            value={this.state.description}>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label
                                            htmlFor="availability"
                                            className="availability">
                                            Availability
                                        </Label>
                                        <br />
                                        <Availability
                                            setAvailability={this.state.setAvailability}
                                            availabilityArray={this.state.availabilityArray}
                                            setAvailabilityArray={this.props.setAvailabilityArray} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label
                                            htmlFor="instances">
                                            Instances
                                        </Label>
                                        <Input
                                            id="instances"
                                            onChange={(e) => { this.setState({ instances: parseInt(e.target.value) }) }}
                                            value={this.state.instances} />
                                    </FormGroup>

                                    <Row className="postUpdate">
                                        <Button
                                            type="button"
                                            id="cancelButton"
                                            onClick={() => { this.closeModal(); }}>
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            id="submitButton">
                                            Update
                                        </Button>
                                    </Row>

                                </Form>
                            </Card>
                        </Container>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default EditRequestPost;