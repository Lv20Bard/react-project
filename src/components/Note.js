import React, {Component} from 'react';


class Note extends Component {
    render(){
        console.log(this.props);
        return(
            <div className="note">
                <p>{this.props.data.note}</p>
            </div>
        );
    }
}


export default Note;