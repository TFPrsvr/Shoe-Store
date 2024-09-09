import React, { useState } from 'react';
import './Lightbox.css';
import nextIcon from '../assets/icon-next.svg';
import prevIcon from '../assets/icon-previous.svg';

// const LightBox = ({ ImgUrls, imgsIndex, setImgsIndex }) => {
//   const handleNext = () => {
//     setImgsIndex((prevIndex) => (prevIndex + 1) % ImgUrls.length);
//   };

// const handlePrev = () => {
//   setImgsIndex((prevIndex) => (prevIndex - 1 + ImgUrls.length) % ImgUrls.length);
// };



const Lightbox = ({ image, images, setLightboxOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(image));

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (

    // <div id="lightbox">
    // <div id="imgs">
    //   <img src={ImgUrls[imgsIndex]} alt={ImgUrls[imgsIndex]} />
    // </div>

    // <div id="lightbox-controls">
    //   <button onClick={handlePrev}>
    //     <img src={prevIcon} alt="Previous" />
    //   </button>
    //   <button onClick={handleNext}>
    //     <img src={nextIcon} alt="Next" />
    //   </button>


    <div className="lightBox">
      
      <div className="lightboxContent">
        
        <button 
         className="close" 
         onClick={() => 
         setLightboxOpen(false)}>
           &times;
        </button>

        <div 
         className="lightBoxImage">
          <img 
            src={images[currentIndex]} 
            alt="Lightbox View" />
        </div>

        <div 
        className="lightBoxNav">

          <button 
           onClick={handlePrev} 
           className="prev"
          >
            <img 
             src={prevIcon} 
             alt="Previous" 
            />
          </button>
          
          <button 
           onClick={handleNext} 
           className="next"
           >
            <img 
              src={nextIcon} 
              alt="Next" 
            />
          </button>
        
        </div>
      
      </div>
    
    </div>
  );
};

export default Lightbox;
