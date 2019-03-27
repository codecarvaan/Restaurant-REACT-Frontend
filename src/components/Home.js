import React, { Component } from 'react'
import Header from './Header';
import './css/Home.css';
import CategoryRestaurant from './CategoryRestaurant';
import EntityListRestaurant from './EntityListRestaurant';
export default class Home extends Component {
  
    constructor(props){
      super();
      this.state={
          TopRatingRestaurant:{
            "Heading":"Top Rating Restaurants",
            "limit":"3",
            "orderBy":"Aggregaterating",
            "cuisines":"",
            "order":"desc",
            "hasTableBooking": "both",
            "hasOnline": "both",
            "SeeAll":"#/search/filter/all/Aggregaterating/desc/both/both/0",
            "searchType":"filter"
            },
            MostVoted:{
              "Heading":"Top Voted Restaurants",
              "limit":"3",
              "orderBy":"Votes",
              "cuisines":"",
              "order":"desc",
              "hasTableBooking": "both",
              "hasOnline": "both",
              
              "searchType":"filter",
              "SeeAll":"#/search/filter/all/Votes/desc/both/both/0",
              },
              MostSearched:{
                "Heading":"Top Searched Restaurants",
                "limit":"3",
                "orderBy":"Visitors",
                "cuisines":"",
                "order":"desc",
                "hasTableBooking": "both",
                "hasOnline": "both",
                
                "searchType":"filter",
                "SeeAll":"#/search/filter/all/Visitors/desc/both/both/0",
                },

      };
    }
    render() {
    return (
      <div className="HomeMain">
       
       <div className="Categories">
          <CategoryRestaurant queries={this.state.TopRatingRestaurant}></CategoryRestaurant>
          
          <CategoryRestaurant queries={this.state.MostVoted}></CategoryRestaurant>
          <CategoryRestaurant queries={this.state.MostSearched}></CategoryRestaurant>
          <EntityListRestaurant></EntityListRestaurant>
        </div>
        </div>  
    )
  }
}


