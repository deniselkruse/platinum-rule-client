import React, { Component } from 'react';
import { Button, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

import platinum_rule_logo from '../../assets/platinum_rule_logo.png'


type HeaderProps = {
    clearToken: any;
    sessionToken: any;
}

type HeaderStates = {
    isOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderStates> {
    constructor(props: HeaderProps) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div>
                <Navbar id="header" className="navbar navbar-light" background-color="#D1DADC">

                    <img src={platinum_rule_logo}
                        alt="logo"
                        className="logo" />

                    <NavbarToggler id="hamburger" onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            {this.props.sessionToken ?
                                <Col className="navbarColumn">
                                    <NavItem>
                                        <NavLink href='/menu'>Menu</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/menu/about">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/menu/request/posts'>View Help Requests</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/menu/volunteer/create'>Create a Volunteer Post</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/menu/volunteer/posts'>View Volunteer Posts</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/menu/request/create'>Create a Help Request</NavLink>
                                    </NavItem>
                                    <br />
                                    <NavItem>
                                        <Button onClick={this.props.clearToken}>Logout</Button>
                                    </NavItem>
                                    <br />
                                </Col>
                                : <></>}

                            {!this.props.sessionToken ?
                                <Col className="navbarColumn">
                                    <NavItem>
                                        <NavLink href="/menu/about">About</NavLink>
                                    </NavItem>
                                </Col>
                                : <> </>
                            }


                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        )
    }
}
export default Header;