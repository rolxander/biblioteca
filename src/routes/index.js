import React,{Component} from'react';
import {Switch,Route} from 'react-router-dom';
import ListBooks from '../components/list_books/index.js';
import{library}from '@fortawesome/fontawesome-svg-core';
import {faEdit,faTrashAlt,faUser,faLock,faPlusCircle,faSearch, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import ToggleCheckBox from '../components/toggle-custom-checkboox'

 class Routes extends Component{
    constructor(props){
        super(props)
        library.add(faWindowClose,faSearch,faEye,faEdit,faUser,faLock,faPlusCircle,faTrashAlt);
    }
    
    render(){
        return(
        <Switch>
            <Route exact path='/' render = {
                ()=>{
                    return (<ListBooks/>)
                }}/>
            <Route exact path='/toggle' render={
                ()=>{
                    return(<ToggleCheckBox/> )
            }}/>    
        </Switch>)
    }
}
export default Routes;
