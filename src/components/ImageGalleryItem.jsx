import style from "./style.module.css"

export  function ImageGalleryItem({ dataArray, toggleModalData }) {
  
 return dataArray.map(el => 
    (       
    <li className={style.photoCard} key={el.id} id={el.id}  >
     <img
       onClick={(e) => toggleModalData(e)}
       className={style.photoImg}
       src={el.webformatURL} alt=""
       id={el.id}
     />
    </li>
  )
  )
  
  
}

