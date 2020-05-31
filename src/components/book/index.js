import React,{Component}from 'react';
import {prestarLibro} from './events'
import './book.css';
//<FontAwesomeIcon icon={['fas','edit']} color='blue'/>
 
export default class Book extends Component{
    constructor(props){
        super(props)
        this.state={
            book:{}
        }
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
                        <button onClick={prestarLibro.bind(this,{title,author,editorial,release_date})} className="btn btn-green">
                            Prestar
                        </button>
                    </div>
                    <div>
                        <button  className="btn btn-red">
                            Detalles
                        </button>
                        
                    </div>
                </div>
            </div>
        </>)
    }
}