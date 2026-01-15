import React from 'react';
import toast from 'react-hot-toast';

const CartItemRow = ({ item, removeCart, updateQuantity }) => {
  console.log("Hola",typeof(item),item);
  
  return (
    <div className="flex items-center gap-4 py-4 border-b last:border-b-0">
      <img
        src={item.imageUrl || '/placeholder.jpg'}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600"> ₹{item.price} each</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 text-lg"
        >
          -
        </button>
        <span className="w-12 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 text-lg"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="font-bold"> ₹{(item.price * item.quantity)}</p>
        <button
          onClick={() => {
            removeCart(item.id);
          }}
          className="text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemRow;