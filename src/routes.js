import React, {Component} from 'react'
import {Route, HashRouter} from 'react-router-dom'
import App from './App'
import Categories from './components/Categories'
import CategoryForm from './components/CategoryForm'
import RefrenceList from './components/RefrenceList'
import RefrenceForm from './components/RefrenceForm'

class Routes extends Component {



    render(){
        return(
            <HashRouter>
                <div>
                    <Route path='/' component={App} />
                    <Route path='/Categories' component={Categories} />
                    
                    <Route path='/addCategory' type='add' component={CategoryForm} />
                    <Route path='/editCategory' type='edit' component={CategoryForm} />

                    <Route path='/addRefrence' type='add' component={RefrenceForm} />
                    <Route path='/editRefrence' type='edit' component={RefrenceForm} />


                    <Route path='/refrences/:catagoryID' component={RefrenceList} />
                </div>
            </HashRouter>
        );
    }
}


export default Routes;