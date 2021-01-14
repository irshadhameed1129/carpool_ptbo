import React, { Component } from 'react'
import {Form, Button, Card} from "react-bootstrap";
import axios from 'axios';

 class resetPass extends Component {

    
    constructor() {
      
        super();
        this.state = {
        
          email: '',
          pass: '',
          mobile:''
        }
    
      }


      inputSet = (e) => {
        this.setState({[e.target.name] : e.target.value})
    } 
  



      resetPassword = (e) => {
        e.preventDefault();
        var dat = {
  
             pass :this.state.pass,
            email :this.state.email,
            mobile :this.state.mobile
            
        }
        if ( dat.email==='' ||
        dat.pass === '' || dat.mobile === '' ) {
          alert('Fill all Fields. Please...!')
        }
        else { axios.post("https://carpoolptbo.herokuapp.com/login/",dat)
      //  else { axios.post("http://localhost:8080/resetPass",dat)
        .then(response=> {
          if(response.data.length !== 0) {
            this.props.history.push("/home");
           
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
            <>
            <div>

            <div style={{  display: `flex`, justifyContent: `center`  }}> 
    <Card  style={{ width: '30rem'  }}>
    <Card.Body>
    
      <Card.Subtitle className="mb-2 text-muted text-center" >Recovery  Password</Card.Subtitle>
      <Card.Text>
      <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="email" formNoValidate placeholder="Enter email" required onChange={this.inputSet} />
    
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="number" name="mobile" placeholder="Phone Number"  required onChange={this.inputSet}/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>New Password</Form.Label>
      <Form.Control type="password" name="pass" placeholder="New Password"  required onChange={this.inputSet}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={this.resetPassword}>
      Reset
    </Button>
  </Form>

  </Card.Text>
    </Card.Body>
  </Card>

  </div>


                
            </div>
            </>
        )
    }
}
export default resetPass;