
import React, { Component } from 'react'
import { CardGroup,Form, Button, Card, Table} from "react-bootstrap";
import axios from 'axios';
import {Scrollbars} from 'react-custom-scrollbars';
  class userHome extends Component {
       
        constructor () {
            
            super();
            this.state = {
                        uid:'',
                        user : [],
                        id:'',
                        posts :[],
                        fname: '',
                        email:'',
                        lname:'',
                        pass:'',
                        mobile:'',
                        loading: true,
                        key:''
            }
           
            if(sessionStorage.getItem('status')) {
                this.state.user = JSON.parse(sessionStorage.getItem('user'));
            // console.log(this.user.id);
            // this.setState({fname: this.state.user.fname});
            this.id = this.state.user.id;
            this.fname = this.state.user.fname;
            this.lname = this.state.user.lname;
            this.email = this.state.user.email;
            this.pass = this.state.user.pass;
            this.mobile = this.state.user.mobile;
            
            }
            else {
            }
           
        }
        inputSet = (e) => {
            console.log(e.target.value);
            this.setState({[e.target.name] : e.target.value})
        } 
         componentDidMount() {
           
            

            if(!sessionStorage.getItem('status')===true) {
                this.props.history.push("/login");
            }
            else {
              axios.get('https://carpoolptbo.herokuapp.com/getPost/'+this.id+'/').then(response =>{
                // axios.get('http://localhost:8080/getPost/'+this.id+'/').then(response =>{
                     this.setState({posts : response.data})
                    console.log(response.data)
                   
                }).catch(error => {
                    console.log(error);
                })
            }
              
                
        }


        logout= (e)=>{
            sessionStorage.removeItem('status');
            sessionStorage.removeItem('user');
            console.log(sessionStorage.getItem('status'));
            this.props.history.push("/login");
          }


          delete= (e)=>{
            this.setState({[e.target.name] : e.target.value})
            
            console.log(e.target.value);
            axios.post('https://carpoolptbo.herokuapp.com/delete/'+e.target.value+'/',).then(response =>{
            // axios.post('http://localhost:8080/delete/'+e.target.value+'/',).then(response =>{
             if(response.data === "Post Deleted") {
              alert('Ride Deleted')
              window.location.reload(false);
             }else {
              alert('Something Went Wrong')
             }
            
         }).catch(error => {
             console.log(error);
         })
           
          }

          update = (e) => {
            e.preventDefault();
            var dat = {
                fname : this.state.user.fname,
                lname : this.state.user.lname,
                email : this.state.user.email,
                id : this.state.user.id,
                // lname :this.state.lname,
                // fname :this.state.fname,
                // email :this.state.email,
                pass :this.state.pass,
                mobile: this.state.mobile
            
            }
            console.log(dat);
            
            // axios.post("http://localhost:8080/update/",dat)
            axios.post("https://carpoolptbo.herokuapp.com/update/",dat)
    .then(response=> {
      // this.setState({messege : response.status});
      console.log(response.data)
      if(response.status === 200) {
        alert('Profile Updated')
        // this.props.history.push("/Home");
        
      }
       else
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
    })
        }

    render() {
        return (
            <>
            <div class="">
                <CardGroup>
                
                    <div class="">
                    <Button variant="error" type="submit" onClick={this.logout} >
                                        Logout
                            </Button>
                            <Card  border="success" style={{ width: '20rem'}}>
                            <Card.Header   className="mb-2 text-muted text-center font-size: 15px" >You Profile Details
                            </Card.Header>
                            <Card.Body >
                            {/* <Card.Img variant="top" src={logo} /> */}
                            {/* <Card.Title>Login into your Account</Card.Title> */}
                            <Card.Subtitle  className="mb-2 text-muted text-center">Welcome Back: <p> {  this.state.fname }</p></Card.Subtitle>
                            <Card.Text>
                                
                            <Form>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Control  type="email" name="email" value = {this.email}  placeholder={this.email}  disabled  />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                        
                            <Form.Group controlId="formBasicFname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="fname"  value = {this.name}  placeholder={this.fname}  disabled  />
                            </Form.Group>
                        
                        
                        
                            <Form.Group controlId="formBasicLname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lname" value = {this.lname} placeholder={this.lname}   disabled  />
                            </Form.Group>
                    
                            <Form.Group controlId="formBasicLname">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" name="mobile"  placeholder={this.mobile} onChange={this.inputSet} />
                            </Form.Group>
                        
                        
                            <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="pass" required placeholder="Password" onChange={this.inputSet} />
                            </Form.Group>
                        
                            <Button variant="success" type="submit" onClick={this.update} >
                            Update
                            </Button>
                            <Form.Text className="text-muted">
                                
                            </Form.Text>
                        </Form>
                        
                            </Card.Text>
                            </Card.Body>
                        </Card>
             </div>
            <div class="col">
                <div class="row">
                    <div class="col">
                    <h4 style={{   width : '50rem'  }}>Your Ride History</h4>
                    </div >
                    
                    <div class="col">
                    <Button variant="warning" type="submit" href="/career" >
                                        Create Ride
                                        </Button>

                    </div>
                    
                    
                </div>
              
                <div class="row">
               
                    {/* {this.state.posts.map(singlePost => ( */}
                        

            
                  
                  <Scrollbars style={{  height: '50rem' }}>
                        <Table variant="flush" striped bordered hover size="sm">
                          
                        <thead>
                          <tr>
                            <th>Ref</th>
                            <th>Date</th>
                            <th>Starting Point
                                 
                            </th>
                            <th>Destination</th>
                            <th>Time</th>
                            <th>Rate</th>
                            <th>Action</th>
                            


                          </tr>
                        </thead>
                        <tbody> 
                        {this.state.posts.sort((a, b) => a.date < b.date ? 1 : -1)
                        
                        .map((item,key) =>{
                            return ( 
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.startPlace}</td>
                            <td>{item.endPlace}</td>
                            <td>{item.time}</td>
                            <td>${item.rate}</td>
                            <td>
                            <Button variant="danger" type="submit" value = {item.id} name="key" onClick ={this.delete}    >
                                        Delete
                                        </Button> 
                            </td>
                          </tr>
                          )
                            })}
                        </tbody>
                        
                      </Table>
                      </Scrollbars>
                    </div>
             </div>  
            </CardGroup>
        </div>
          </>
        )
    }
}

export default userHome;


