import React, { Component } from "react";

class Login extends React.Component {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
      event.preventDefault();
      fetch(`http://localhost:3000/user/login`, {
          method: 'POST',
          body: JSON.stringify({ 
            user: { 
              email: this.props.email, 
              password: this.props.password 
            }
          }),
          headers: new Headers({
              'Content-Type': 'application/json'
          })
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Login successful.");
        } else {
          console.log("Login failed.");
        }
        return response.json();
      })
      .then((data) => {
          if (data.sessionToken) 
          props.updateToken(data.sessionToken);  
      })
  }


    render() {
      return (
          <div>

          </div>
      );
    }
}

export default Login;