import React, { Component } from 'react';
import {Form,Spinner, Button, Card, Alert} from "react-bootstrap";
import {Scrollbars} from 'react-custom-scrollbars';
import axios from 'axios';

 class about extends Component {

  constructor() {

    super();
 
  }

 




  render() {
    return (
      <>
      <div  style={{  display: `flex`, justifyContent: `center`  }}> 
      <Card  style={{ width: '50rem'  }}>
      <Card.Body>
      <Card.Img style={{ width: '15rem' , height :'15rem' , display: `flex`, justifyContent: `center` }} variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQEDdo9GnDgVDg/profile-displayphoto-shrink_200_200/0/1564525897701?e=1614816000&v=beta&t=oDXYoq_YmdNNNDjWI-wf8qCBMUIsIjYnXQ5Ugj5w2O8" />
      <Card.Title>Irshad Shahul Hameed <p>(Founder)</p></Card.Title> 
    <Card.Text >
   <h3>Our Mission </h3>
   CarPool PTBO will facilitate a safe and reliable commuting environment in 
   the Ontario area by providing free, non-judgmental rides.
   

   CarPool PTBO  is a carpooling Web application for long distance travel, with the 
   mission to improve the interaction between riders and drivers.
Targeting long distance commuters, our goal has always been to provide our users 
with utmost trust, transparency, accountability and safety.
    </Card.Text>
      </Card.Body>
    </Card>
</div> 

  
   
   


    
    </>
    )
  }
}


 

export default about;