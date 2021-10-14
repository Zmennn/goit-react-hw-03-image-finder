import { Component } from "react";



class ImageGallery extends Component{



    componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.searchRequest !== this.props.searchRequest) {
      console.log(prevProps.searchRequest,this.props.searchRequest)
    }
  }


    render() {
        return<>
        <ul className="ImageGallery">
  
            </ul>
            </>
    }
}


export { ImageGallery }