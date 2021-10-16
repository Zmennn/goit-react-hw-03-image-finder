import { Component } from "react";
import { createPortal } from "react-dom";
import style from "./style.module.css"


const modalRoot = document.querySelector("#modal-root");
export class Modal extends Component {

    handleKeyDown=(e) => {
        if (e.code === "Escape") { this.props.toggleModal() }
        
        }

    componentDidMount() {
        window.addEventListener('keydown',this.handleKeyDown )
    }

    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown )
    }


    handleBackdropClick = (ev) => {
        if (ev.target === ev.currentTarget) {
        this.props.toggleModal()
    } }
    
    render(){
        return createPortal(
            <div
                className={style.overlay}
                onClick={this.handleBackdropClick}
            >
            <div className={style.modalContainer}>
            {this.props.children}
                </div>
                <button type="button" onClick={this.props.toggleModal} className={style.closeButton}>Close</button>
        </div>,modalRoot     
    )  }
}


