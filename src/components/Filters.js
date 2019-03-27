import React, { Component } from 'react'

import './css/Filters.css';

import { Container, Row, Col } from 'react-grid-system';
import Form from 'react-bootstrap/Form';
import CategoryRestaurant from './CategoryRestaurant';
export default class Filters extends Component {
    constructor(props){
        super(props);
        this.state={
            SearchRestaurant:props.search,
            resultlist:[]}
            this.handleSubmit = this.handleSubmit.bind(this);
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
            handleSubmit(event){
                event.preventDefault();
                var form=document.getElementById("formfilter");
                var cuisine=form[0].value;
                var hasTableBooking=form[1].value;
                var hasOnline=form[2].value;
                var orderBy=form[3].value;
                var order=form[4].value;
                var data={
                    "Heading":"Search Result",
                    "limit":0,
                    orderBy,
                    "cuisines":cuisine,
                    order,
                    hasTableBooking,
                    hasOnline,
                    "SeeAll":false,
                    "searchType":"filter"
                    }
                this.setState({SearchRestaurant:data});
                this.render();
            }            
    render() {
        return (
            <div className="FiltersMain " >
                <div className="GroupFields">
                    <div className="container">
                    <form onSubmit={this.handleSubmit} id="formfilter">
                        <div className="row">
                            <div className="col-md-0">
                                <span>Cuisine</span>
                            </div>
                            <div className="col-md-2">
                                <select className="selection" >
                                {
                                    this.state.resultlist.map(function(value,index){
                                        return (<option key={index} value={value.Name}>{value.Name}</option>)
                                    })
                                }  
                                        
                                </select>
                            </div>
                            
                            <div className="col-sm-1.5" className="bigcol">
                                <span>Table Booking</span>
                            </div>
                            <div className="col-sm-1">
                            <select className="selection">
                                    <option value="both">Anything</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="col-sm-1.5" >
                                <span>Online Booking</span>
                            </div>
                            <div className="col-sm-1">
                                <select className="selection">
                                <option value="both">Anything</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="col-sm-1">
                                <span>Sort By </span>
                            </div>
                            <div className="col-1.5">
                            <select className="selection">
                                    <option value="Aggregaterating">Rating</option>
                                    <option value="Visitors">Visitors</option>
                                    <option value="Name">Name</option>
                                    <option value="AverageCostfortwo">Cost for Two</option>
                                </select>
                            </div>
                            <div className="col-sm-0">
                            <select className="selection">
                                    <option value="asc">Asc</option>
                                    <option value="desc">Desc</option>
                                </select>
                            </div>
                            <div className="col-sm-1">
                            <input  className="btn btn-primary" type="submit"></input>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            <CategoryRestaurant queries={this.state.SearchRestaurant}></CategoryRestaurant>    
            </div>
        )
    }
}
