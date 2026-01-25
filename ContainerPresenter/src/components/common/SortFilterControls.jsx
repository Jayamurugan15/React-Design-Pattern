// components/product/SortFilterControls.jsx
const SortFilterControls = ({
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories = [], // pass from container if you fetch them
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-6 flex flex-col md:flex-row gap-4 flex-wrap">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category filter - you can fetch categories or hardcode for now */}
      <select
        value={categoryFilter}
        onChange={e => onCategoryChange(e.target.value)}
        className="px-4 py-2 border rounded-lg bg-white"
      >
        <option value="all">All Categories</option>
        {/* Example – replace with real data */}
        <option value="1">Electronics</option>
        <option value="2">Clothing</option>
        <option value="3">Home</option>
      </select>

      {/* Sort */}
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
  );
};

export default SortFilterControls;