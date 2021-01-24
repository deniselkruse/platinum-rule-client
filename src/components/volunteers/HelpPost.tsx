import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, CardText, Container, Col, ListGroup, ListGroupItem } from 'reactstrap';

import Menu from '../home/Menu';

class HelpPost extends React.Component {
    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <Container>
                <Card body inverse style={{ backgroundColor: '#CECECE', borderColor: '#525252', borderWidth: '.25em' }}>
                    <CardHeader tag="h4">
                        Service Available:
                        {/* {this.props.title} */}
                    </CardHeader>
                    <CardTitle>
                        Neighbor
                        {/* {this.props.firstName} */}
                        {/* {this.props.lastInitial} */}
                    </CardTitle>
                    <CardText>
                    posted on
                        {/* {this.props.date} */}
                    </CardText>
                    <CardText>
                        Description:
                        {/* {this.props.description} */}
                    </CardText>
                    <CardText >
                        Availability:
                        {/* {this.props.availability} */}
                    </CardText>
                    <CardText >
                        Instances:
                        {/* {this.props.instances} */} 
                    </CardText>
                    <Button >Claim Service</Button>
                </Card>
            </Container>
        )
    }
}

export default HelpPost;