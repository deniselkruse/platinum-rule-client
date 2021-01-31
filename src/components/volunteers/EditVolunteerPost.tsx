import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

type EditVolunteerProps = {
    sessionToken?: any;
    userId: any;
    helpId: any;
    closeModal: () => void;
    fetchHelpPosts: () => void;
}

export type Weekdays = "Sundays" | "Mondays" | "Tuesdays" | "Wednesdays" | "Thursdays" | "Fridays" | "Saturdays"

export type NewAvail = Record<Weekdays, boolean>

type EditVolunteerState = {
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

class EditVolunteerPost extends React.Component<EditVolunteerProps, EditVolunteerState> {
    constructor(props: EditVolunteerProps) {
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
        fetch(`http://localhost:3000/help/${this.props.helpId}`, {
            method: 'PUT',
            body: JSON.stringify({
                help: {
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
                    console.log(this.props.userId)
                }
                return response.json();
            }).then((data) => {
                console.log(data);
                this.props.closeModal();
                this.props.fetchHelpPosts();
            })
    };

    componentDidMount() {
        if (!this.props.sessionToken) {
            return <Redirect to="/menu" />
        } else {
            return <Redirect to="/volunteer/posts" />
        }
    }


    render() {
        return (

            <Modal isOpen={true}>
                <h1>THIS IS EDIT HELP POST</h1>
                <ModalHeader>Update Volunteer Post</ModalHeader>
                <ModalBody>
                    <Container className="postContainer">
                        <Card
                            body inverse style={{
                                backgroundColor: '#CECECE',
                                borderColor: '#525252',
                                borderWidth: '.25em'
                            }}>
                            <Form className='postForm' onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label
                                        htmlFor="helpTitle"
                                        className="helpTitle">
                                        Type of Help Available
                                </Label>
                                    <Input
                                        className="helpTitle"
                                        type="select"
                                        onChange={(e) => { this.state.setTitle(e.target.value) }}
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
                                        onChange={(e) => { this.state.setDescription(e.target.value) }}
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
                                    {Object.entries(this.state.availability).map(([day, value], i: number) => (
                                        <li>
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

                                </FormGroup>
                                <FormGroup>
                                    <Label
                                        htmlFor="instances">
                                        Instances
                                </Label>
                                    <Input
                                        id="instances"
                                        onChange={(e) => { this.state.setInstances(e.target.value) }}
                                        value={this.state.instances} />
                                </FormGroup>

                                <Row className="postUpdate">
                                    <Button
                                        type="button"
                                        id="cancelButton"
                                        onClick={this.props.closeModal}>
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
        );
    }
}


export default EditVolunteerPost;