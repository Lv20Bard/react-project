import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import CategoryCard from './CategoryCard.js';

class Categories extends Component {
    constructor(props){
        super(props);


        this.state = {
            categories:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8000/categories')
        .then((res) => {
            this.setState({categories:res.data.data});
        })
        .catch(function(err){
            if(err){
                console.log(err);
            }
        });
    
    }
    
    render(){
        var allCategories = this.state.categories.map(function(theCategories){
            return(
                <div>
                    <CategoryCard data={theCategories} key={theCategories._id} />
                </div>
            );
        });

        return(
            <div className="pageContent">
                <div className="col-md-1 hidden-sm-down">
                    <Link to="/addCategory" className="btn add-btn"><i className="material-icons">add</i></Link>    
                </div>
                <div className="col-md-10 col-sm-12">
                    {allCategories}
                </div>
                <div className="col-md-1 hidden-sm-down"></div>
            </div>
        );
    }
}



export default Categories;
