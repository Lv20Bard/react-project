import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

class CategoryForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            photo:"",
            description:"",
            name:"",
            mode:""
        } 

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhotoChange = this.handlePhotoChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.handleReload = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        

        if(this.props.match.path === "/editCategory/:categoryID"){
            this.setState({mode:"edit"});
            axios.get(`http://localhost:8000/categories/${this.props.match.params.categoryID}` ,{
                
            })
            .then((res) =>{
                this.setState({
                    photo: res.data.data.photo,
                    description: res.data.data.description,
                    name: res.data.data.name
                });
                console.log(this.state);
            })
            .then((err) => {
                console.log(err);
            });
        }
        else{
            this.setState({mode:"add"});
        }
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
        if(this.state.mode === "add"){            
            axios.post('http://localhost:8000/categories', {
                photo: this.state.photo,
                description: this.state.description,
                name: this.state.name
            })
            .then((res) => {
                
                if(res.data.message === "Data added"){
                    this.props.history.push('/categories');
                }
            })
            .catch(function(err){
                
            });
        }
        else if(this.state.mode === "edit"){
            axios.put(`http://localhost:8000/categories/${this.props.match.params.categoryID}`,{
                photo: this.state.photo,
                description: this.state.description,
                name: this.state.name
            })
            .then((res) =>{
                console.log(res);
                if(res.data.message === "Data updated."){
                    this.props.history.push('/categories');
                }
            })
            .catch((err) =>{
                console.log(err);
            })
        }
        
    }

    handleReload(e){
        this.props.router.push('categories');
    }

    render(){
        return(
            <div className="pageContent">
                <div className="col-md-1 hidden-sm-down">
                    <Link to="/categories" className="btn bck-btn"><i className="material-icons">keyboard_backspace</i></Link>
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
                        <input type="submit" value="Submit" className="btn submit-btn" />
                    </form>
                    
                </div>
                <div className="col-md-1 hidden-sm-down"></div>

            </div>
        );
    }
}


export default CategoryForm;
