import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import RefrenceCard from './RefrenceCard.js';

class RefrenceList extends Component{
    constructor(props){
        super(props);

        this.state = {
            categoryID: this.props.match.params.catagoryID,
            references:[]
        }
    }
    

    componentDidMount(){
        
        axios.get(`http://localhost:8000/references/${this.props.match.params.catagoryID}`)
        .then((res) => {
            this.setState({references:res.data.data});
        })
        .catch(function(err){
            if(err){
                console.log(err);
            }
        });
    }
    
    render(){
        var allReferences = this.state.references.map(function(theRefrences){
            return(
                <div>
                    <RefrenceCard data={theRefrences} key={theRefrences._id} />
                </div>
            );
        });


        return(
            <div className="pageContent">
                <div className="col-md-1 hidden-sm-down">
                    <div className="">
                        <Link to="/categories" className="btn btn-default"><i className="material-icons">keyboard_backspace</i></Link>
                    </div>
                    
                    <div className="">
                        <Link to="/addRefrence"  categoryID={this.state.categoryID}  className="btn btn-default"><i className="material-icons">add</i></Link>    
                    </div>

                </div>
                <div className="col-md-10 col-sm-12">
                    {allReferences}
                </div>
                <div className="col-md-1 hidden-sm-down"></div>
            </div> 
        );
    }
}


export default RefrenceList;