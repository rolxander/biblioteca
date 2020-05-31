import React,{Component} from 'react';
import{FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import './modal.css';
export default class Modal extends Component{
    render(){
        const {children} = this.props;
    return(
    <>
        <div className="modal flex-center">
            <div className="box-modal">
                <div className="head-modal">
                    <div className="close-modal">
                        <FontAwesomeIcon icon={['fa','window-close']} />
                    </div>
                    <div className="title-modal">
                        Registrar Prestamo
                    </div>
                </div>
                <div className="body-modal">
                    {children}
                </div>
                <div className="footer-modal flex-center">
                   
                </div>
            </div>
        </div>
    </>)
    }
}