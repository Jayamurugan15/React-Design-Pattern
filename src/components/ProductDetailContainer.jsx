// src/components/ProductDetailContainer.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductOverView from "./ProductOverView";

const ProductDetailContainer = ({ products, addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setProduct(found ?? null);
  }, [id, products]);

  if (!product) return <p className="text-center mt-8">Product not found</p>;

  return <ProductOverView product={product} addToCart={addToCart} />;
};

export default ProductDetailContainer;