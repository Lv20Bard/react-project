import React, {Component} from 'react';

class CategoryPicture extends Component{
    render(){
        return(
            <img className="card-img-top img-responsive" src={this.props.photo} alt={this.props.title} />
        );
    }
}


export default CategoryPicture;