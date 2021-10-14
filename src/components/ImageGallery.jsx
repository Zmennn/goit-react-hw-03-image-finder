import { Component } from "react";
import axios from "axios";
import ImageGalleryItem from "./ImageGalleryItem"


class ImageGallery extends Component{

    state = {
    dataArray:[]
    }
    BASE_URL = "https://pixabay.com/api/"
    KEY = "23012527-abace86bcdc7661bfd5472938"

    async componentDidUpdate(prevProps) {
        const{BASE_URL,KEY,props,setState}=this
    if (prevProps.searchRequest !== props.searchRequest) {
        const url = `${BASE_URL}?key=${KEY}&per_page=12&page=${1}&q=${props.searchRequest}`;
        const response = await axios.get(url)
        // try {
            console.log(response.data.hits);
          await  setState({
                dataArray:[1,5,6]
            }
            )
        // } catch(err){console.log(err)}
        
    }
    }
    

    // response.data.hits


    render() {
        return<>
        <ul className="ImageGallery">
                {/* {this.state.dataArray.map((dataObj => (<ImageGalleryItem
                dataObj={dataObj}
                />)))} */}
            </ul>
            </>
    }
}


export { ImageGallery }