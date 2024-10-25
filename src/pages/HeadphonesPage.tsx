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
    <div className="max-w-screen-xl mx-auto p-4 flex">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Slider img */}
        <div className="">
          <ImageSlider images={headphonesImg[selectedColor]} />
        </div>

        {/* Product info */}
        <div className="w-full lg:w-1/2 flex flex-col max-w-[500px]">
          <Headphones />

          <div className="mt-4">
            <ColorSelector colors={colorsHeadphones} selectedColor={selectedColor} onChange={setSelectedColor} />
          </div>

          <div className="border-b border-gray-200 py-4">
            <AddToCartButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadphonesPage;
