import React, {Component} from 'react';
import CategoryPicture from './CategoryPicture.js';
import CategoryDescriptor from './CategoryDescriptor.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
                    <div className="card-title">
                        <h4>{this.props.data.name}</h4>
                    </div>
                    <CategoryPicture photo={this.props.data.photo} title={this.props.data.name} />
                    <div className="card-block">
                        <CategoryDescriptor id={this.props.data._id} name={this.props.data.title} description={this.props.data.description} />
                        
                        <div className="row">
                            <Link className="col-sm-4" to={`/references/${this.props.data._id}`}>View</Link>
                            <Link className="col-sm-4" to={`/editCategory/${this.props.data._id}`}>Edit</Link>
                            <a className="col-sm-4" onClick={this.handleClick} >Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryCard;