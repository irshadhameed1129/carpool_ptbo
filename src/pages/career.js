import React from 'react';
import { Form, Card , Button} from "react-bootstrap";
import axios from 'axios';



class  Career extends React.Component {
  // const [validated, setValidated] = useState(false);
  constructor() {
  super();
  this.state = {
    id:"",
    user:[],
    endPlace:'',
    startPlace:'',
    date:'',
    time:'',
    rate:'',
    
  }
  if(sessionStorage.getItem('status')) {
    this.state.user = JSON.parse(sessionStorage.getItem('user'));
  }
  
  
  }
  
  componentDidMount() {
           
            

    if(!sessionStorage.getItem('status')===true) {
        this.props.history.push("/login");
    }
    else {}
      
        
}

  inputSet = (e) => {
    console.log(e.target.name);
    this.setState({[e.target.name] : e.target.value})
} 

 

   savePost = (e) => {
    e.preventDefault();
    var dat = {
        startPlace :this.state.start,
        endPlace :this.state.end,
        date :this.state.date,
        time :this.state.time,
        user_id : this.state.user.id,
        rate: this.state.rate
    }
    console.log(dat);

    if (dat.startPlace ==='' || dat.endPlace==='' || dat.rate==='' ||
        dat.time === '' || dat.date==='' || dat.user_id==='') {
          alert('Fill all Fields. Please...!')
    }

else {
  axios.post("https://carpoolptbo.herokuapp.com/newPost/",dat)
  // axios.post("http://localhost:8080/newPost/",dat)
    .then(response=> {
      // this.setState({messege : response.status});
      console.log(response.status)
      if(response.status === 200) {
        this.props.history.push("/userHome");
        
      }
       else
          alert('Sorry Something went wrong. Try again Later')
    })
}
   
        
    
} 
 

11
// disable past dates

  
  // const inputSet = (e) => {
  //   console.log(e.target.name);
  //   this.setState({[e.target.name] : e.target.value})
// } 

  render() {
    return(
    <>
    
    <div style={{  display: `flex`, justifyContent: `center` }}>
      <Card  border="primary" style={{ width: '30rem' }}>
      <Card.Header   className="mb-2 text-muted text-center font-size: 15px" >CarPool PTBO
      </Card.Header>
      <Card.Body >
      {/* <Card.Img variant="top" src={logo} /> */}
        {/* <Card.Title>Login into your Account</Card.Title> */}
        <Card.Subtitle  className="mb-2 text-muted text-center">Create New Post</Card.Subtitle>
        <Card.Text>
          
       <Form>
       <Form.Text style={{ color: 'red',}}className="">
         All Fields Mandatory *
        </Form.Text>
      <Form.Group controlId="formBasicEmail">
        <Form.Label >Starting Point</Form.Label>
        <Form.Control type="text" name="start" value= {this.start} required placeholder="Enter Starting Point"  onChange={this.inputSet}/>
        
      </Form.Group>
    
      <Form.Group controlId="formBasicFname">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="text" name="end" value= {this.end} required placeholder="Enter Destination " onChange={this.inputSet} />
      </Form.Group>
      
     
      <Form.Row>
      <Form.Group controlId="formBasicLname">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" name="date" value= {this.date} required placeholder="Enter cchedule Date"  onChange={this.inputSet}/>
      
      </Form.Group>
      
      <Form.Group controlId="formBasicLname">
        <Form.Label>Time </Form.Label>
        <Form.Control type="time" name="time" value= {this.time} required placeholder="Enter Scheduled Time"  onChange={this.inputSet}/>
      </Form.Group>
      </Form.Row>
  
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Rate In CAD</Form.Label>
        <Form.Control type="number" name="rate" value= {this.rate} required placeholder="$ Rate" onChange={this.inputSet} />
      </Form.Group>
  
      {/* <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password"name="cpass" placeholder="Confirm Password"onChange={this.inputSet}  />
      </Form.Group> */}
  
  
    
      <Button variant="primary" type="submit" onClick={this.savePost}>
        Create
      </Button>
    </Form>
  
        </Card.Text>
        <Card.Link href="/userHome">Cancel</Card.Link>
      </Card.Body>
    </Card>
      
    </div>
    </>
  );
    }
}

export default Career;
