import ProductCard from "./ProductCard"
import Loading from "./Loading"
const ProductListPresenter = ({products,error,loading,addToCart}) => {

  if(error){
    <p className="text-2xl text-red-500">Error</p>
  }
  
  return (
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}

      {loading && (
        <div className="col-span-full text-center">
          <Loading />
        </div>
      )}
    </div>
  )
}

export default ProductListPresenter