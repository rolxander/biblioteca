import React,{Component} from 'react'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import './search-book.css'
export default class SearchBook extends Component{
  
    render(){

        return(
        <>
            <div className="search-book">
                <div className="input-search-book">
                    <input type="text" placeholder="   Buscar Libro / Titulo / Autor / codigo"/>
                </div>
                <button className="btn-search">
                    <div className="search-book-icon">
                        <FontAwesomeIcon  icon={['fa','search']}/>
                    </div>
                </button>
            </div>
        </>)
    }
}