import React, {Component} from 'react'
import './css/CategoryRestaurant.css'
import SingleCellRestaurant from './SingleCellRestaurant';
export default class CategoryRestaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: props.queries,
            resultlist: []
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.setState({query:this.props.queries});
        this.fetchData(this.state.query);
    }

    componentDidUpdate(prevProps) {
        if(this.props.queries.searchType==="FromSearch"){
            return
        }
        if (prevProps.queries !== this.props.queries) {
            this.fetchData(this.props.queries);
        }
      }

    async fetchData(qry) {
       var url="";
        if(qry.searchType==="filter")
        {
            url="http://localhost:8080/Api/restaurents/category"
          await   fetch(url, {
                method: "POST",
                body: JSON.stringify(qry),
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => this.setState({resultlist: data})).catch(
                    
                );
        }
        if(qry.searchType==="FromSearch")
        {
            url="http://localhost:8080/Api/restaurents/name/"+qry.searchText
            await fetch(url, {
                method: "GET",
                
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => this.setState({resultlist: [data]})).catch(
                    
                );
        }
        

        if (this.state.query.SeeAll == "") {
            
            if(document
                .getElementById("view")!==null){
                document
                .getElementById("view")
                .style
                .display = "none";}
        }
    }

    render() {
        if(this.state.resultlist.length==0){
            return "";
        }
        console.log("sdewqwe"+JSON.stringify(this.state.resultlist));
        return (
            <div className="CategoryList">
                
                    <div className="Heading">
                        <span>{this.state.query.Heading} | </span>
                        <a href={this.state.query.SeeAll} ><span id="view" className="HeadingSeeAll">SeeAll</span></a>
                </div>
                <div className="ListRestaurant">
                    {this
                        .state
                        .resultlist
                        .map(function (values) {
                            return (
                                <SingleCellRestaurant values={values}></SingleCellRestaurant>
                            )
                        })
}

                </div>
            </div>
        )
    }
}
