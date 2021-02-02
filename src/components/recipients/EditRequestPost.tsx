import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, CardHeader, Container, Form, FormGroup, Input, Label, Modal, ModalBody, Row } from 'reactstrap';

type EditRequestProps = {
    sessionToken?: any;
    recipientId: number;
    userId: any;
    closeModal: () => void;
    fetchRequestPosts: () => void;
}

export type Weekdays = "Sundays" | "Mondays" | "Tuesdays" | "Wednesdays" | "Thursdays" | "Fridays" | "Saturdays"

export type NewAvail = Record<Weekdays, boolean>

type EditRequestState = {
    title: string;
    description: string;
    availability: NewAvail;
    instances: number;
    date: any;
    inactiveDate: any;
    setTitle: (e: any) => void;
    setDescription: (e: any) => void;
    setAvailability: (e: any) => void;
    setInstances: (e: any) => void;
    setDate: (e: any) => void;
    setInactiveDate: (e: any) => void;
    modal: boolean,
    updateActive: boolean;
    setUpdateActive: (e: any) => void;
}


class EditRequestPost extends React.Component<EditRequestProps, EditRequestState> {
    constructor(props: EditRequestProps) {
        super(props);
        this.state = {
            modal: false,
            updateActive: false,
            setUpdateActive: (e) => {
                this.setState({
                    updateActive: e
                })
            },
            title: "",
            description: "",
            availability: {
                Sundays: false,
                Mondays: false,
                Tuesdays: false,
                Wednesdays: false,
                Thursdays: false,
                Fridays: false,
                Saturdays: false
            },
            instances: 0,
            date: " ",
            inactiveDate: " ",
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
        this.updateAvailability = this.updateAvailability.bind(this)
    }

    updateAvailability(newAvail: NewAvail) {
        this.setState({
            availability: {
                ...this.state.availability,
                ...newAvail
            }
        })
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/recipient/${this.props.recipientId}`, {
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
                    console.log(response);
                } else {
                    console.log('Update failed.')
                }
                return response.json();
            }).then((data) => {
                console.log(data);
                this.props.closeModal();
                this.props.fetchRequestPosts();
            })
    };

    componentDidMount() {
        if (!this.props.sessionToken) {
            return <Redirect to="/menu" />
        } else {
            return <Redirect to="/request/posts" />
        }
    }

    render() {

        return (
            <Modal isOpen={true}>
                <ModalBody>
                    <Container className="postContainer">
                        <Card
                            body inverse style={{
                                backgroundColor: '#96A7AA',
                                borderColor: '#646F71',
                                borderWidth: '.25em'
                            }}>
                            <CardHeader
                                style={{
                                    backgroundColor: '#646F71'
                                }}>
                                <h4 className="postHeader">
                                    Update Your Help Request
                                </h4>
                            </CardHeader>
                            <br />
                            <Form className='postForm' onSubmit={this.handleSubmit} >
                                <FormGroup>
                                    <Label
                                        htmlFor="helpTitle"
                                        className="helpTitle">
                                        <p className="cardText">Please select a task:</p>
                                    </Label>
                                    <Input
                                        className="helpTitle"
                                        type="select"
                                        onChange={(e) => { this.state.setTitle(e.target.value) }}
                                        value={this.state.title}>
                                        <option value="">Select One</option>
                                        <option value="Raking Leaves">Raking Leaves</option>
                                        <option value="Shoveling Snow">Shoveling Snow</option>
                                        <option value="Taking Out Trash">Taking Out Trash</option>
                                        <option value="Mowing a Lawn">Mowing a Lawn</option>
                                        <option value="Walking Dogs">Walking Dog/s</option>
                                        <option value="A Grocery Run">A Grocery Run</option>
                                        <option value="A Pharmacy Pickup">A Pharmacy Pickup</option>
                                        <option value="An Essential Errand">An Essential Errand</option>
                                        <option value="Phone Check-ins">Phone Check-ins</option>
                                        <option value="Other">Other - Please list in description.</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label
                                        htmlFor="description"
                                        className="helpDescription">
                                        <p className="cardText">Description:</p>
                                    </Label>
                                    <Input
                                        className="helpDescription"
                                        type="textarea"
                                        onChange={(e) => { this.state.setDescription(e.target.value) }}
                                        value={this.state.description}>
                                    </Input>
                                </FormGroup>
                                <FormGroup>

                                    <Label
                                        htmlFor="availability"
                                        className="availability">
                                        <p className="cardText">Availability:</p>
                                    </Label>
                                    <br />
                                    <Row>
                                        {Object.entries(this.state.availability).map(([day, value], i: number) => (
                                            <li className="availabilityList">
                                                <Input type="checkbox" key={i}
                                                    checked={value}
                                                    // @ts-ignore
                                                    onChange={() => this.updateAvailability({ [day]: !value })}
                                                // value={value}
                                                />
                                                {day}
                                            </li>
                                        ))
                                        }
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row className="instancesRow">
                                        <Label
                                            htmlFor="instances">
                                            <p className="cardText">Instances:</p>
                                        </Label>
                                        <Input
                                            id="instances"
                                            onChange={(e) => { this.state.setInstances(e.target.value) }}
                                            value={this.state.instances} />
                                    </Row>
                                </FormGroup>

                                <Container>
                                    <Row className="updateButtons">
                                        <Button
                                            type="button"
                                            onClick={this.props.closeModal}
                                            id="recipientCancelButton">
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            id="recipientUpdateButton">
                                            Update
                                        </Button>
                                    </Row>
                                </Container>
                            </Form>
                        </Card>
                    </Container>
                </ModalBody>
            </Modal>
        );
    }
}


export default EditRequestPost;