import React from 'react';
import toast from 'react-hot-toast';

const CartSummaryTotal = ({ total }) => {
  return (
    <div className="mt-8 pt-6 text-right bg-white p-6 rounded-lg">
      <p className="text-2xl font-bold">Total: ₹ {total.toFixed(2)}</p>
      <button onClick={()=>toast.success("Checkout done")} className="mt-4 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 text-lg font-semibold">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummaryTotal;