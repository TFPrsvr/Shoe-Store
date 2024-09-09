import React, { useState } from 'react';
import './Gallery.css';
import Lightbox from '../Lightbox/Lightbox';
import Img1 from '../assets/image-product-1.jpg';
import Img2 from '../assets/image-product-2.jpg';
import Img3 from '../assets/image-product-3.jpg';
import Img4 from '../assets/image-product-4.jpg';
import Img1Thumb from '../assets/image-product-1-thumbnail.jpg'
import Img2Thumb from '../assets/image-product-2-thumbnail.jpg'
import Img3Thumb from '../assets/image-product-3-thumbnail.jpg'
import Img4Thumb from '../assets/image-product-4-thumbnail.jpg'



const Gallery = () => {
  const images = [Img1, Img2, Img3, Img4];
  const [selectedImage, setSelectedImage] = useState(Img1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="gallery">
        <div className="mainImg" onClick={() => openLightbox(selectedImage)}>
          <img src={selectedImage} alt="Selected Img" style={{height: "240px", width: "240px"}} />
        </div>
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={selectedImage === image ? 'active' : ''}
            />
          ))}
        </div>
      </div>

     
      {lightboxOpen && <Lightbox image={selectedImage} images={images} setLightboxOpen={setLightboxOpen} />}
    </>
  );
};

export default Gallery
