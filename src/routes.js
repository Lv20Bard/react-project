import React, {Component} from 'react'
import {Route, HashRouter} from 'react-router-dom'
import App from './App'
import Categories from './components/Categories'
import CategoryForm from './components/CategoryForm'
import RefrenceList from './components/RefrenceList'
import RefrenceForm from './components/RefrenceForm'
import RefrenceNotes from './components/RefrenceNotes'

class Routes extends Component {



    render(){
        return(
            <HashRouter>
                <div>
                    <Route path='/' component={App} />
                    <Route path='/Categories' component={Categories} />
                    
                    <Route path='/addCategory' type='add' component={CategoryForm} />
                    <Route path='/editCategory/:categoryID' catMode='edit' component={CategoryForm} />

                    <Route path='/addReference/:catagoryID' type='add' component={RefrenceForm} />
                    <Route path='/editReference/:catagoryID/:referenceID' type='edit' component={RefrenceForm} />


                    <Route path='/references/:catagoryID' component={RefrenceList} />

                    <Route path='/notes/:categoryID/:referenceID' component={RefrenceNotes} />

                </div>
            </HashRouter>
        );
    }
}


export default Routes;