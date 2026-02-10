import { useState } from "react";
import { useTheme } from "./hook/usetheme";
import { useAuth } from "./hook/useAuth";

function App() {
  const { theme, toggleTheme } = useTheme();

  const {isAuth,user,setUser,login, logout} = useAuth()

  return (
    <div
      className={`w-full h-screen flex flex-col ${theme ? "bg-white text-black" : "bg-black text-white"} `}
    >
      <nav className="bg-white shadow-md  p-5 flex items-center justify-between">
        <h2 className="text-red-500 text-2xl">Provider Pattern</h2>
        <button
          onClick={toggleTheme}
          className="text-white bg-blue-400 p-2.5 rounded-lg"
        >
          Change theme
        </button>
      </nav>
      <div>
        <div>
          <input 
          type="text"
          value={user} 
          onChange={(e)=> setUser(e.target.value)}
          className="border border-gray-300 p-2.5 text-black" />
          <button onClick={()=>login("Jai")}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
