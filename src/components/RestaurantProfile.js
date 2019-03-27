import React, { Component } from 'react'
import './css/RestaurantProfile.css';
import restaurantJPG from '../img/restaurant.jpg';
import MapContainer from './MapContainer'
export default class RestaurantProfile extends Component {
  constructor(props){
    super();
    this.state={
      RestaurentId:props.match.params.id,
      RestaurantAddress:{},
      RestaurantDetail:{},
      ratingdiv:{
        "background-color":"",
        "width":"200px",
        "border-radius":"5px" ,
        "text-align":"center",
        "padding":"2px"
      }
    }
  }

  async componentDidMount(){

    await fetch("http://localhost:8080/Api/restaurents/"+this.state.RestaurentId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       
      }
    })
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(data => {
          this.setState({RestaurantDetail:data});
          
          var style={
            "background-color":data.ratingColor,
            "width":"200px",
            "border-radius":"5px" ,
            "text-align":"center",
            "padding":"2px"
          }
          
          
      }).catch(

      );
      await fetch("http://localhost:8080/Api/restaurents/address/"+this.state.RestaurentId, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
         
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
             this.setState({RestaurantAddress:data});
        }).catch();
}
  render() {
    
    return (
      <div className="ProfileMain">
        <div className="ProfileHeading">
          <span>Restaurent: {this.state.RestaurantDetail.name}</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
            <img src={restaurantJPG} id="image"></img>
            </div>
            <div className="col-sm-6">
            <table className="ProfileTable">
              <tbody className="table table-hover">
              <tr><td>Table Booking</td><td>{this.state.RestaurantDetail.hasTableBooking}</td></tr>
              <tr><td>Cuisines</td><td>{this.state.RestaurantDetail.cuisines}</td></tr>
              <tr><td>Average Cost For Two</td><td>{this.state.RestaurantDetail.averageCostforTwo}</td></tr>
              <tr><td>Online Service</td><td>{this.state.RestaurantDetail.hasOnline}</td></tr>
              <tr><td>Rating</td><td><div id="rating">{this.state.RestaurantDetail.ratingText} {this.state.RestaurantDetail.aggregaterating}</div></td></tr>
              <tr><td>Currency</td><td>{this.state.RestaurantDetail.currency}</td></tr>
              <tr><td>Address</td><td>{this.state.RestaurantAddress.address}</td></tr>
              </tbody>
              
            </table>
            </div>
            <div className="row" className="map">
            
            <MapContainer/>
            </div>
          </div>  
          </div>
        </div>
      
    )
  }
}
