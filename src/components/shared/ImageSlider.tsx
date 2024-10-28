import React, { useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    scrollToThumbnail(index);
  };

  const scrollToThumbnail = (index: number) => {
    if (thumbnailsRef.current) {
      const thumbnailElement = thumbnailsRef.current.children[index] as HTMLElement;
      if (thumbnailElement) {
        thumbnailsRef.current.scrollTo({
          left: thumbnailElement.offsetLeft - thumbnailsRef.current.offsetWidth / 2 + thumbnailElement.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div id="overview" className="flex flex-col items-center w-full max-w-screen-lg">
      <div className="relative w-full overflow-hidden h-80 sm:h-[480px] md:h-[500px] lg:h-[600px] xl:h-[750px]">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-full h-full object-contain"
        />
        <button
          onClick={handlePreviousImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full shadow-md p-2"
          aria-label="Previous image"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full shadow-md p-2"
          aria-label="Next image"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* indicators */}
      <div
        ref={thumbnailsRef}
        className="flex w-[300px] sm:w-[500px] md:w-[500px] lg:w-[660px] justify-start space-x-2 mt-4 overflow-x-auto hide-scrollbar"
      >
        {images.map((img, index) => (
          <button
            key={index}
            className={`rounded-sm flex-shrink-0 border-2 transition-colors duration-300 ${
              index === currentImageIndex ? 'border-black' : 'border-transparent'
            }`}
            onClick={() => handleThumbnailClick(index)}
            aria-label={`Go to image ${index + 1}`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:h-20 xl:w-20"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
