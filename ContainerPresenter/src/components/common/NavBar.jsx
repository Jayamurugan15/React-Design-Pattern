import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const NavBar = ({cartdetails}) => {
  
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-200 border-gray-200">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="text-blue-700 font-medium text-2xl cursor-pointer" onClick={()=>navigate('/')}>Ecommerce</h1>

        <button onClick={()=>navigate('/cart')} className="relative hover:scale-110 cursor-pointer inline-flex">
          <CiShoppingCart size={28} /> {cartdetails?.length > 0 && <span className="absolute right-1 text-sm text-white bg-blue-400 rounded-full">{cartdetails.length}</span>}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
