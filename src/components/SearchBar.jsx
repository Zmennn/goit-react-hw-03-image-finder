
import { Component } from "react";
import style from "./style.module.css"

 class SearchBar extends Component{




render(){
    return<>
        <div className={style.searchCont}>
            <input
                className={style.input}
                type="text"
                // placeholder="What to search?"
                // onChange={this.props.handleInput }
            />
        </div>
    </>
};
}

export { SearchBar }