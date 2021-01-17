import React, { Component } from 'react';
import {Form,Spinner, Button, Card, Alert} from "react-bootstrap";
import {Scrollbars} from 'react-custom-scrollbars';
import axios from 'axios';

 class home extends Component {

  constructor() {

    super();
    this.state ={
      posts :[],
      startPlace:'',
      endPlace:'',
      show: true,
      loading: true

    }
  }

  inputSet = (e) => {
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
  this.setState({loading: false});
  
  axios.post('https://carpoolptbo.herokuapp.com/searchPost/',dat).then(response =>{

  
          //  axios.post('http://localhost:8080/searchPost/',dat).then(response =>{
                     this.setState({posts : response.data})
                    if(response.data.length === 0) {
                      this.setState({loading: true});
                      alert('No Result Found')
                    } else {
                      this.setState({loading: true});
                      alert( response.data.length+' Data found on your Search');
                    }
                }
                )

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
      {this.state.loading ? <div></div> : <>  <div><br></br> <Spinner animation="border"  /> Please Wait......!   </div></>}

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