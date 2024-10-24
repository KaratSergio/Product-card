import AddToCartButton from '../components/shared/AddCartButton';
import ColorSelector from '../components/shared/ColorSelector';
import ImageSlider from '../components/shared/ImageSlider';
import Headphones from '../components/Headphones';

import { headphonesImg, colorsHeadphones } from '../constants';
import { useState } from 'react';

const HeadphonesPage = () => {
  const [selectedColor, setSelectedColor] = useState(colorsHeadphones[0].value); 

  const handleAddToCart = () => {
    console.log('Product added to cart!');
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Slider img */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <ImageSlider images={headphonesImg[selectedColor]} />
        </div>

        {/* Product info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <Headphones />

          <div className="my-4">
            <ColorSelector
              colors={colorsHeadphones}
              onChange={setSelectedColor}
            />
          </div>

          <AddToCartButton onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default HeadphonesPage;
