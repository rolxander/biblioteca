import React,{Component}from 'react';
import {prestarLibro} from './events'
import Modal from '../modal'
import NewLoan from '../new_loan'
import './book.css';
//<FontAwesomeIcon icon={['fas','edit']} color='blue'/>
 
export default class Book extends Component{
    constructor(props){
        super(props)
        this.state={
            book:{},
            modal:false
        }
    }
    showModal=()=>{
        
    }
    static getDrivedStateFromProps(props,state){

    }
    
   
    render(){
        const {title,author,release_date,editorial} = this.props.book;
    return(
        <>
            
            <div className="row-book">
               <div className="book-data"> 
                    <div className="title">
                        {title}
                    </div>
                    <div className="author">
                        <div className="label">
                            Autor
                        </div>
                        {author}
                    </div>
                    <div className="editorial">
                        <div className="label">
                            Editorial
                        </div>
                        {editorial}
                    </div>
                    <div className="release_date">
                        <div className ="label">
                            Publicado
                        </div>
                        {release_date}
                    </div>
                   
                </div> 
                <div className="options">
                    <div>
                        <button  className="btn btn-green">
                            Prestar
                        </button>
                    </div>
                    <div>
                        <button  className="btn btn-blue">
                            Detalles
                        </button>
                        
                    </div>
                </div>
            </div>
        </>)
    }
}