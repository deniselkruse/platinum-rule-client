import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';

type RouterStates = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
    zipCode: number;
    sessionToken: any;
    updateToken: any;
    getToken: any;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
    setFirstName: (e: any) => any;
    setLastName: (e: any) => any;
    setUsername: (e: any) => any;
    setZipCode: (e: any) => any;
}

class Routers extends React.Component<{}, RouterStates> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            username: "",
            zipCode: 0,
            sessionToken: "",
            updateToken: "",
            getToken: "",
            setEmail: (e) => {
                this.setState({
                    email: e
                })
            },
            setPassword: (e) => {
                this.setState({
                    password: e
                })
            },
            setFirstName: (e) => {
                this.setState({
                    firstName: e
                })
            },
            setLastName: (e) => {
                this.setState({
                    lastName: e
                })
            },
            setUsername: (e) => {
                this.setState({
                    username: e
                })
            },
            setZipCode: (e) => {
                this.setState({
                    zipCode: e
                })
            }
        }
    }


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/about"></Route>

                        <Route exact path="/"></Route>

                        <Route exact path="/user/login">
                            <Login
                                email={this.state.email}
                                password={this.state.password}
                                setEmail={this.state.setEmail}
                                setPassword={this.state.setPassword}
                                sessionToken={this.state.sessionToken}
                                getToken={this.state.getToken}
                                updateToken={this.state.updateToken}
                                 />
                        </Route>

                        <Route exact path="/user/register">
                            <Register
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                email={this.state.email}
                                username={this.state.username}
                                zipCode={this.state.zipCode}
                                password={this.state.password}
                                setEmail={this.state.setEmail}
                                setPassword={this.state.setPassword}
                                setFirstName={this.state.setFirstName}
                                setLastName={this.state.setLastName}
                                setUsername={this.state.setUsername}
                                setZipCode={this.state.setZipCode}
                                sessionToken={this.state.sessionToken}
                                updateToken={this.state.updateToken} />
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routers;