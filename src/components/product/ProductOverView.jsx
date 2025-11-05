import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../common/Loading";

const ProductOverview = ({product, loading, error, addToCart }) => {
 

  if (loading) return <Loading/>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!product) return <div className="p-8 text-center">Product not found</div>;


  return (
    <div className="max-w-5xl mx-auto p-5 bg-white rounded-lg shadow-lg">
      <Link to="/" className="inline-block mb-4 bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded-md text-white ">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            className="w-full h-[550px] object-cover rounded-lg"
            src={product.imageUrl}
            alt={product.name}
          />
          
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-1">{product.brand}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-6 flex items-center space-x-3">
            <span className="text-2xl font-bold text-gray-900">
               ₹{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                 ₹{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.27 9.397c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.reviewCount} reviews)</span>
          </div>

          <div className="mt-4">
            <span className={`text-md font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
              {product.inStock ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.tags.map((t, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">Features</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {product.features.map((f, i) => (
                <li key={i} className="text-sm">{f}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={addToCart}
            className={`mt-8 w-full py-3 rounded-lg font-semibold text-white transition-colors duration-200 ${
              product.inStock ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;