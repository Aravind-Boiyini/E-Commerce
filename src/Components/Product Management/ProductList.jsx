
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products }) => {
   
  const navigate = useNavigate(); // Initialize navigate

  const handleAddProduct = () => {
    navigate('/addproduct'); // Adjust the path if needed
  };


  return (
    <div className="min-h-screen bg-[#f9f9fb] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Product</h1>
          <div className="text-gray-500 text-sm">Dashboard &gt; Product List</div>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={handleAddProduct}>
            
          <FaPlus />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search product..."
          className="w-full max-w-sm border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Product Table */}
      <div className="overflow-auto bg-white rounded shadow-sm">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Product</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Added</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{product.name || "N/A"}</td>
                  <td className="p-3">{product.category || "N/A"}</td>
                  <td className="p-3">{product.stock || 0}</td>
                  <td className="p-3">{product.price || "₹0"}</td>
                  <td className="p-3">
                    <span className="text-green-600 font-medium">{product.status || "Active"}</span>
                  </td>
                  <td className="p-3">{product.addedDate || new Date().toLocaleDateString()}</td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:underline text-sm">Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-gray-400 py-6">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
       
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-1">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${
              page === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
            } hover:bg-blue-500 hover:text-white text-sm`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm">...</button>
        <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm">+</button>
      </div>
    </div>
  );
};

export default ProductList;
