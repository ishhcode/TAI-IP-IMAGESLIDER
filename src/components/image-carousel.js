import React, {useState} from 'react';
import "./image-carousel.css";
import { images } from "../helper/carouselData.js";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'


const ImageCarousel = () => {

  const [currImg, setCurrImg] = useState(0);
  return (
    <div className='container'>
      <div 
      className='containerInner' 
      style={{ backgroundImage: `url(${images[currImg].img})`}}>
        <div className='left' onClick={()=>{
          currImg >0 && setCurrImg(currImg-1)
        }}>
          <ArrowBackIosIcon />
        </div>
        <div className='center'>
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].location}</p>
        </div>
        <div className='right' 
         onClick={()=> {
          currImg < images.length-1 &&setCurrImg(currImg+1)}}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel;