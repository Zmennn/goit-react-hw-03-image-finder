import { Component } from "react";
import axios from "axios";
import style from "./style.module.css"
import{Button,ImageGalleryItem } from "./index"

class ImageGallery extends Component{

    state = {
    dataArray:[]
    }
    BASE_URL = "https://pixabay.com/api/"
    KEY = "23012527-abace86bcdc7661bfd5472938"

    async componentDidUpdate(prevProps) {
        const{BASE_URL,KEY,props}=this
    if (prevProps.searchRequest !== props.searchRequest) {
        const url = `${BASE_URL}?key=${KEY}&per_page=12&page=${1}&q=${props.searchRequest}`;
        try {
               const response=await axios.get(url)      
               this.setState({
                  dataArray:response.data.hits
                             })
            }catch(err){console.log(err)}          
    }
    }
    



    render() {
        return<>
            <ul className={style.gallery}>
                <ImageGalleryItem
                dataArray={this.state.dataArray}
                />
            </ul>
            <Button />
            </>
    }
}


export { ImageGallery }