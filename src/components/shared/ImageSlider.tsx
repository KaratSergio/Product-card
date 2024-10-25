import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col w-full max-w-screen-lg relative">
      <div
        className="relative w-full overflow-hidden 
          h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[750px]"
      >
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
        />
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
          onClick={prevImage}
          aria-label="Previous Image"
        >
          <ChevronLeftIcon />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
          onClick={nextImage}
          aria-label="Next Image"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((img, index) => (
          <button
            key={index}
            className={`rounded-sm overflow-hidden hover:border-transparent border-2 transition-colors duration-300 ${
              index === currentImage ? 'border-black' : 'border-transparent'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:h-20 xl:w-20"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
