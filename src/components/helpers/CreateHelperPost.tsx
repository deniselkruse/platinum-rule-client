import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';

type CreateHelperPostProps = {
    username: string;
    firstName: string;
    lastInitial: string;
    owner: string;
    title: string;
    description: string;
    availability: string;
    instances: number;
    date: Date;
    inactiveDate: Date;
    setUsername: (e: any) => any;
    setFirstName: (e: any) => any;
    setLastInitial: (e: any) => any;
    setOwner: (e: any) => any;
    setTitle: (e: any) => any;
    setDescription: (e: any) => any;
    setAvailability: (e: any) => any;
    setInstances: (e: any) => any;
    setDate: (e: any) => any;
    setInactiveDate: (e: any) => any;
    updateToken: any;
    sessionToken: any;
}


class CreateHelperPost extends React.Component<CreateHelperPostProps, {}> {
    constructor(props: CreateHelperPostProps) {
        super(props)
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/help/create`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.props.username, // Auto populate
                    firstName: this.props.firstName, // Auto populate
                    lastInitial: this.props.lastInitial, // Auto populate; add code to grab first initial from last name
                    owner: this.props.owner, // Auto populate
                    title: this.props.title, // Dropdown menu
                    description: this.props.description,
                    availability: this.props.availability,
                    instances: this.props.instances,
                    date: this.props.date, // Auto populate
                    inactiveDate: this.props.inactiveDate,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((res) => res.json())
            .then((data) => {
                this.props.updateToken(data.sessionToken)
            })
    }


    render() {
        return (
            <Container>
                <h4 className="registerHeader">Register</h4>
                <Form className="register" onSubmit={this.handleSubmit}>
                    <FormGroup>
       
                    </FormGroup>
                    <FormGroup>

                    </FormGroup>
                    <FormGroup>


                    </FormGroup>
                    <FormGroup>

                    </FormGroup>
                    <FormGroup>

                    </FormGroup>
                    <FormGroup>

                    </FormGroup>
                    <Button type="submit">Submit Helper Post</Button>
                </Form>
            </Container>
        );
    }
}

export default CreateHelperPost;