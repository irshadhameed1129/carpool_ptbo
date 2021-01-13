import React, { Component } from 'react';
import {Form, Button, Card,Table} from "react-bootstrap";
import {Scrollbars} from 'react-custom-scrollbars';
import axios from 'axios';

 class home extends Component {

  constructor() {

    super();
    this.state ={
      posts :[],
      startPlace:'',
      endPlace:'',

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


           axios.post('http://localhost:8080/searchPost/',dat).then(response =>{
                     this.setState({posts : response.data})
                    console.log(response)
                    if(response.data.length === 0) {
                      alert('No Result Found')
                    }
                   
                })


  

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
                        <Table striped bordered hover variant="light" style={{ }}>
                     
                      
                        <tbody> 
                        {this.state.posts.sort((a, b) => a.date < b.date ? 1 : -1)
                        
                        .map((item,key) =>{
                            return ( 
                            
                          <tr>
                          
                            <td>Driver: {item.fname}</td>
                            <td>Date: {item.date}</td>
                            <td>From: {item.startPlace}</td>
                            <td>To : {item.endPlace}</td>
                            <td>Time: {item.time}</td>
                            <td>Contact: {item.mobile}</td>
                            <td>Rate: ${item.rate}</td>
                            <td>
                          
                            </td>
                          </tr>
                          )
                            })}
                        </tbody>
                        
                      </Table>
                      </Scrollbars>

  
   
   


    </div>
    </>
    )
  }
}


 

export default home;