import React, {Component} from 'react';
import axios from 'axios';
import Note from './Note';

import {Link} from 'react-router-dom';

class RefrenceNotes extends Component {
    constructor(props){
        super(props);

        

        this.state = {
            noteContent: "",
            notes: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNoteContentUpdate = this.handleNoteContentUpdate.bind(this);

    }

    handleSubmit(e){
        
        axios.post(`http://localhost:8000/references/addNote/${this.props.match.params.referenceID}` ,{
            note:this.state.noteContent,
            refID: this.props.match.params.referenceID
        })
        .then((res) => {
            
            if(res.data.message === "Data added"){
                window.location.reload();
            }
        })
        .catch(function(err){
            
        });
    }

    handleNoteContentUpdate(e){
        this.setState({noteContent:e.target.value});
    }

    componentDidMount(e){
        axios.get(`http://localhost:8000/references/ref/${this.props.match.params.referenceID}`,{

        })
        .then((res) => {
            this.setState({notes:res.data.data.notes});
        })
        .catch(function(err){
            console.log(err);
        });
    }


    render(){
        var allNotes = this.state.notes.map(function(theNotes){
            return(
                <div>
                    <Note data={theNotes} key={theNotes._id} />
                </div>
            )
        });

        

        return(
            <div className="pageContent">
                <div className="col-sm-1">
                     <Link to={`/references/${this.props.match.params.categoryID}`} className="btn bck-btn"><i className="material-icons">keyboard_backspace</i></Link>
                </div>
                <div className="col-sm-10">
                    <h4>Notes</h4>
                    <div className="col-sm-12 topNotes">
                        <div>
                            {allNotes}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <form onSubmit={this.handleSubmit}>
                            <h4>Add Note</h4>
                            <textarea className="description" onChange={this.handleNoteContentUpdate}/>
                            <br/>
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>        
        )

    }

}


export default RefrenceNotes;