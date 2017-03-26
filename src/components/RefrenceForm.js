import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class RefrenceForm extends Component{
    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            URL:"",
            description:"",
            name:"",
            refType:""
        } 

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleRefTypeChange = this.handleRefTypeChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.handleReload = this.handleSubmit.bind(this);
    }

    handleDescriptionChange(e){
        this.setState({description: e.target.value});
    }

    handleNameChange(e){
        this.setState({name: e.target.value});
    }

    handleUrlChange(e){
        this.setState({URL: e.target.value})
    }

    handleRefTypeChange(e){
        this.setState({refType: e.target.value})
    }

    handleSubmit(e){
        axios.post(`http://localhost:8000/refrences/${this.props.data._id}`, {
            URL: this.state.URL,
            description: this.state.description,
            name: this.state.name,
            refType: this.state.refTypes
        })
        .then((res) => {
            
            if(res.data.message == "Data added"){
                this.props.history.push(`refrences/${this.props.data._id}`);
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
                    <Link to={`/refrences/${this.props.data._id}`} className="btn btn-default"><i className="material-icons">keyboard_backspace</i></Link>
                </div>
                <div className="col-md-10 col-sm-12">
                    <form onSubmit={this.handleSubmit}>        
                        <h4>Name</h4>
                        <input className="form-control refrence-name" type="text" value={this.state.name} onChange={this.handleNameChange} />
                        <h4>Reference Type</h4>
                        <input className="form-control refrence-type" type="text" value={this.state.refType} onChange={this.handleRefTypeChange} />
                        <h4>Url</h4>
                        <input className="form-control refrence-URL" type="text" value={this.state.URL} onChange={this.handleUrlChange} />
                        <h4>Description</h4>
                        <textarea className="description refrence-description" type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
                        <br/>
                        <input type="submit" value="Submit" className="btn btn-success" />
                    </form>
                </div>
                <div className="col-md-1 hidden-sm-down"></div>

            </div>  
        );
    }
}

export default RefrenceForm;