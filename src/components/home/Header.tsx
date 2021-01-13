import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

type HeaderStates = {
 isOpen: boolean;
}

class Header extends React.Component<{}, HeaderStates> {
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    clickLogout = () => {
        window.localStorage.clear();
        window.location.href = `localhost:3000`;
    };

    render() {
        return (
            <div>
                <Navbar className="navbar">
                        <NavbarToggler className="mr-2" id="hamburger" right onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/" >Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Link</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Link</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button onClick={this.clickLogout}>Logout</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header;