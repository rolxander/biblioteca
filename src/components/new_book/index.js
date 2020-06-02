import React,{Component,createRef} from 'react';
import './new_book.css'
import InputAnimado from '../input_animado'

export default class NewBook extends Component{
    constructor(props){
        super(props)
    }
    render(){
       return(<>
            <InputAnimado type="text" label="Titulo"/>
            <InputAnimado type="text" label="Isbn"/>
            <InputAnimado type="text" label="Autor"/>
            <InputAnimado type="text" label="Editorial"/>
            <InputAnimado type="number" label="Año de publicacion"/>




       </>)
        
    }
}