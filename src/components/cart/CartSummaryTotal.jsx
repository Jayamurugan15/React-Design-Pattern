import React from 'react';

const CartSummaryTotal = ({ total }) => {
  return (
    <div className="mt-8 pt-6 border-t text-right bg-white p-6 rounded-lg shadow">
      <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
      <button className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 text-lg font-semibold">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummaryTotal;