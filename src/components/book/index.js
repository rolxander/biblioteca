import React,{Component}from 'react';
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
    closeModal=()=>{
        this.setState({modal:false})
    }
    modalToggle=(e)=>{
        e.preventDefault();
        this.setState({modal:!this.state.modal})
    }
    showModal=(state)=>{
        if(state){
            const {codigo}=this.props.book;
            return (<Modal title="Registrar Prestamo" closeModal={this.closeModal.bind(this)}>
                <NewLoan modalToggle={this.modalToggle.bind(this) } codigo={codigo}   closeModal={this.closeModal.bind(this)}/>
            </Modal>)
        }
        else return null
    }
    static getDrivedStateFromProps(props,state){

    }
    
   
    render(){
        const {title,author,release_date,editorial} = this.props.book;
    return(
        <>
            {this.showModal(this.state.modal)}
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
                        <button onClick={this.modalToggle}  className="btn btn-green">
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