import React,{Component} from 'react'
import './input_animado.css'
export default class InputAnimado extends Component{
    constructor(props){
        super(props)
        this.state={
            input_value:"",
            label:{
                style:{}
            },
            barra:{
                style:{}
            }
        }
        this.style = {color:'#F00'}
    }
 
    inputChange =(e) =>{
        let {type}=this.props;
        let valor = e.target.value;
        this.setState({
            input_value:valor
        })
        const {getDateInput} = this.props;
        getDateInput(valor);
        if(valor!==""){
            this.setState({
                label:{
                    style:{
                    fontSize:"1em",
                    bottom:"2em",
                    color:"blue",
                    transition:"ease 0.2s all"
                }
            },
            barra:{
                style:{
                    borderBottom:"1px blue solid"
                }
            }
            })
        }
    }
    inputBlur = (e)=>{
        if(e.target.value===""){
            this.setState({
                label:{
                    
                },
                barra:{

                }

            })
        }
    }
    inputFocus =() =>{
        this.setState({
            label:{
                style:{
                fontSize:"1em",
                bottom:"2em",
                color:"blue",
                transition:"ease 0.2s all"
            }
        },barra:{
            style:{
                borderBottom:"1px blue solid"
            }
        }
        })
    }
    validarTexto=()=>{

    }
    inputTypeDefined=()=>{
        let  {label,type,min,max,step} = this.props;
        if(type==="text"){
            console.log()
            return (
            <>
                <input onFocus={this.inputFocus} onChange={this.inputChange.bind(this)} onBlur={this.inputBlur} type={type}/>
                <label className="label" style={this.state.label.style}>{label}</label>
                <span className="barra" style={this.state.barra.style}>
                </span>
            </>)
        }
        else if(type==="number"){
            console.log()
            return(<><><input step= {step}type={type}  min={min} max={max} onFocus={this.inputFocus} onChange={this.inputChange.bind(this)} onBlur={this.inputBlur}/>
            <label className="label" style={this.state.label.style}>{label}</label>
            <span className="barra" style={this.state.barra.style}>
            </span></></>)
        }
    }
    render()
    {
        return( 
            <>
                <div className="input">
                    {this.inputTypeDefined()}
                </div>
            </>)
    }
}
