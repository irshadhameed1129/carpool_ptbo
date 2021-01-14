import React, { Component } from 'react';
import {Form, Button, Card,Table, Alert} from "react-bootstrap";
import {Scrollbars} from 'react-custom-scrollbars';
import axios from 'axios';

 class home extends Component {

  constructor() {

    super();
    this.state ={
      posts :[],
      startPlace:'',
      endPlace:'',
      show: true

    }
  }

  inputSet = (e) => {
    console.log(e.target.name);
    this.setState({[e.target.name] : e.target.value})
}

getAllpost = (e) => {
  e.preventDefault();
  var dat = {
    endPlace :this.state.endPlace,
    startPlace :this.state.startPlace,
   
      
  }

  if (dat.startPlace ==='' || dat.endPlace==='' 
 ) {
    alert('Fill all Fields. Please...!')
} else {
  axios.post('https://carpoolptbo.herokuapp.com/searchPost/',dat).then(response =>{
          //  axios.post('http://localhost:8080/searchPost/',dat).then(response =>{
                     this.setState({posts : response.data})
                    console.log(response)
                    if(response.data.length === 0) {
                      alert('No Result Found')
                    } else {}
                })

              }
}





  render() {
    return (
      <>
      <div  style={{  display: `flex`, justifyContent: `center`  }}> 
      <Card  style={{ width: '30rem'  }}>
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted text-center" style={{ fontSize:'30px'  }} >CarPool PTBO</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted text-center"  >Find Your Ride</Card.Subtitle>
        <Card.Text>
        <Form>
      
        <Form.Label>Starting Point</Form.Label>
        <Form.Control type="text" name="startPlace" placeholder="Starting Point"  required onChange={this.inputSet}/>
  
    
     
        <Form.Label>Destination</Form.Label>
        <Form.Control type="text" name="endPlace" placeholder="Destination"  required onChange={this.inputSet}/>
  
   
      <Button variant="primary" type="submit" onClick={this.getAllpost}>
        Search
      </Button>
    </Form>
    </Card.Text>
      </Card.Body>
    </Card>
</div> 
<div style={{  display: `flex`, justifyContent: `center`  }}>
    <Scrollbars style={{  height: '20rem' , width:'65rem'}}>


                        {this.state.posts.sort((a, b) => a.date < b.date ? 1 : -1)
                      
                      .map((item,key) =>{
                          return ( 
                            <Alert variant="success"     >
                            <Alert.Heading>Result Found on your search</Alert.Heading>
                        
                        
                          Driver: {item.fname} {" "}
                          Date: {item.date}  {" "}
                          From: {item.startPlace} {" "}
                          To : {item.endPlace} {" "}
                          Time: {item.time} {" "}
                          Contact: {item.mobile} {" "}
                          Rate: ${item.rate}
                          
                        
                          
                        
                        </Alert>
                        )
                          })}

                      </Scrollbars>

  
   
   


    </div>
    </>
    )
  }
}


 

export default home;