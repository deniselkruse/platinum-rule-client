import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';


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
                <Navbar className="navbar">
                    <NavbarToggler className="mr-2" id="hamburger" right onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/menu/volunteer/posts" >Service Posts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/menu/request/posts">Help Request Posts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Link</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button onClick={this.props.clearToken}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header;