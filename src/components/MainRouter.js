import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router, Route} from "react-router-dom";
import { HashRouter as Router, Route } from 'react-router-dom';
import Header  from './Header'


import Logout from '../Logout'
import {Switch} from 'react-router-dom';

import Home from './Home';
import SearchRestaurant from './SearchRestaurant';
import RestaurantProfile from './RestaurantProfile';
export class MainRouter extends Component {
  render() {
    return (
        <Router>
        <div >
        <Header></Header>
         <Switch>
         <Route exact path="/" component={Home}/>  
         <Route path="/search/:searchType/:cuisine/:orderBy/:order/:hasTableBooking/:hasOnline/:limit" component={SearchRestaurant}/>
         <Route path="/search/:searchType/:searchText/" component={SearchRestaurant}/>
         <Route path="/profile/:id/" component={RestaurantProfile}/>
         <Route path="/logout/" component={Logout}/>
       
        </Switch>
        </div>
       </Router>
    )
  }
}

export default MainRouter
