import React,{Component}from 'react';
import './new_loan.css'
import InputAnimado from '../input_animado'



export default class AddLoan extends Component{
    constructor(props){
        let date = new Date();
        super(props)
        this.state={
            id_libro:"",
            cliente:{
                nombre:"",
                celular:""
            },
            prestamo:{
                fecha_prestamo: `${date.getDate()}/${(date.getMonth())+1}/${date.getFullYear()}`,
                
            }

        }
        console.log(this.state)
    }
    render(){
        return(
        <>
            <form className="form">
                <InputAnimado label="Nombre" type="text"/>
                <InputAnimado label="Celular" type="text"/>
                <InputAnimado label="Dias" type="number" min="0" max="100" step="0"/>
                <div className="flex-center">
                <button className="btn btn-green w-80 mt-3">
                        REGISTRAR
                    </button>
                    <button className="btn btn-red w-80 mt-3">
                        CANCELAR
                    </button>
                </div>
            </form>
        </>)
    }
}