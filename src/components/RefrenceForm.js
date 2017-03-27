import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class RefrenceForm extends Component{
    constructor(props){
        super(props);


        this.state = {
            name:"",
            description:"",
            refType:"",
            URL:"",
            mode:"",
            categoryId:this.props.match.params.catagoryID
        } 

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleRefTypeChange = this.handleRefTypeChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.handleReload = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this);
         if(this.props.match.path === "/editReference/:catagoryID/:referenceID"){
            this.setState({mode:"edit"});
            axios.get(`http://localhost:8000/references/ref/${this.props.match.params.referenceID}` ,{
                
            })
            .then((res) =>{
                
                this.setState({
                    name:res.data.data.ref.name,
                    description:res.data.data.ref.description,
                    refType:res.data.data.ref.refType,
                    URL:res.data.data.ref.url
                      
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

    handleUrlChange(e){
        this.setState({URL: e.target.value})
    }

    handleRefTypeChange(e){
        this.setState({refType: e.target.value})
    }

    handleSubmit(e){
        if(this.state.mode === "add"){
            axios.post(`http://localhost:8000/references/${this.props.match.params.catagoryID}`, {
                categoryId: this.props.match.params.catagoryID,
                name: this.state.name,
                description: this.state.description,
                type: this.state.refType,
                url: this.state.URL
            })
            .then((res) => {
            
                if(res.data.message === "Data added"){
                    this.props.history.push(`/references/${this.props.match.params.catagoryID}`);
                
                }
            })
            .catch(function(err){
                console.log(err);
            });
        }
        else if(this.state.mode === "edit"){
             axios.put(`http://localhost:8000/references/ref/${this.props.match.params.referenceID}`,{
                name: this.state.name,
                description: this.state.description,
                type: this.state.refType,
                url: this.state.URL
            })
            .then((res) =>{
               
                if(res.data.message === "Data updated."){
                    this.props.history.push(`/references/${this.props.match.params.catagoryID}`);
                
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
                    <Link to={`/references/${this.props.match.params.catagoryID}`} className="btn bck-btn" ><i className="material-icons">keyboard_backspace</i></Link>
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
                        <input type="submit" value="Submit" className="btn submit-btn" />
                    </form>
                </div>
                <div className="col-md-1 hidden-sm-down"></div>

            </div>  
        );
    }
}

export default RefrenceForm;