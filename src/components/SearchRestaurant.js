import React, { Component } from 'react'
import Header from './Header';
import Filters from './Filters';

export default class SearchRestaurant extends Component {
    constructor(props){
      super();
      this.state={
        
          url:props.match.params,
          render:false
      }
    }
   
    componentDidMount(){
      ///search/:searchType/:cuisine/:orderBy/:order/:hasTableBooking/:hasOnline/:limit
    
     
     if(this.state.url.searchType==="filter"){
      var cuisine="";
      if(this.state.url.cuisine!=="all"){
       cuisine=this.state.url.cuisine;
      }
      var demo={
        "Heading":"Search Result",
        "limit":this.state.url.limit,
        "orderBy":this.state.url.orderBy,
        "cuisines":cuisine,
        "order":this.state.url.order,
        "hasTableBooking":this.state.url.hasTableBooking,
        "hasOnline": this.state.url.hasOnline,
        "SeeAll":"",
        "searchType":this.state.url.searchType
        }
        this.setState({SearchRestaurant:demo})
        this.setState({render:true})
    }
    else if(this.state.url.searchType==="FromSearch"){
     
      var demo={
        "Heading":"Search Result",
        "searchText":this.state.url.searchText,
        "SeeAll":"",
        "searchType":"FromSearch"
        }
        this.setState({SearchRestaurant:demo})
        this.setState({render:true})
    }
  }
  render() {
    var data=""
    if(this.state.render===true){
      data=
      <div> 
        {console.log(this.state.SearchRestaurant) }
      <Filters search={this.state.SearchRestaurant}/>
      
      </div>
    }
    return data;
    
    
  }
}
