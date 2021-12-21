import React, { Component } from 'react'
import { Navbar,Nav,Button,FormControl,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './images/logo1.png'
import  './navbars.css'

export default class Navbars extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home"><div class="logo"><img src={logo} alt=''/><h5>React</h5></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link to="/" className='nav-link'><h6 id='nav'>Home</h6></Link>
        <Link to="/Docs" className='nav-link'><h6 id='nav'>Docs</h6></Link>
        <Link to="/Tutorial" className='nav-link'><h6 id='nav'>Tutorial</h6></Link>
        <Link to="/Blog" className='nav-link'><h6 id='nav'>Blog</h6 ></Link>
        <Link to="/Community" className='nav-link'><h6 id='nav'>Community</h6></Link>
      </Nav>

      <Form className="d-flex searchbar">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    </Navbar>
      </>
    )
  }
}
