import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import Loading from '../common/Loading';

const Cart = ({cartProductFetch, loading,cartItems = [], removeCart, updateCart }) => {
  
  useEffect(() => {
    cartProductFetch()
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <button 
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if(loading){
    <Loading/>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart ({cartItems.length})</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-4 border-b">
            <img
              src={item.imageUrl || '/placeholder.jpg'}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)} each</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateCart(item.id, item.quantity - 1)}
                className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-10 text-center font-medium">{item.quantity}</span>
              <button
                onClick={() => updateCart(item.id, item.quantity + 1)}
                className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="text-right">
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => {
                  removeCart(item.id);
                  toast.success("Removed from cart");
                }}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="mt-8 pt-6 border-t text-right">
          <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
          <button className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 text-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;