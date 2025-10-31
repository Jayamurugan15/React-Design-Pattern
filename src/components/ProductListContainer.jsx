// ProductListContainer.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import ProductListPresenter from "./ProductListPresenter";

const ProductListContainer = ({ productId = null }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = [];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("http://localhost:3001/products");
      if (response.data) {
        console.log("API response :", response.data);
      }
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
        setCart(response.data);
        console.log("Cart Items :", response.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:3001/cart/${productId}`
      );
      console.log("cart added", response.data);
      setCart(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (productId) {
      fetchProductById(productId);
    } else {
      fetchProducts();
    }
  }, [productId]);

  return (
    <div className="container mx-auto">
      <ProductListPresenter
        products={products}
        error={error}
        loading={loading}
        addtoCart={addToCart}
      />
    </div>
  );
};

export default ProductListContainer;
