import { BrowserRouter,Route, Routes } from 'react-router-dom'
import ProductListContainer from './components/ProductListContainer'
import ProductListPresenter from './components/ProductListPresenter'
import ProductCard from './components/ProductCard'
import './index.css';
function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProductListContainer/>}/>
      <Route path='/products/:id' element={<ProductCard/>}/>
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
