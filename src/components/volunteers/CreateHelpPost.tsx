import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

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
}

type HelpState = {
    title: string;
    description: string;
    availability: string;
    instances: number;
    date: any;
    inactiveDate: any;
}

class CreateHelpPost extends React.Component<HelpProps, HelpState> {
    constructor(props: HelpProps) {
        super(props);
        this.state = {
            title: "",
            description: "",
            availability: "",
            instances: 0,
            date: "",
            inactiveDate: "",
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/help/create`, {
            method: 'POST',
            body: JSON.stringify({
                help: {
                    title: this.props.title, // Dropdown menu
                    description: this.props.description,
                    availability: this.props.availability, // Check boxes
                    instances: this.props.instances,
                    date: this.props.date, // Auto populate
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
                this.props.setDate('');
                this.props.setInactiveDate('');
            })
    }

    render() {
        return (
            <Container>
                <h4 className="registerHeader">New Helper Post</h4>

                <Form className="register" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input
                            className="helpTitle"
                            type="select"
                            onChange={(e) => { this.setState({ title: e.target.value }) }}
                            value={this.state.title}>
                            <option value=""></option>
                            <option value="Rake Leaves">Rake Leaves</option>
                            <option value="Shovel Snow">Shovel Snow</option>
                            <option value="Take Out Trash">Take Out Trash</option>
                            <option value="Walk Dogs">Walk Dogs</option>
                        </Input>
                        <Label htmlFor="title" className="helpTitle"></Label>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="helpDescription"
                            type="textarea"
                            onChange={(e) => { this.setState({ description: e.target.value }) }}
                            value={this.state.description}>
                        </Input>
                        <Label htmlFor="description" className="helpDescription">Description</Label>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="instances"
                            onChange={(e) => { this.setState({ instances: 0 }) }}
                            value={this.state.instances} />
                        <Label htmlFor="instances" className="instances">Instances</Label>
                    </FormGroup>
                    <FormGroup>

                    </FormGroup>
                    <FormGroup>

                    </FormGroup>
                    <FormGroup>

                    </FormGroup>
                    <Button type="submit">Submit Services Post</Button>
                </Form>
            </Container>
        );
    }
}

export default CreateHelpPost;