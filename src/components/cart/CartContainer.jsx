// src/components/cart/CartContainer.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CartPresenter from "./CartPresenter";
import NavBar from "../common/NavBar";

const CartContainer = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartdetails, setCartdetails] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch raw cart
  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/cart");
      setCartItems(res.data);
    } catch (err) {
      toast.error("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  // Enrich cart with product details
  const enrichCart = async () => {
    try {
      setLoading(true);
      const [cartRes, productsRes] = await Promise.all([
        axios.get("http://localhost:3001/cart"),
        axios.get("http://localhost:3001/products"),
      ]);

      const enriched = cartRes.data
        .map((cartItem) => {
          const product = productsRes.data.find(
            (p) => p.id === Number(cartItem.productId)
          );
          return product ? { ...cartItem, ...product } : null;
        })
        .filter(Boolean);

      setCartdetails(cartRes.data);
      
      setCartItems(cartRes.data);
    } catch (err) {
      toast.error("Failed to enrich cart");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product) => {
    const { id, price, name, imageUrl } = product;
    try {
      const existing = cartItems.find((i) => i.productId === id);

      if (existing) {
       await axios.put(`http://localhost:3001/cart/${existing.id}`, {
    ...existing,
    quantity: existing.quantity + 1,
  });
      } else {
        await axios.post("http://localhost:3001/cart", {
          productId: id,
          quantity: 1,
          addedAt: new Date().toISOString(),
        });
      }
      toast.success("Added to cart!");
      enrichCart();
    } catch (err) {
      toast.error("Failed to add");
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${itemId}`);
      toast.success("Removed!");
      enrichCart();
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
      enrichCart();
    } catch (err) {
      toast.error("Update failed");
    }
  };

  useEffect(() => {
    enrichCart();
  }, []);

  return (
    <>
    <NavBar cartdetails={cartdetails}/>
      <CartPresenter
        cartItems={cartdetails}
       
        removeCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </>
  );
};

export default CartContainer;
