import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./style.module.css"
import{Button,ImageGalleryItem, Modal, request } from "./index"

class ImageGallery extends Component{

  state = {
        dataArray: [],
        page: 1,
        status: "idle",
      showModal: false,
        modalUrl:""
    }


 

   componentDidUpdate(prevProps, prevState) {
        const {props, state } = this;

     if (prevProps.searchRequest !== props.searchRequest) {
           this.setState({status:"pending"})
           
       request(state.page, props.searchRequest)
              .then((res) => {
               if (res.data.hits.length < 1) {
                 toast.warn("Check your request, no data received");
                 this.setState({ status: "idle" });
                }else{this.setState({
                   dataArray: res.data.hits,
                   status:"resolved"
               })};   
              })
               .catch((err) => this.setState({ status: "reject" }))
           
       } else if (prevState.page !== state.page) {
           this.setState({status:"pending"})
           
       request(state.page, props.searchRequest)
         .then((res) => {
           if (res.data.hits.length < 1) {
           toast.warn("These are all pictures for this request");
           } else {
             this.setState((prevState) => ({
                   dataArray: [...prevState.dataArray, ...res.data.hits],
                   status:"resolved"
                    })); 
               
             if (res.data.hits[0]) {
                  let Element = document.getElementById(res.data.hits[0].id) ;                
                  setTimeout(()=>
                 Element.scrollIntoView({ behavior: "smooth" }), 900)               
                   }
           }
         }
         )
               .catch((err) => this.setState({ status: "reject" }))
        }
  }
  

  toggleModal = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
      status:!prev.showModal?"idle":"resolved"
    }))
  }
  
  
  toggleModalData = (e) => {    
    this.setState((prev) => ({
      showModal: !prev.showModal,
      modalUrl: this.gettingLink(prev,e),
      status:!prev.showModal?"idle":"resolved"       
        }))
    }
  
  gettingLink(prev,e) {
    const modalId=e.target.id;
    const obj = prev.dataArray.find((el) => el.id.toString() === modalId)
    if(obj){return obj.largeImageURL}
    
  };

  handleLoadMore = () => this.setState((prevState) => ({
        page: prevState.page + 1
    }));


  render() {
        const{state,handleLoadMore,toggleModal,toggleModalData}=this
      return <>
        {state.status === "reject" &&toast.error("unknown error, check connection")}
        
        {state.showModal && <Modal
            toggleModal={toggleModal}>
              <img src={state.modalUrl} className={style.modalImg} alt="" />
              
          </Modal>}
          
          {!state.showModal &&
            <ul className={style.gallery}>
                <ImageGalleryItem
                  dataArray={state.dataArray}
                  toggleModalData={toggleModalData}
                />
            </ul>}
          
            {state.status==="resolved" && (<Button
            handleLoadMore={handleLoadMore}
            />)}
            </>
    }
}


export { ImageGallery }