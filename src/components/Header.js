import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import { HashRouter as Router} from 'react-router-dom';
import { Route, Redirect } from 'react-router'
import './css/Header.css';
export class Header extends Component {
  constructor(props){
    super();
    this.state={
      redirect:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    var search=document.getElementById("formdata")[0].value;
    this.setState({"redirect":"/search/FromSearch/"+search})
    
  }
  render() {
   var data
   if(this.state.redirect!==false){
    data=<Redirect to={this.state.redirect} />
   }
   else{
    data=
      <div className="Header">
       
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">World Restaurant </Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink to="/search/filter/Indian/Aggregaterating/desc/both/both/0" className="nav-link">Indian</NavLink>
              <NavLink to="/search/filter/all/Aggregaterating/desc/both/both/0" className="nav-link">Online Delivery</NavLink>
              <form className="SearchForm" onSubmit={this.handleSubmit} id="formdata">
              <div className="HeaderSearchBar">
                <Form.Group controlId="formBasicEmail" className="Search">
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Search for any restraurant by name . . .  "
                  />
                </Form.Group>
                
              </div>
              <div className="submitsearch"><Button variant="outline-light" type="submit">Submit</Button></div>
            </form>
            </Nav>
            
            <NavLink to="/logout"><Button variant="outline-light" >Log out</Button></NavLink>

          </Navbar></Router>
      </div>
   }
   return data;
  }
}

export default Header
