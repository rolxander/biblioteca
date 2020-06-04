import React,{Component} from 'react';
import './new_book.css'
import InputAnimado from '../input_animado'

export default class NewBook extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    getDataInput=(valor)=>{
        valor = JSON.parse(valor)
        this.setState({
          ...valor
        })
        console.log(this.state)
    }
    registrarLibro=(e)=>{
        const {closeModal} = this.props;
        e.preventDefault();
        let book = {
            isbn:this.state.isbn,
            titulo: this.state.titulo,
            autor:this.state.autor,
            editorial:this.state.editorial,
            año_pub:this.state.año_pub
        }
        console.log(book)
        closeModal()
    }
    render(){
       return(<>
            <InputAnimado
                type="text"
                label="Titulo" 
                getDataInput={this.getDataInput.bind(this)} 
                name="titulo"/>
            <InputAnimado 
                type="text" 
                label="Isbn" 
                getDataInput={this.getDataInput.bind(this)} 
                name="isbn"/>
            <InputAnimado 
                type="text" 
                label="Autor" 
                getDataInput={this.getDataInput.bind(this)} 
                name="autor"/>
            <InputAnimado 
                type="text" 
                label="Editorial" 
                getDataInput={this.getDataInput.bind(this)} 
                name="editorial"/>
            <InputAnimado 
                type="number" 
                label="Año de publicacion" 
                getDataInput={this.getDataInput.bind(this)} 
                name="año_pub"/>
            <div className="flex-center mt-2">
               <button onClick={this.registrarLibro} className="btn btn-green w-100">
                   Registrar
                </button>     
            </div>
        </>)
        
    }
}