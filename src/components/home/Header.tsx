import React, { Component } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Row } from 'reactstrap';

type HeaderStates = {
    isOpen: any;
};

class Header extends React.Component<{}, HeaderStates> {
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false };
    };

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    };

    clickLogout = () => {
        window.localStorage.clear();
        window.location.href = `localhost:3000`;
    };

    


    render() {
        return (
            <div>
                <Navbar className="navbar">
                    <Row className="dustyBlue">
                        <NavbarToggler onClick={this.toggle} className="mr-2" id="hamburger" />
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
                    </Row>
                </Navbar>
            </div>
        )
    }
}
export default Header;