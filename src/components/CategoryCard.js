import React, {Component} from 'react';
import CategoryPicture from './CategoryPicture.js';
import CategoryDescriptor from './CategoryDescriptor.js';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {browserHistory} from 'react-router';

class CategoryCard extends Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        axios.delete(`http://localhost:8000/categories/${this.props.data._id}`,{

        })
        .then(function(res){
            
            window.location.reload()
        })
        .catch(function(err){

        });
    }

    render(){
        return(
            <div className="col-sm-4">
                <div className="card">
                    <CategoryPicture photo={this.props.data.photo} title={this.props.data.name} />
                    <div className="card-block">
                        <CategoryDescriptor id={this.props.data._id} name={this.props.data.title} description={this.props.data.description} />
                        <Link to={`/refrences/${this.props.data._id}`}>View</Link>
                        <a onClick={this.handleClick} className="float-right">Delete</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryCard;