import React,{Component} from'react';
import {Switch,Route} from 'react-router-dom';
import ListBooks from '../components/listbooks/index.js';
import{library}from '@fortawesome/fontawesome-svg-core';
import {faEdit,faTrashAlt,faUser,faLock,faPlusCircle,faSearch, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import Modal from '../components/modal';
import NewLoan from '../components/new_loan';

 class Routes extends Component{
    constructor(props){
        super(props)
        library.add(faWindowClose,faSearch,faEye,faEdit,faUser,faLock,faPlusCircle,faTrashAlt);
      //  console.log(faUser)
    }
    render(){
        return(
        <Switch>
            <Route exact path='/libros' render = {
                ()=>{
                    return (<ListBooks/>)
                }}/>
            <Route exact path='/' render={
                ()=>{
                    return(<Modal><NewLoan/></Modal> )
                }}/>
        </Switch>)
    }
}
export default Routes;
