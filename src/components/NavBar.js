import React, { Component } from 'react'
import {Nav, Navbar,} from "react-bootstrap";

export default class NavBar extends Component {
    constructor() {
      super();

      this.state ={
        loggedInStatus : "NOT_LOGGED_IN",
        user: {}
      }

    }

    render() {
        return (
            <>
          <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">CarPool PTBO</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="/career">Career</Nav.Link> */}
              <Nav.Link href="/login">Driver's Profile</Nav.Link>
              <Nav.Link href="/about">Our Mission</Nav.Link>
              {/* <Nav.Link href="/userHome"></Nav.Link> */}
            </Nav>
          </Navbar>
          </>
        )
    }
}
