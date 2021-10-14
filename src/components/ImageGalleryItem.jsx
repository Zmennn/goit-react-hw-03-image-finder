

export default function ImageGalleryItem({ dataArray }) {
  
 return dataArray.map(el => 
    (       
    <li key={el.id}  className="ImageGalleryItem">
      <img src={el.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  )
  )
  
  
}

