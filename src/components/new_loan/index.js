import React,{Component}from 'react';
import './new_loan.css'
import InputAnimado from '../input_animado'



export default class NewLoan extends Component{
    constructor(props){
        super(props)
        this.state={
            codigo:props.codigo,
            fecha_prestamo:"",
            fecha_limite_devolucion:"00/00/00",
            cantidad_dias:0
        }
    }
    getDataInput=(valor)=>{
        valor = JSON.parse(valor)
        this.setState({
          ...valor
        })
    }

    registerLoan=(e)=>{
        const { closeModal} =this.props;
        let date = new Date();
        e.preventDefault();
        let dateMilisegundos = date.getTime()
        let fecha_limite_devolucion = (dateMilisegundos+(86400000*this.state.cantidad_dias))
        let dateLimite = new Date(fecha_limite_devolucion)
        let loan ={
            codigo:this.state.codigo,
            nombre:this.state.nombre,
            celular:this.state.celular,
            fecha_prestamo:`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            fecha_limite_devolucion:`${dateLimite.getDate()}/${dateLimite.getMonth()}/${dateLimite.getFullYear()}`
            
        }
        console.log(loan)
        closeModal()
    }
    render(){
        const {modalToggle}=this.props;
        return(
        <>
            <form className="form">
                <InputAnimado label="Nombre" type="text" getDataInput={this.getDataInput.bind(this)} name="nombre"/>
                <InputAnimado label="Celular" type="text" getDataInput={this.getDataInput.bind(this)} name="celular"/>
                <InputAnimado label="Dias" type="number" min="0" max="100" step="0" getDataInput={this.getDataInput.bind(this)} name="cantidad_dias"/>
                <div className="flex-center">
                <button onClick={this.registerLoan.bind(this)} className="btn btn-green w-80 mt-3">
                        REGISTRAR
                    </button>
                    <button onClick={modalToggle} className="btn btn-red w-80 mt-3">
                        CANCELAR
                    </button>
                </div>
            </form>
        </>)
    }
}