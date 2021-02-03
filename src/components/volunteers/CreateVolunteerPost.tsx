import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, CardHeader, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

type VolunteerProps = {
    sessionToken?: any;
    userId: number;
}

export type Weekdays = "Sundays" | "Mondays" | "Tuesdays" | "Wednesdays" | "Thursdays" | "Fridays" | "Saturdays"

export type NewAvail = Record<Weekdays, boolean> // Type of object with keys drawn from weekdays and value of boolean

type VolunteerState = {
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
}

class CreateVolunteerPost extends React.Component<VolunteerProps, VolunteerState> {
    constructor(props: VolunteerProps) {
        super(props)
        this.state = {
            title: "",
            description: "",
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
            availability: {
                Sundays: false,
                Mondays: false,
                Tuesdays: false,
                Wednesdays: false,
                Thursdays: false,
                Fridays: false,
                Saturdays: false
            }
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
        fetch(`http://localhost:3000/help/create`, {
            method: 'POST',
            body: JSON.stringify({
                help: {
                    title: this.state.title,
                    description: this.state.description,
                    availability: this.state.availability,
                    instances: this.state.instances,
                    date: this.state.date, // Fix date format
                    inactiveDate: this.state.inactiveDate,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.state.setTitle('');
                this.state.setDescription('');
                this.state.setAvailability('');
                this.state.setInstances('');
                this.state.setInactiveDate('');
            })
    }

    componentDidMount() {
        if (!this.props.sessionToken) {
            return <Redirect to="/menu" />
        } else {
            return <Redirect to="/volunteer/create" />
        }
    }

    render() {
        return (
            <Container className="postContainer">
                <Card body inverse
                    style={{
                        backgroundColor: '#AA9996',
                        borderColor: '#716664',
                        borderWidth: '.25em'
                    }}>
                    <CardHeader
                        style={{
                            backgroundColor: '#716664'
                        }}>
                        <h4 className="postHeader">
                            How can you help?
                        </h4>
                    </CardHeader>
                    <br />
                    <Form className="postForm" onSubmit={this.handleSubmit}>
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
                                <option value="Take Out Trash">Taking Out Trash</option>
                                <option value="Mow Lawn">Mowing a Lawn</option>
                                <option value="Walk Dogs">Walking Dog/s</option>
                                <option value="Grocery Run">A Grocery Run</option>
                                <option value="Pharmacy Pickup">A Pharmacy Pickup</option>
                                <option value="Essential Errand">An Essential Errand</option>
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
                        <Button type="submit" className="volunteerSubmitButton">Submit Post</Button>
                    </Form>
                </Card>
            </Container>
        );
    }
}

export default CreateVolunteerPost;