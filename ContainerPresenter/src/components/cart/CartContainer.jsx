// src/components/cart/CartContainer.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CartPresenter from "./CartPresenter";
import NavBar from "../common/NavBar";

const CartContainer = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    try {
      setLoading(true)
      const res = await axios.get('http://localhost:3001/cart')
      setCartItems(res.data || [])
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${itemId}`);
      toast.success(" Product Removed!");
      fetchCart();
    } catch (err) {
      toast.error("Failed to remove");
    }
  };

  const updateQuantity = async (itemId, newQty) => {
    if (newQty < 1) return removeFromCart(itemId);
    try {
      const item = cartItems.find((i) => i.id === itemId);
      await axios.put(`http://localhost:3001/cart/${itemId}`, {
        ...item,
        quantity: newQty,
      });
      fetchCart();
    } catch (err) {
      toast.error("Update failed");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
    <NavBar cartdetails={cartItems}/>
      <CartPresenter
        cartItems={cartItems}
        removeCart={removeFromCart}
        updateQuantity={updateQuantity}
        loading={loading}
      />
    </>
  );
};

export default CartContainer;
