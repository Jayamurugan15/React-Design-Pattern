import React from 'react';
 import toast from 'react-hot-toast';
 import axios from 'axios';

const AddtoCart = ({product,addToCart}) => {
    
    const handleClick = async () => {
        addToCart(product)
     };
  return (
    <button
          onClick={handleClick}
          className={`mt-4 w-full py-2 rounded-lg font-semibold text-white cursor-pointer ${
            product.inStock
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          } transition-colors duration-200`}
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Unavailable"}
        </button>
  )
}

export default AddtoCart