import {useState} from "react"

export default function ProductImages() {
    const[mainImg, setMainImg] = useState(0)
    const thumbImages = [
        {id:1, value:"src/assets/images/image-product-1-thumbnail.jpg"},
        {id:2, value:"src/assets/images/image-product-2-thumbnail.jpg"},
        {id:3, value:"src/assets/images/image-product-3-thumbnail.jpg"},
        {id:4, value:"src/assets/images/image-product-4-thumbnail.jpg"}

    ]
    const mainImages = [
        {id:1, value:"src/assets/images/image-product-1.jpg"},
        {id:2, value:"src/assets/images/image-product-2.jpg"},
        {id:3, value:"src/assets/images/image-product-3.jpg"},
        {id:4, value:"src/assets/images/image-product-4.jpg"}
    ]
    function handleThumbClick(index) {
        setMainImg(index)
    }

  return (
    <>
      <img src={mainImages[mainImg].value} alt="" className="main-image"/>
      <ul className="thumbnail">
      {thumbImages.map((thumbImage,index) => {
        return <li key={thumbImage.id} className="thumbnail-images"> <img  src={thumbImage.value} onClick={() => handleThumbClick(index)} alt={`image{index}`} className=".thumbnail" width={120} height={120}/></li>
      })}
      </ul></>
  );
}
