// ProductListContainer.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import ProductListPresenter from "./ProductListPresenter";
import ProductDetailContainer from "./ProductDetailContainer";
import ProductOverview from "./ProductOverView";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";


const ProductListContainer = ({ productId = null }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    } catch (err) {
      setError(err.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single product by ID
  const fetchProductById = async (productId) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `http://localhost:3001/products/${productId}`
      );
      setProducts([response.data]);
    } catch (err) {
      setError(err.message || `Failed to fetch product with ID ${productId}.`);
    } finally {
      setLoading(false);
    }
  };

  //Fetch Cart Items ;
  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3001/cart`);
      if (response.data) {
        setCartItems(response.data);
        console.log("Cart Items :", response.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async ({productId,quantity=1,price}) => {
    try {
      const existingItem = cartItems.find(item => item.productId === productId);
      if (existingItem) {
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + quantity };
        await axios.put(`http://localhost:3001/cart/${existingItem.id}`, updatedItem);
      } else {
        const newItem = { productId, quantity, price, addedAt: new Date().toISOString() };
        await axios.post('http://localhost:3001/cart', newItem);
      }
      fetchCart();
      console.log("Product Added");
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${itemId}`);
      fetchCart();
    } catch (err) {
      console.error('Failed to remove from cart:', err);
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      return removeFromCart(itemId);
    }
    try {
      const item = cartItems.find(i => i.id === itemId);
      if (item) {
        const updatedItem = { ...item, quantity: newQuantity };
        await axios.put(`http://localhost:3001/cart/${itemId}`, updatedItem);
        fetchCart();
      }
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  useEffect(() => {
    fetchCart();
  }, []);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchProductById(id);
    } else {
      fetchProducts();
    }
  }, [id]);

  return (
      <>
       <Routes>
          <Route path="/" element={<ProductListPresenter products={products} error={error} loading={loading}/>} />
          <Route path="/products/:id" element={<ProductOverview product={products} fetchProductById={fetchProductById} addToCart={addToCart} />} />
      </Routes>
      </>
  );
};

export default ProductListContainer;