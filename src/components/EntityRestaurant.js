import React, { Component } from 'react'
import './css/EntityRestaurant.css'
export default class EntityRestaurant extends Component {
  constructor(props){
    super();
    this.state={
      CuisineName:props.values.Name,
      Count:props.values.CountRestaurants,
      SeeAll:"#/search/filter/"+props.values.Name+"/Votes/desc/both/both/0"
    };
  }
  render() {
    return (
      <div className="Entity">
      <a href={this.state.SeeAll}>
        <div className="Details">
            <span>{this.state.CuisineName}</span><br></br>
            <span>{this.state.Count} restaurants</span>
        </div>
        </a>
      </div>
    )
  }
}
