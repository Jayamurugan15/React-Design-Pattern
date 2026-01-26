import React from 'react';
import CartItemRow from './CartItemRow';
import CartSummaryTotal from './CartSummaryTotal';
import Loading from '../common/Loading';

const CartPresenter = ({ cartItems, removeCart, updateQuantity,loading }) => {
  
  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl h-screen flex flex-col  items-center justify-center  mx-auto text-center">
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart ({cartItems.length})</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {cartItems.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            removeCart={removeCart}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      <CartSummaryTotal total={total} />
    </div>
  );
};

export default CartPresenter;