import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product,addToCart }) => {
 
  
    const navigate = useNavigate();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

    const handleClick = () => {
        console.log("Product Id from click:", product.id);
        
        navigate(`/products/${product.id}`);
    }

    const handleAddtoCart = (e) => {
      e.stopPropagation();
      addToCart(product.id)
    }

  return (
    <div onClick={handleClick} className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
     
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

     
      <div className="p-4">
        
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 font-medium">{product.brand}</span>
          <div className="flex space-x-1">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

       
        <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>

        
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>

        
        <div className="mt-3 flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product?.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* <div className="mt-2 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.27 9.397c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({product.reviewCount} reviews)</span>
        </div> */}

        <div className="mt-2">
          <span
            className={`text-sm font-medium ${
              product.inStock ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Call to Action */}
        <button
          onClick={handleAddtoCart}
          className={`mt-4 w-full py-2 rounded-lg font-semibold text-white ${
           product.inStock
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          } transition-colors duration-200`}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};


export default ProductCard;