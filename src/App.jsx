import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListContainer from "./components/product/ProductListContainer";
import { Toaster } from "react-hot-toast";
import "./index.css";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/products/:id" element={<ProductListContainer />} />
          <Route path="/cart" element={<ProductListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
