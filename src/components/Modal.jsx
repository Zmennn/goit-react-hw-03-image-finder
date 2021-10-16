import { Component } from "react";
import { createPortal } from "react-dom";
import style from "./style.module.css"


const modalRoot = document.querySelector("#modal-root");
console.log(modalRoot);
export class Modal extends Component {


    render(){
        return createPortal(
        <div className={style.overlay}>
            <div className={style.modal}>
            {this.props.children}
            </div>
        </div>,modalRoot     
    )  }
}


