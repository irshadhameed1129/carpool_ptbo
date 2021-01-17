import React, { Component } from 'react'
import {Form,Alert, Button, Card, Spinner} from "react-bootstrap";
import axios from 'axios';
class register extends Component {
  constructor() {

    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      pass: '',
      cpass: '',
      mobile : "",
      loading: true
    }

  }

  inputSet = (e) => {
    this.setState({[e.target.name] : e.target.value})
} 
saveUser = (e) => {
    e.preventDefault();
   
    var dat = {
        lname :this.state.lname,
        fname :this.state.fname,
        email :this.state.email,
        pass :this.state.pass,
        mobile: this.state.mobile,
        cpass: this.state.mobile,
    }

    if (dat.lname ==='' || dat.fname==='' || dat.email==='' ||
    dat.pass === '' || dat.mobile==='' ) {
      alert('Fill all Fields. Please...!')
    } else if(dat.pass !== dat.cpass) {
      alert('Password & Confirm Password are not Matching. Try again');
    }
    
    else
    
    {
      this.setState({loading: false});
      axios.post("https://carpoolptbo.herokuapp.com/registration/",dat)
      // axios.post("http://localhost:8080/registration/",dat)
      .then(response=> {
        // this.setState({messege : response.status});
        if(response.data.length !== 0) {
          this.setState({loading: true});
          alert('User Registration Successfully Completed');
          this.props.history.push("/login");
          
        }
         else if(response.data.length === 0) {
            alert('Email Address Already Exist......!');
            this.setState({loading: true});
         }else 
            alert('Server Not Responding')
      })
    }

   
        
    
} 


  render() {
    
 
    return (
   
      <div style={{  display: `flex`, justifyContent: `center` }}>
      <Card  border="primary" style={{ width: '30rem' }}>
      <Card.Header   className="mb-2 text-muted text-center font-size: 15px" >CarPool PTBO
      </Card.Header>
      <Card.Body >
      {/* <Card.Img variant="top" src={logo} /> */}
        {/* <Card.Title>Login into your Account</Card.Title> */}
        <Card.Subtitle  className="mb-2 text-muted text-center">Enter Your Details</Card.Subtitle>
        <Card.Text>
          
       <Form>
       <Form.Text style={{ color: 'red',}}className="">
         All Fields Mandatory *
        </Form.Text>
      <Form.Group controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email"  onChange={this.inputSet}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicFname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="fname"  placeholder="Enter First Name" onChange={this.inputSet} />
      </Form.Group>
  
     
  
      <Form.Group controlId="formBasicLname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lname"  placeholder="Enter Last Name"  onChange={this.inputSet}/>
      </Form.Group>

      <Form.Group controlId="formBasicLname">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" name="mobile"  placeholder="Mobile"  onChange={this.inputSet}/>
      </Form.Group>
  
  
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="pass"  placeholder="Password" onChange={this.inputSet} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="cpass"  placeholder="Confirm Password" onChange={this.inputSet} />
      </Form.Group>
  
      {/* <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password"name="cpass" placeholder="Confirm Password"onChange={this.inputSet}  />
      </Form.Group> */}
  
  
    
      <Button variant="primary" type="submit" onClick={this.saveUser} >
        Sign Up
      </Button>
      {this.state.loading ? <div></div> : <>  <div><br></br>  <Spinner animation="border" variant="success" /></div></>}
      
    </Form>
  
        </Card.Text>
        <Card.Link href="/login">Already Registered?</Card.Link>
        <Form.Text className="text-muted">
          I Accepted Terms & Condition. 
        </Form.Text>
      </Card.Body>
    </Card>
    </div>

    )
  }
}
export default register;