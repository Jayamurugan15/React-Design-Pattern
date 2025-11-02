import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../common/NavBar";
import ProductListPresenter from "./ProductListPresenter";
import ProductOverview from "./ProductOverView";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import toast from "react-hot-toast";
import Cart from "../cart/Cart";

const ProductListContainer = ({productId=null}) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartdetails,setCartdetails]= useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const currentPath = location.pathname;

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

  //For show the product details in  cart:
  const enrichCart = async () => {
  try {
    setLoading(true);
    const [cartRes, productsRes] = await Promise.all([
      axios.get("http://localhost:3001/cart"),
      axios.get("http://localhost:3001/products")
    ]);

    const enriched = cartRes.data.map(cartItem => {
      const product = productsRes.data.find(p => p.id === Number(cartItem.productId));
      return product ? { ...cartItem, ...product } : null;
    }).filter(Boolean);

    setCartdetails(enriched);
  } catch (err) {
    toast.error("Failed to load cart");
  } finally {
    setLoading(false);
  }
};

 const addToCart = async ({ productId, quantity = 1 }) => {
  try {
    // const product = products.find(p => p.id === productId);
    // if (!product) return toast.error("Product not found");

    const existing = cartItems.find(i => i.productId === productId);

    if (existing) {
      await axios.put(`http://localhost:3001/cart/${existing.id}`, {
        ...existing,
        quantity: existing.quantity + quantity
      });
    } else {
      await axios.post("http://localhost:3001/cart", {
        productId,
        quantity,
        price: product.price,
        name: product.name,
        imageUrl: product.imageUrl,
        addedAt: new Date().toISOString()
      });
    }

    toast.success("Added!");
    enrichCart(); 
  } catch (err) {
    toast.error("Failed");
  }
};

  

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${itemId}`);
      fetchCart();
    } catch (err) {
      console.error("Failed to remove from cart:", err);
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      return removeFromCart(itemId);
    }
    try {
      const item = cartItems.find((i) => i.id === itemId);
      if (item) {
        const updatedItem = { ...item, quantity: newQuantity };
        await axios.put(`http://localhost:3001/cart/${itemId}`, updatedItem);
        fetchCart();
      }
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  //const total = cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);

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

  
  const product = id ? products[0] : null;
  return (
    <>
      <NavBar fetchCart={fetchCart} />

      {currentPath === "/cart" ? (
        <Cart
        cartProductFetch={enrichCart}
        cartItems={cartdetails}
        loading={loading}
        removeCart={removeFromCart}
        updateCart={updateQuantity} 
        />
      ) : currentPath.includes("/product") ? (
        <ProductOverview
          product={product}
          loading={loading}
          error={error}
          addToCart={() => addToCart(product.id)}
        />
      ) : (
        <ProductListPresenter
          products={products}
          loading={loading}
          error={error}
          addToCart={addToCart}
        />
      )}
    </>
  );
};

export default ProductListContainer;
