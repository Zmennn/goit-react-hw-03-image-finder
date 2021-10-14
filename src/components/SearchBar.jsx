
import { Component } from "react";
import style from "./style.module.css";
import { BiSearchAlt } from "react-icons/bi";


 class SearchBar extends Component{

     state = {
         text: "",
         placeholder:"What to search?"
     }

     handleInput = (event) => {
         this.setState({
           text:event.target.value
         })
     }

     onSubmit=(event) => {
                event.preventDefault();
                if (this.state.text.trim() !== "") { 
                this.props.handleSubmit(this.state.text.trim());
                // После сабмита сделаем текст поискового запроса плейсхолдером, мне кажеться это прикольно,
                // будет видно что мы искали, и совсем не будет мешать новому поиску)
                this.setState({ placeholder: this.state.text, text: "" })
                } else {
                    this.setState({placeholder:"What to search?"})
            }
            }


render(){
    return<>
        <div className={style.searchCont}>
            <form onSubmit={this.onSubmit}>
                <div className={style.iconCont}
                    
                    onClick={this.onSubmit}
                >
                                   
                    <BiSearchAlt className={style.icon}/>
            </div>
                
                <input
                autocomplete="off"
                autofocus    
                className={style.input}
                type="text"
                value={this.state.text}
                placeholder={this.state.placeholder}
                onChange={this.handleInput }
            />
            </form>
        </div>
    </>
};
}

export { SearchBar }



// () => {
//                         if (this.state.text.trim() !== "") {
//                             this.props.handleSubmit(this.state.text);
//                             this.setState({ placeholder: this.state.text, text: "" })
//                         }else {
//                     this.setState({placeholder:"What to search?"})
//             }
//                 }