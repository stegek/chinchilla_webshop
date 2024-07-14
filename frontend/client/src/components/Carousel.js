import React, { useState, useEffect } from "react";

export default function Carousel({ images, interval = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  //   const prevSlide = () => {
  //     setActiveIndex((prevIndex) =>
  //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //     );
  //   };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);

  return (
    <div className="carousel">
      <img src={images[activeIndex]} alt={`Slide ${activeIndex}`}></img>
    </div>
  );
}
