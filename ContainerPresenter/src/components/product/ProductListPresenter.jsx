import ProductCard from "./ProductCard"
import Loading from "../common/Loading"
import SortFilterControls from "../common/SortFilterControls"

const ProductListPresenter = ({
  products,
  error,
  loading,
  addToCart,
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  sortBy,
  onSortChange,}) => {

  if(error){
    <p className="text-2xl text-red-500">Error</p>
  }
  
  return (
    <div className="p-5">
    
    <SortFilterControls
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        categoryFilter={categoryFilter}
        onCategoryChange={onCategoryChange}
        sortBy={sortBy}
        onSortChange={onSortChange}
      />
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-5 md:mx-14">
      {products?.map((product,index) => (
        <ProductCard key={index} product={product} addToCart={addToCart}  />
      ))}
    </div>

    <div className=" w-full h-screen flex items-center justify-center">
       {loading && (
          <Loading />
      )}
    </div>
    </div>
  
  )
}

export default ProductListPresenter