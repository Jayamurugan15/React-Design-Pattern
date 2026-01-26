import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListContainer from "./components/product/ProductListContainer";
import CartContainer from "./components/cart/CartContainer";
import NavBar from "./components/common/NavBar";
import { Toaster } from "react-hot-toast";
import "./index.css";

function App() {
  return (
    <>
      <Toaster position="top-center" />
     
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
