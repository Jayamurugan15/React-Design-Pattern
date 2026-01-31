import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import NavBar from "../common/NavBar";
import ProductListPresenter from "./ProductListPresenter";

import toast from "react-hot-toast";

const ProductListContainer = ({ productId = null }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(`${API_BASE}/api/products`);
      console.log(response.data,">>>>>>>>>")
      setProducts(response.data);
    } catch (err) {
      setError(err.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product) => {
    if (!product?.id || !product?.inStock) return;

    try {
      const { data: currentCart } = await axios.get(`${API_BASE}/api/cart`);
      const existing = currentCart.find(
        (item) => item.productId === product.id,
      );
      if (existing) {
        await axios.patch(`${API_BASE}/api/cart/${existing.id}`, {
          quantity: existing.quantity + 1,
        });
      } else {
        await axios.post(`${API_BASE}/cart`, {
          productId: product.id,
          quantity: 1,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
        });
      }
      toast.success("Added to Cart");
    } catch (err) {
      console.error(err);
      toast.error("Could not add to cart");
    }
  };

  const displayedProducts = useMemo(() => {
    let result = [...products];

    // 1. Search
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description?.toLowerCase().includes(term) ||
          p.tags?.some((t) => t.toLowerCase().includes(term)),
      );
    }

    // 2. Category filter
    if (categoryFilter !== "all") {
      result = result.filter((p) => p.categoryId === categoryFilter);
    }

    // 3. Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "newest":
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        case "name":
        default:
          return (a.name ?? "").localeCompare(b.name ?? "");
      }
    });

    return result;
  }, [products, searchTerm, categoryFilter, sortBy]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <NavBar />
        <ProductListPresenter
          products={displayedProducts}
          loading={loading}
          error={error}
          addToCart={addToCart}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>
    </>
  );
};

export default ProductListContainer;
