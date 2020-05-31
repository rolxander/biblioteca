import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//icono <FontAwesomeIcon icon={['fas','plus-circle']}/>
import Book from '../book'
import './list-books.css'
import SearchBook from '../search-book';
import NewBook from '../new_book';
import AddLoad from '../new_loan'
class ListBooks extends Component{
    constructor(props){
        super(props);
        this.state ={
            new_book:false,
            add_loan: true  ,
            books:[
                {
                    id:"lb01",
                    title:'Metologia de la programacion I',
                    author:'José Gael Choque Serrano',
                    editorial:'Devsitebolivia Editorial',
                    release_date:'01/01/1995',
                    current_state : 'disponible',
                    active:'prestado',
                },
                {   
                    id:"lb03",
                    title:'Inteligencia Artificial',
                    author:'Sergio Mendoza',
                    editorial:'devsitebolivia',
                    release_date:'19/02/1998',
                    current_state : 'disponible',
                    active:'prestado',               
                },
                {
                    id:"lb02",
                    title:'Metodologia de la programacion',
                    author:'DevsiteBolivia',
                    editorial:'devsitebolivia',
                    release_date:'19/05/2004',
                    current_state : 'disponible',
                    active:true,
                }
            ]

        }
        //this.prueba  = this.prueba.bind(this)
        this.showModalNewBook = this.showModalNewBook.bind(this)
    }
    showModalNewBook(state){
        if(state){
            return (<NewBook 
                    addBookFromState={this.addBookFromState.bind(this)}
                    hideModalNewBook={this.hideModalNewBook.bind(this)}/>)
        } else{return null}
    }
    setStateModalNewBookTrue(){
        this.setState({new_book:true})
    }
    hideModalNewBook=()=>{
        this.setState({
            new_book:false
        })
    }
    addBookFromState=(libro)=>{
        this.setState({
            books:[...this.state.books,libro]
        })
    }
    setStateModaNewLoanTrue=()=>{
        this.setState({
            add_loan:true
        })
    }
    showModalNewLoan(state){
        if(state){
            return(<AddLoad/>)
        }else{
            return null
        }
    }
    render(){
        return(
        <>  
            
            {this.showModalNewBook(this.state.new_book)}
            {this.showModalNewLoan(this.state.add_loan)}
            <SearchBook/>
                <button onClick={this.setStateModalNewBookTrue.bind(this)}>
                    <FontAwesomeIcon icon={['fas','plus-circle']} color='green'/>
                
                </button>
                <div className="list-books">
                    <div className="table-body"> 
                        {this.state.books.map((book,key)=>{
                        return <Book  key={key} book={book}/>
                        })}
                    </div>    
            </div>
        </>
       )
    }
}
export default ListBooks