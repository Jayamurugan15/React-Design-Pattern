import { BrowserRouter,Route, Routes } from 'react-router-dom'
import ProductListContainer from './components/ProductListContainer'
import './index.css';
import ProductOverview from './components/ProductOverView';

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProductListContainer/>}/>
      <Route path="/products/:id" element={<ProductOverview />} />
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
