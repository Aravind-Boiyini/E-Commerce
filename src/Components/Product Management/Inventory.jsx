import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";

const Inventory = () => {
  const [data, setData] = useState([]); // Replace with your fetched data
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handlePageChange = (page) => {
    console.log(`Page ${page} clicked`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Inventory</h1>
          <div className="text-gray-500 text-sm">
            Dashboard &gt; Inventory List
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search inventory..."
          className="w-full max-w-sm border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        {/* Filter by Category */}
        <div className="flex items-center gap-2">
          <FiFilter className="text-gray-600" />
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="border rounded px-3 py-2 text-sm focus:outline-none"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Grocery">Grocery</option>
            <option value="Stationery">Stationery</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-t">
          <thead className="text-gray-500">
            <tr>
              <th className="py-2 px-3">Category</th>
              <th className="py-2 px-3">Product Title</th>
              <th className="py-2 px-3">Total Quantity</th>
              <th className="py-2 px-3">No. of Quantity Ordered</th>
              <th className="py-2 px-3">Current Available</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="py-4 px-3 text-center text-gray-500"
                >
                  No inventory records found.
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-3">{item.category}</td>
                  <td className="py-2 px-3 text-indigo-600">{item.title}</td>
                  <td className="py-2 px-3">{item.total}</td>
                  <td className="py-2 px-3">{item.ordered}</td>
                  <td className="py-2 px-3">{item.available}</td>
                </tr>
              ))
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

export default Inventory;
