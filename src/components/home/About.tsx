import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

type AboutProps = {
    sessionToken?: any;
}

class About extends React.Component<AboutProps, {}> {

    render() {
        return (
            <div className="aboutPage">
                <Container id="about">
                    <Row>
                        <div className="col-lg-8 mx-auto">
                            <h2 id="aboutHeader">About</h2>
                            <p className="lead">We've all heard of the Golden Rule, which goes something like this: Do unto others as you would have them do to you. Because all people and situations are different, The Platinum Rule extends the principal of acts of kindness and goodwill by treating others as they want to be treated.  </p>
                            <p className="lead">The idea behind The Platinum Rule application was born during the early days of the Covid-19 global pandemic. Due to the communicability of Covid-19, daily activities may present a challenge for neighbors at higher risk. However, often the people that need help rarely ask for it. At the same time, the people who often offer to help, are rarely taken up on it. </p>
                            <p className="lead">The Platinum Rule allows neighbors who need help with daily tasks to find someone nearby who can help while encouraging volunteer-minded neighbors to offer their time and services.</p>
                            <p className="lead">The Platinum Rule is a full-stack web application built using PostgreSQL, Express, React, and Node.js (PERN) that enables users to post and search for neighbors in need of help and volunteer availability.</p>
                        </div>
                    </Row>
                </Container>
                <Container id="mission" className="bg-light">
                    <Row>
                        <div className="col-lg-8 mx-auto">
                            <h2 id="aboutHeader">Mission Statement</h2>
                            <p className="lead" id="missionText">Our mission is to facilitate a friendly environment to support and encourage neighbors helping neighbors.</p>
                        </div>
                    </Row>
                </Container>
                <Container id="userStories">
                    <Row>
                        <div className="col-lg-8 mx-auto">
                            <h2 id="aboutHeader">User Stories</h2>
                            <h5>Volunteers</h5>
                            <p className="lead">As a volunteer, users may post their availability to help with specific tasks such as running an essential errand or walking a neighbor’s dog. Volunteers may also view posts from neighbors who are seeking help with tasks and offer their assistance. </p>
                            <h5>Recipients</h5>
                            <p className="lead">As a recipient, users may post their help requests for specific tasks such as phone check-ins or picking up groceries. Recipients may also view posts from neighbors available to help and claim help from those volunteers.</p>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;