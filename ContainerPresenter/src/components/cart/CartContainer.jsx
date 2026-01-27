import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CartPresenter from "./CartPresenter";
import NavBar from "../common/NavBar";

const CartContainer = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const fetchCart = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${API_BASE}/cart`)
      setCartItems(res.data || [])
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`${API_BASE}/cart/${itemId}`);
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
      await axios.put(`${API_BASE}/cart/${itemId}`, {
        ...item,
        quantity: newQty,
      });
      setCartItems((prev) =>
      prev.map((i) =>
        i.id === itemId ? { ...i, quantity: newQty } : i
      )
    );
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
