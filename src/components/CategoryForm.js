import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {browserHistory} from 'react-router';

import axios from 'axios';

class CategoryForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            photo:"",
            description:"",
            name:""
        } 

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhotoChange = this.handlePhotoChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.handleReload = this.handleSubmit.bind(this);
    }

    handleDescriptionChange(e){
        this.setState({description: e.target.value});
    }

    handleNameChange(e){
        this.setState({name: e.target.value});
    }

    handlePhotoChange(e){
        this.setState({photo: e.target.value})
    }

    handleSubmit(e){
        axios.post('http://localhost:8000/categories', {
            photo: this.state.photo,
            description: this.state.description,
            name: this.state.name
        })
        .then((res) => {
            
            if(res.data.message == "Data added"){
                this.props.history.push('/categories');
            }
        })
        .catch(function(err){
            
        });
        
        
    }

    handleReload(e){
        this.props.router.push('categories');
    }

    render(){
        return(
            <div className="pageContent">
                <div className="col-md-1 hidden-sm-down">
                    <Link to="/categories" className="btn btn-default"><i className="material-icons">keyboard_backspace</i></Link>
                </div>
                <div className="col-md-10 col-sm-12">
                     <form onSubmit={this.handleSubmit}>  
                        <h4>Name</h4>
                        <input className="form-control description-name" type="text" value={this.state.name} onChange={this.handleNameChange}/>
                        <h4>Photo Url</h4>
                        <input className="form-control description-url" type="text" value={this.state.photo} onChange={this.handlePhotoChange}/>
                        <h4>Description</h4>
                        <textarea className="description" type="submit" value={this.state.description} onChange={this.handleDescriptionChange}/>
                        <br/>
                        <input type="submit" value="Submit" className="btn btn-success" />
                    </form>
                    
                </div>
                <div className="col-md-1 hidden-sm-down"></div>

            </div>
        );
    }
}


export default CategoryForm;
