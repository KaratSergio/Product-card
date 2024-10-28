import AddToCartButton from '../components/shared/AddCartButton';
import ColorSelector from '../components/shared/ColorSelector';
import ImageSlider from '../components/shared/ImageSlider';
import Headphones from '../components/Headphones';
import HeadphonesFeatures from '../components/shared/FeatureList';
import TechSpec from '../components/shared/TechSpecs/TechSpecs';
import AddComment from '../components/shared/AddComment';
import ScrollBottomBar from '../components/ScrollBottomBar';
import Toast from '../components/shared/Toast';

import { headphonesImg, colorsHeadphones } from '../constants';
import { useState } from 'react';

const HeadphonesPage = () => {
  const [selectedColor, setSelectedColor] = useState(colorsHeadphones[0].value);
  const [isToastOpen, setToastOpen] = useState(false);

  const handleAddToCart = () => {
    setToastOpen(true);
    console.log('Product added to cart!');
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-8 lg:gap-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="flex-1">
          <ImageSlider images={headphonesImg[selectedColor]} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col max-w-md mx-auto lg:mx-0">
          <Headphones />

          <div className="mt-4">
            <ColorSelector colors={colorsHeadphones} selectedColor={selectedColor} onChange={setSelectedColor} />
          </div>

          <div className="border-b border-gray-200 p-4">
            <AddToCartButton onClick={handleAddToCart} />
          </div>
          <HeadphonesFeatures />
        </div>
      </div>
      <TechSpec />

      <AddComment />
      <ScrollBottomBar />
      <Toast title="Product added to basket!" open={isToastOpen} onOpenChange={setToastOpen} />
    </div>
  );
};

export default HeadphonesPage;
