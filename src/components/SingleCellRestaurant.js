import React, {Component} from 'react'
import './css/SingleCellRestaurant.css'
import restaurantJPG from '../img/restaurant.jpg';
export default class SingleCellRestaurant extends Component {

    constructor(props) {
        super();
        this.state = {
            restaurant: props.values
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log("single", nextProps.values)
        return {
            // return the new state based on `nextProps`
            restaurant: nextProps.values

        }
    }

    render() {
        return (
            <div className="SingleCellRestaurant">
                <div className="Innerbody">
                    <div className="title">
                        <span>
                        {this.state.restaurant.name}
                        </span>

                    </div>

                    <table id="tableinfo">
                        <tr>
                            <td>
                                <span className="SubHeading">Cost For Two:</span>
                            </td>
                            <td>{this.state.restaurant.averageCostforTwo} {this.state.restaurant.currency}</td>
                        </tr>
                        <tr>
                            <td>
                            <span className="SubHeading">Cuisine:</span>
                            </td>
                            <td>{this.state.restaurant.cuisines}</td>
                        </tr>
                    </table>
                    <img src={restaurantJPG} id="image"></img>
                    <div className="foot">
                        <div >
                        <span className="SubHeading">Votes:</span> <span>{this.state.restaurant.votes}</span></div>
                        <div>
                        <span className="SubHeading">Rating:</span> <span>{this.state.restaurant.aggregaterating}</span></div>
                        <div  className="linkTo" >
                            <a href={"#/profile/" + this.state.restaurant.id}>
                            <span className="LinkHeading">View</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
