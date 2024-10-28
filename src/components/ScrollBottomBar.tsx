import { useState, useEffect } from 'react';
import AddToCartButton from './shared/AddCartButton';
import Toast from './shared/Toast';
import { headphonesImg } from '../constants';

const ScrollBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isToastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 900);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    setToastOpen(true);
    console.log('Product added to cart!');
  };

  return (
    <>
      {isVisible && (
        <div>
          <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border border-gray-300 text-gray-900 py-2 px-4 sm:px-6 flex justify-between sm:items-center lg:justify-around">
            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <img className="size-20 sm:w-12 sm:h-12" src={headphonesImg.black[0]} alt="headphones" />
              <div className="flex flex-col sm:flex-row sm:space-x-4 text-right sm:text-left">
                <a href="#overview" className="text-gray-900 hover:text-gray-600 transition-colors">
                  Overviews
                </a>
                <a href="#tech-specs" className="text-gray-900 hover:text-gray-600 transition-colors">
                  Tech Specs
                </a>
                <a href="#reviews" className="text-gray-900 hover:text-gray-600 transition-colors">
                  Reviews
                </a>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end">
              <AddToCartButton
                className="w-full max-w-24 rounded-none sm:rounded-full sm:max-w-52 py-2"
                onClick={handleAddToCart}
              />
            </div>
          </div>
          <Toast title="Product added to basket!" open={isToastOpen} onOpenChange={setToastOpen} />
        </div>
      )}
    </>
  );
};

export default ScrollBottomBar;
