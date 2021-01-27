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
                <h4>Help Requests</h4>
                <br />
                <div>
                    {this.state.requestPosts.length > 0 ? (this.state.requestPosts.map((event: any, index: any) => (
                        <Container key={this.state.requestPosts.id} className="serviceCard">
                            <Card body inverse style={{ backgroundColor: '#CECECE', borderColor: '#525252', borderWidth: '.25em' }}>
                                <CardHeader tag="h4">
                            SOMETHING HEADER HERE
                                </CardHeader>
                                <CardTitle>
                                    {this.state.requestPosts[index].user.username} 
                                    <p> needs help with</p>
                                    {this.state.requestPosts[index].title}
                                </CardTitle>
                                <CardText>
                                    posted on 
                                    <br />
                                    {this.state.requestPosts[index].createdAt}
                                </CardText>
                                <CardText>
                                    Description:
                                    {this.state.requestPosts[index].description}
                                </CardText>
                                <CardText >
                                    Availability:
                                    <br />
                                    {this.state.requestPosts[index].availability}
                                </CardText>
                                <CardText >
                                    Instances:
                                    {this.state.requestPosts[index].instances}
                                </CardText>
                                <Button >Volunteer to help {this.state.requestPosts[index].user.username} </Button>
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