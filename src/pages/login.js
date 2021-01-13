import React, { Component } from 'react'
import {Form, Button, Card} from "react-bootstrap";
import axios from 'axios';
 class login extends Component {

    constructor() {
      
        super();
        this.state = {
        
          email: '',
          pass: '',
          errorMessage : "",
          user: {},
          redirect:'/userHome',
        }
    
      }

componentDidMount () {
  if(!sessionStorage.getItem('status'))
        console.log(sessionStorage.getItem("in did mount if "));
        
        else {
          console.log("in esle statement");
          // Redirect("/home");
         this.props.history.push("/userHome");
        }
}
      inputSet = (e) => {
        console.log(this.state.pass);
        this.setState({[e.target.name] : e.target.value})
    } 

    validateUser = (e) => {
      e.preventDefault();
      var dat = {

           pass :this.state.pass,
          email :this.state.email,
          
      }
      if ( dat.email==='' ||
      dat.pass === '' ) {
        alert('Fill all Fields. Please...!')
      }
     else { axios.post("http://localhost:8080/login/",dat)
      .then(response=> {
        if(response.data.length !== 0) {
          console.log("in axios login")
          sessionStorage.setItem("status", true );
          sessionStorage.setItem('user',JSON.stringify(response.data))
          this.props.history.push("/userHome");
          
        }
        else  if(response.data.length === 0) {
          alert('Invalid Email or Password')
        }
         else {
            this.setState({errorMessage : "Invalid Email or Password. Try again Later"});
         }
        
          })
        }

  }      
    render() {
        return (
            <div style={{  display: `flex`, justifyContent: `center`  }}> 
    <Card  style={{ width: '30rem'  }}>
    <Card.Body>
    
      <Card.Subtitle className="mb-2 text-muted text-center" >Login into your Account</Card.Subtitle>
      <Card.Text>
      <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" required onChange={this.inputSet} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="pass" placeholder="Password"  required onChange={this.inputSet}/>
    </Form.Group>
    { this.state.errorMessage &&
  <p style={{ color: 'red' }} className="error"> { this.state.errorMessage } </p> }
    <Button variant="primary" type="submit" onClick={this.validateUser}>
      Submit
    </Button>
  </Form>

  </Card.Text>
      <Card.Link href="/register">Create New Account?</Card.Link>
    </Card.Body>
  </Card>

  </div>
        )
    }
}
export default login;