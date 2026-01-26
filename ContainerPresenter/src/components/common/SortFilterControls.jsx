
const SortFilterControls = ({
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories = [], 
}) => {

  console.log(categoryFilter,">>>>>>")
  return (
    <div className="px-4 py-1 bg-white rounded-lg mb-6 flex flex-col md:flex-row md:justify-between gap-4 flex-wrap">
    
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center gap-3">
        
      <select
        value={categoryFilter}
        onChange={e => onCategoryChange(e.target.value)}
        className="px-4 py-2 border rounded-lg bg-white"
      >
        <option value="all">All Categories</option>
        <option value="1">Electronics</option>
        <option value="2">Clothing</option>
        <option value="3">Home</option>
      </select>


      <select
        value={sortBy}
        onChange={e => onSortChange(e.target.value)}
        className="px-4 py-2 border rounded-lg bg-white"
      >
        <option value="name">Name (A-Z)</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating</option>
        <option value="newest">Newest First</option>
      </select>
      </div>
    </div>
  );
};

export default SortFilterControls;