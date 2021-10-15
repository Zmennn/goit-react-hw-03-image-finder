import style from "./style.module.css"

export  function ImageGalleryItem({ dataArray }) {
  
 return dataArray.map(el => 
    (       
    <li className={style.photoCard} key={el.id} id={el.id}  >
      <img className={style.photoImg} src={el.webformatURL} alt=""  />
    </li>
  )
  )
  
  
}

