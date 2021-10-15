import { Component } from "react";
import axios from "axios";
import style from "./style.module.css"
import{Button,ImageGalleryItem } from "./index"

class ImageGallery extends Component{

  state = {
        dataArray: [],
        page: 1,
        firstImgId:0,
    }


  BASE_URL = "https://pixabay.com/api/"
  KEY = "23012527-abace86bcdc7661bfd5472938"

  async componentDidUpdate(prevProps, prevState) {
        const { BASE_URL, KEY, props, state } = this;

    if (prevProps.searchRequest !== props.searchRequest) {
        const url = `${BASE_URL}?key=${KEY}&per_page=12&page=${state.page}&q=${props.searchRequest}`;
        try {
               const response=await axios.get(url)      
               this.setState({
                  dataArray:response.data.hits
                             })
            }catch(err){console.log(err)}          
    } else if (prevState.page !== state.page) {
        
        const url = `${BASE_URL}?key=${KEY}&per_page=12&page=${state.page}&q=${props.searchRequest}`;
        try {
               const response=await axios.get(url)      
            this.setState((prevState) => ({
                dataArray: [...prevState.dataArray, ...response.data.hits],
                firstImgId: response.data.hits[0] ? response.data.hits[0].id : 0
            }));
            if (response.data.hits[0]) {
                let Element = document.getElementById(response.data.hits[0].id) ;
                
                setTimeout(()=>
                Element.scrollIntoView({ behavior: "smooth" })
                    , 800)
                
            }
        } catch (err) { console.log(err) };
        
    }
    };



// setTimeout(()=>
//                 window.scrollTo({
//                 top: Element.scrollHeight,
//                  behavior: 'smooth',
//                 })
//                     , 800)



    
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
            {state.dataArray.length && (<Button
            handleLoadMore={handleLoadMore}
            />)}
            </>
    }
}


export { ImageGallery }