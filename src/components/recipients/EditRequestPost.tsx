import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Availability from '../forms/Availability';

type EditHelpProps = {
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
    userId: any;
}

type EditHelpState = {
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
    postUpdate: boolean;
    setPostUpdate: (e: any) => void;
}


class EditRequestPost extends React.Component<EditHelpProps, EditHelpState> {
    constructor(props: EditHelpProps) {
        super(props);
        this.state = {
            postUpdate: false,
            setPostUpdate: (e) => {
                this.setState({
                    postUpdate: e
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
            }
        }
    }


    fetchHelpPosts = () => {
        fetch(`http://localhost:3000/help/${this.props.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((response) => response.json())
            .then((data) => {
                this.state.setTitle('');
                this.state.setDescription('');
                this.state.setAvailability('');
                this.state.setInstances('');
                this.state.setDate('');
                this.state.setInactiveDate('');
                console.log(data);
                console.log(this.props.userId);
            })
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/help/${this.props.userId}`, {
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
                    this.state.setPostUpdate(true);
                    console.log(response)
                } else {
                    console.log('Update failed.')
                }
                return response.json();
            })
    };

    componentDidMount() {
        this.fetchHelpPosts()
        if (!this.props.sessionToken) {
            return <Redirect to="/menu" />
        } else {
            return <Redirect to="/volunteer/posts" />
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


export default EditRequestPost;