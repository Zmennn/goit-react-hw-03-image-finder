
import { Component } from "react";
import style from "./style.module.css"

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


render(){
    return<>
        <div className={style.searchCont}>
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.handleSubmit(this.state.text);
                // После сабмита сделаем текст поискового запроса плейсхолдером, мне кажеться это прикольно,
                // будет видно что мы искали, и вообще не будет мешать новому поиску)
                this.setState({placeholder:this.state.text,text: ""})
            }}>
            <input
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



// onChange={ }