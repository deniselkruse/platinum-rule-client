import React, { Component } from 'react';
import { Button, Card, CardHeader, CardTitle, CardText, Container } from 'reactstrap';

type ViewRequestPostsProps = {
    sessionToken?: any;
}

type ViewRequestPostsState = {
    requestPosts: any;
}


class ViewRequestPosts extends React.Component<ViewRequestPostsProps, ViewRequestPostsState> {
    constructor(props: ViewRequestPostsProps) {
        super(props)
        this.fetchRequestPosts = this.fetchRequestPosts.bind(this)
        this.state = {
            requestPosts: [],
        }
    }

    setRequestPosts = (postArray: any) => {
        console.log("postArray: ", postArray)
        this.setState({requestPosts: postArray})
    }

    fetchRequestPosts = () => {
     fetch(`http://localhost:3000/recipient`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
          .then(response => response.json())
            .then((data) => {
                this.setRequestPosts(data)
            }) 
    }

    componentDidMount() {
        this.fetchRequestPosts();
    }

    render() {
        return (
            <div>
                <p>This is the Recipient Posts Page</p>
                <div>
                    {this.state.requestPosts.length > 0 ? (this.state.requestPosts.map((event: any, index: any) => (
                        <Container key={this.state.requestPosts.id}>
                            <Card body inverse style={{ backgroundColor: '#CECECE', borderColor: '#525252', borderWidth: '.25em' }}>
                                <CardHeader tag="h4">
                                    Service Available:
                                    {this.state.requestPosts[index].title}
                                </CardHeader>
                                <CardTitle>
                                    Neighbor
                                    {this.state.requestPosts[index].firstName}
                                    {this.state.requestPosts[index].lastInitial}
                                </CardTitle>
                                <CardText>
                                    posted on
                                    {this.state.requestPosts[index].date}
                                </CardText>
                                <CardText>
                                    Description:
                                    {this.state.requestPosts[index].description}
                                </CardText>
                                <CardText >
                                    Availability:
                                    {this.state.requestPosts[index].availability}
                                </CardText>
                                <CardText >
                                    Instances:
                                    {this.state.requestPosts[index].instances}
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

export default ViewRequestPosts;