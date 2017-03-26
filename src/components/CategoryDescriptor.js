import React, {Component} from 'react';

class CategoryDescriptor extends Component{
    render(){
        return(
            <div>
                <h4 className="card-title">{this.props.name}</h4>
                <p className="card-text">{this.props.description}</p>
            </div>
        );
    }
}


export default CategoryDescriptor;