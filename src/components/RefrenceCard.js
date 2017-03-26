import React, {Component} from 'react';
import axios from 'axios';
import RefrenceDescription from './RefrenceDescription';
import {Link} from 'react-router-dom';


class RefrenceCard extends Component{
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
                    <div className="card-block">
                        <h4 className="card-title">{this.props.data.name}</h4>
                        
                        <h5 className="card-text">{this.props.data.refType}</h5>
                        <p className="card-text">{this.props.data.description}</p>
                        <div className="row">
                            <a className="col-sm-3" href={this.props.data.url}>Go to</a>
                            <a className="col-sm-3" >Notes</a>
                            <a className="col-sm-3" >Edit</a>
                            <a className="col-sm-3" onClick={this.handleClick}>Delete</a>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }


}


export default RefrenceCard;