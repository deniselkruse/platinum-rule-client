import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, Container, Form, FormGroup, Input, Label } from 'reactstrap';

import Availability from '../forms/Availability';

type HelpProps = {
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
    sessionToken?: any;
    setAvailabilityArray: (e: any) => void;
    availabilityArray: Array<string>
}

class CreateHelpPost extends React.Component<HelpProps, {}> {
    constructor(props: HelpProps) {
        super(props)

    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/help/create`, {
            method: 'POST',
            body: JSON.stringify({
                help: {
                    title: this.props.title,
                    description: this.props.description,
                    availability: this.props.availability, // Why don't the checkboxes work?!
                    instances: this.props.instances,
                    date: this.props.date, // Fix date formatting
                    inactiveDate: this.props.inactiveDate,
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
                this.props.setTitle('');
                this.props.setDescription('');
                this.props.setAvailability('');
                this.props.setInstances('');
                this.props.setInactiveDate('');
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
                <Card body inverse style={{ backgroundColor: '#CECECE', borderColor: '#525252', borderWidth: '.25em' }}>

                    <h4 className="postHeader">New Help Available Post</h4>
                    <br />
                    <Form className="postForm" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label
                                htmlFor="helpTitle"
                                className="helpTitle">
                                Type of Help Available
                        </Label>
                            <Input
                                className="helpTitle"
                                type="select"
                                onChange={(e) => { this.props.setTitle(e.target.value) }}
                                value={this.props.title}>
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
                                onChange={(e) => { this.props.setDescription(e.target.value) }}
                                value={this.props.description}>
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
                            setAvailability={this.props.setAvailability}
                            availabilityArray={this.props.availabilityArray}
                            setAvailabilityArray={this.props.setAvailabilityArray}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                htmlFor="instances">
                                Instances
                                </Label>
                            <Input
                                id="instances"
                                onChange={(e) => { this.props.setInstances(e.target.value) }}
                                value={this.props.instances} />
                        </FormGroup>
                        <Button type="submit">Submit Post</Button>
                    </Form>
                </Card>
            </Container>
        );
    }
}

export default CreateHelpPost;