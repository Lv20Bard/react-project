import React, {Component} from 'react';

class RefrenceDescription extends Component{
    render(){
        return(
            <div>
                <h4 className="card-title">{this.props.name}</h4>
                <h5 className="card-text">{this.props.refType}</h5>
                <p className="card-text">{this.props.description}</p>
            </div>
        );
    }
}

export default RefrenceDescription;