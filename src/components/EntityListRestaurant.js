import React, { Component } from 'react'
import './css/EntityListRestaurant.css'
import EntityRestaurant from './EntityRestaurant';
export default class EntityListRestaurant extends Component {
  constructor(){
    super();
    this.state={
      resultlist:[]
    }
  }

    async componentDidMount(){
      await fetch("http://localhost:8080/Api/restaurents/cusines/count", {
        method: "GET",
       
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":" http:localhost:8080"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
            this.setState({resultlist:data});
        });
  }
  render() {
    return (
        <div className="CategoryList">
            <div className="Heading">
                <span>Popular cuisines</span>
                
            </div>
            <div className="ListEntity">
            {
              this.state.resultlist.map(function(values){
                return(<EntityRestaurant values={values}/>)
              })
            }
                
            </div>
      </div>
    )
  }
}
