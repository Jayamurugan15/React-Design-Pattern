import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../common/NavBar";
import ProductListPresenter from "./ProductListPresenter";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import toast from "react-hot-toast";


const ProductListContainer = ({productId=null}) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

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

  // ProductListContainer.jsx
const addToCart = async (product) => {
  if (!product?.id || !product?.inStock) return;

  try {
    const { data: currentCart } = await axios.get("http://localhost:3001/cart");
    const existing = currentCart.find(item => item.productId === product.id);
    if (existing) {
      await axios.patch(`http://localhost:3001/cart/${existing.id}`, { quantity: existing.quantity + 1});
    } else {
      await axios.post("http://localhost:3001/cart", {
        productId: product.id,
        quantity: 1,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      });
    }
    toast.success("Added to cart! Done");
  } catch (err) {
    console.error(err);
    toast.error("Could not add to cart");
  }
};
 

  useEffect(() => {
      fetchProducts();
  }, []);

  return (
    <>
      
      <div className="">
        <NavBar/>
        <ProductListPresenter
          products={products}
          loading={loading}
          error={error}
          addToCart={addToCart}
        />
      </div>
    </>
  );
};

export default ProductListContainer;
