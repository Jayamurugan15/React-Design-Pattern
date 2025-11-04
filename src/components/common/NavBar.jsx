import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-200 border-gray-200">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="text-blue-700 font-medium text-2xl" onClick={()=>navigate('/')}>Ecommerce</h1>

        <button onClick={()=>navigate('/cart')} className="hover:scale-110">
          <CiShoppingCart size={25} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
