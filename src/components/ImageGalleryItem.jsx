import style from "./style.module.css"

export  function ImageGalleryItem({ dataArray, toggleModal }) {
  
 return dataArray.map(el => 
    (       
    <li className={style.photoCard} key={el.id} id={el.id}  >
      <img onClick={toggleModal} className={style.photoImg} src={el.webformatURL} alt=""  />
    </li>
  )
  )
  
  
}

