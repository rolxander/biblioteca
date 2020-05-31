import React,{Component,createRef} from 'react';
import './new_book.css'

export default class NewBook extends Component{
    constructor(props){
        super(props)
        this.title = createRef()
        this.author = createRef()
        this.editorial= createRef()
        this.release_date = createRef()
        this.state={
            book:{}
        }
        
    }
    render(){
        const {hideModalNewBook,addBookFromState} = this.props
        return(
        <div className="new-book-modal flex-center">
            <div className="modal-form-new-book">
                <div className="modal-form-head-new-book">
                    <div className="modal-form-head-new-book-close" onClick={hideModalNewBook}>
                        x
                    </div>
                    Agregar Libro
                </div>
                <div className="modal-form-body-new-book">
                    <div className="input">
                        <input type='text'   ref={this.title} placeholder="Titulo"/>
                    </div>
                    <div className="input">
                        <input type='text'  ref={this.author}placeholder="Autor"/>
                    </div>
                    <div className="input">
                        <input type='text'  ref={this.editorial} placeholder="Editorial"/>
                    </div>
                    <div className='input'>
                        <input type='number'  ref={this.release_date} placeholder="Publicado"/>
                    </div>
                    <div>
                        <button onClick={
                            ()=>{
                              let title = this.title.current.value
                              let author = this.author.current.value
                              let editorial = this.editorial.current.value
                              let release_date = this.release_date.current.value
                              let new_book = {
                                title,
                                author,
                                editorial,
                                release_date,
                                current_state:true,
                                active:true
                              }
                              addBookFromState(new_book)
                              hideModalNewBook()
                            }
                        }>Registrar</button>
                    </div>
                    
                </div>
            </div>
        </div>)
    }
}