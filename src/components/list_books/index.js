import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//icono <FontAwesomeIcon icon={['fas','plus-circle']}/>
import Book from '../book'
import './list-books.css'
import SearchBook from '../search-book';
import NewBook from '../new_book';
import Modal from '../modal'
const axios = require('axios')
class ListBooks extends Component{
    constructor(props){
        super(props);
        axios({
            method: 'get',
            url: 'http://localhost:3500/api/libros',
            
          })
            .then(function (response) {
                console.log(response)
            });
        this.state ={
            books:[
                {
                    codigo:"lb01",
                    title:'Metologia de la programacion I',
                    author:'José Gael Choque Serrano',
                    editorial:'Devsitebolivia Editorial',
                    release_date:'01/01/1995',
                    current_state : 'disponible',
                    active:'prestado',
                },
                {   
                    codigo:"lb03",
                    title:'Inteligencia Artificial',
                    author:'Sergio Mendoza',
                    editorial:'devsitebolivia',
                    release_date:'19/02/1998',
                    current_state : 'disponible',
                    active:'prestado',               
                },
                {
                    codigo:"lb02",
                    title:'Metodologia de la programacion',
                    author:'DevsiteBolivia',
                    editorial:'devsitebolivia',
                    release_date:'19/05/2004',
                    current_state : 'disponible',
                    active:true,
                }
            ]

        }
    }
    closeModal=()=>{
        this.setState({modal:false})
    }
    dispatchModal=()=>{
        
    }

    modalToggle=(e)=>{
        e.preventDefault()
        this.setState({modal:!this.state.modal})
    }
    showModal=()=>{
        if(this.state.modal){
        return(
        <>
            <Modal title="Registrar Libro" closeModal={this.closeModal.bind(this)}>
                <NewBook closeModal={this.closeModal.bind(this)}/>
            </Modal>
        </>)
        }else return null
    }
    render(){
        return(
            <>{
                this.showModal()
            }
            <SearchBook/>
                <button onClick={this.modalToggle.bind(this)}>
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