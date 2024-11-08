import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (isAnimating) return; // Prevent navigation during animation
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500); // Match the duration in CSS
  };

  const prevImage = () => {
    if (isAnimating) return; // Prevent navigation during animation
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
      );
      setIsAnimating(false);
    }, 500); // Match the duration in CSS
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="carousel-btn">‹</button>
      <div className="carousel-image-container">
        <div
          className="carousel-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>
      <button onClick={nextImage} className="carousel-btn">›</button>
    </div>
  );
};

export default Carousel;
