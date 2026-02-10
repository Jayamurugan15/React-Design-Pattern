import { useState } from "react";
import { useTheme } from "./hook/usetheme";
import { useAuth } from "./hook/useAuth";

function App() {

  const { theme, toggleTheme } = useTheme();
  const {user,login, logout} = useAuth();

  const [userData,setUserData] = useState("");
  const [error,setError] = useState("")

  const handleLogin = () => {
    if(!userData.trim()){
      setError("Enter UserName")
    }
    login(userData);
    setUserData("");
  }

  return (
   <div
  className={`min-h-screen flex flex-col ${
    theme ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
  }`}
>
  {/* Navbar */}
  <nav
    className={`${
      theme ? "bg-white" : "bg-gray-800"
    } shadow-md px-6 py-4 flex items-center justify-between`}
  >
    <h2 className="text-red-500 text-2xl font-bold">Provider Pattern</h2>

    <div className="flex items-center gap-4">
      {user && <p className="font-medium">Hi, {user}</p>}

      {user && (
        <button
          onClick={logout}
          className="px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      )}

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Change Theme
      </button>
    </div>
  </nav>

  {/* Center Content */}
  <div className="flex flex-1 items-center justify-center">
    {
      !user ? (
        <div
      className={`w-full max-w-sm rounded-xl shadow-lg p-6 ${
        theme ? "bg-white" : "bg-gray-800"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4 text-center">
        Login
      </h3>

      <div className="flex flex-col gap-2 mb-2">
        <input
        type="text"
        placeholder="Enter your name"
        value={userData}
        onChange={(e) => setUserData(e.target.value)}
        className={`w-full border border-gray-300 rounded-md p-2.5 ${theme ? "text-black" : "text-white"}`}
      />
      {error && <p className="text-red-400 ">{error}</p>}
      </div>


      <button
        onClick={handleLogin}
        className="w-full bg-green-500 text-white py-2.5 rounded-md hover:bg-green-600"
      >
        Login
      </button>
    </div>
      ) : (
        <div
      className={`w-100 rounded-xl shadow-lg p-6 text-center ${
        theme ? "bg-white" : "bg-gray-800"
      }`}
    >
      <h2 className="text-2xl font-bold mb-2">
        Welcome, {user} 👋
      </h2>
      <p className="mb-4 opacity-80">
        You are successfully logged in.
      </p>
    </div>
      )
    }


  </div>
</div>

  );
}

export default App;
