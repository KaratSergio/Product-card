import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const AddToCartButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, children = 'Add to basket', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`w-full max-w-60 bg-black text-white py-2 border-none rounded-full transition-colors duration-300 hover:bg-black/85 ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

AddToCartButton.displayName = 'AddToBasketButton';

export default AddToCartButton;
