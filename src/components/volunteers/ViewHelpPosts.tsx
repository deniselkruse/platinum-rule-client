import React, { Component } from 'react';
import { Button, Card, CardHeader, CardTitle, CardText, Container } from 'reactstrap';

type ViewHelpPostsProps = {
    sessionToken?: any;
}

type ViewHelpPostsState = {
    helpPosts: any;
}


class ViewHelpPosts extends React.Component<ViewHelpPostsProps, ViewHelpPostsState> {
    constructor(props: ViewHelpPostsProps) {
        super(props)
        this.fetchHelpPosts = this.fetchHelpPosts.bind(this)
        this.state = {
            helpPosts: [],
        }
    }

    setHelpPosts = (postArray: any) => {
        console.log("postArray: ", postArray)
        this.setState({helpPosts: postArray})
    }

    fetchHelpPosts = () => {
     fetch(`http://localhost:3000/help`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
          .then(response => response.json())
            .then((data) => {
                this.setHelpPosts(data)
            }) 
    }

    componentDidMount() {
        this.fetchHelpPosts();
    }

    render() {
        return (
            <div>
                <p>This is the Volunteer Posts Page</p>
                <div>
                    {this.state.helpPosts.length > 0 ? (this.state.helpPosts.map((event: any, index: any) => (
                        <Container key={this.state.helpPosts.id} className="serviceCard">
                            <Card body inverse style={{ backgroundColor: '#CECECE', borderColor: '#525252', borderWidth: '.25em' }}>
                                <CardHeader tag="h4">
                                    Service Available:
                                    <br />
                                    {this.state.helpPosts[index].title}
                                </CardHeader>
                                <CardTitle>
                                    {this.state.helpPosts[index].user.username}
                                </CardTitle>
                                <CardText>
                                    posted on
                                    {this.state.helpPosts[index].date}
                                </CardText>
                                <CardText>
                                    Description:
                                    {this.state.helpPosts[index].description}
                                </CardText>
                                <CardText >
                                    Availability:
                                    {this.state.helpPosts[index].availability}
                                </CardText>
                                <CardText >
                                    Instances:
                                    {this.state.helpPosts[index].instances}
                                </CardText>
                                <Button >Claim Service</Button>
                            </Card>
                        </Container>
                    ))
                    ) : (
                            <div>

                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default ViewHelpPosts;