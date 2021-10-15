import { Component } from "react";
import axios from "axios";
import style from "./style.module.css"
import{Button,ImageGalleryItem } from "./index"

class ImageGallery extends Component{

  state = {
        dataArray: [],
        page: 1,
        status:"idle"
    }


  BASE_URL = "https://pixabay.com/api/"
  KEY = "23012527-abace86bcdc7661bfd5472938"

   componentDidUpdate(prevProps, prevState) {
        const { BASE_URL, KEY, props, state } = this;

       if (prevProps.searchRequest !== props.searchRequest) {
           const url = `${BASE_URL}?key=${KEY}&per_page=12&page=${state.page}&q=${props.searchRequest}`;
           this.setState({status:"pending"})
           axios.get(url)
               .then((response) => this.setState({
                   dataArray: response.data.hits,
                   status:"resolved"
               }))
               .catch((err) => this.setState({ status: "reject" }))
           
       } else if (prevState.page !== state.page) {
           this.setState({status:"pending"})
           const url = `${BASE_URL}?key=${KEY}&per_page=12&page=${state.page}&q=${props.searchRequest}`;
       
           axios.get(url)
               .then((response) =>{ this.setState((prevState) => ({
                   dataArray: [...prevState.dataArray, ...response.data.hits],
                   status:"resolved"
                    })); 
               
             if (response.data.hits[0]) {
                  let Element = document.getElementById(response.data.hits[0].id) ;                
                  setTimeout(()=>
                 Element.scrollIntoView({ behavior: "smooth" }), 900)               
                   }              
               }).catch((err) => this.setState({ status: "reject" }))
        }
    }
    

    
  handleLoadMore = () => this.setState((prevState) => ({
        page: prevState.page + 1
    }));


  render() {
        const{state,handleLoadMore}=this
        return<>
            <ul className={style.gallery}>
                <ImageGalleryItem
                dataArray={state.dataArray}
                />
            </ul>
            {state.status==="resolved" && (<Button
            handleLoadMore={handleLoadMore}
            />)}
            </>
    }
}


export { ImageGallery }