import { MdDelete } from "react-icons/md";

const CartItemRow = ({ item, removeCart, updateQuantity }) => {
  const price = item.price
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-300 last:border-b-0">
      <img
        src={item.imageUrl || '/placeholder.jpg'}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600"> ₹{item.price} each</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 text-lg cursor-pointer"
        >
          -
        </button>
        <span className="w-12 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 text-lg cursor-pointer"
        >
          +
        </button>
      </div>

      <div className="p-2 ">
        <button
          onClick={() => {
            removeCart(item.id);
          }}
          className="text-red-500 cursor-pointer"
        >
          <MdDelete size={22}/>
        </button>
      </div>
    </div>
  );
};

export default CartItemRow;