import React from "react";
import { FiFilter, FiPlus } from "react-icons/fi";
import { FaWallet } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {
  const navigate = useNavigate();
  const data = Array(6).fill({
    category: "pattu sarees",
    title: "Banarasi pattu Saree",
    total: 120,
    ordered: 60,
    available: 60,
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg text-sm">All Time</button>
          <button className="px-4 py-2 bg-white border text-gray-600 rounded-lg text-sm">24 Hour</button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm" onClick={() => navigate("/AddProduct")}>
          <FiPlus className="text-lg" /> Add Product
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div> <div className="bg-indigo-200 h-12 w-12 rounded-full">
          <FaWallet className="text-indigo-600 ml-3 mt- w-6 h-6" />
        </div>
            <p className="text-sm text-gray-500 mb-2">Total Income</p></div>
          
          <p className="text-2xl font-semibold">$75,500</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-500 mb-2">Total Sales</p>
          <p className="text-2xl font-semibold">31,500</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-500 mb-2">Balance</p>
          <p className="text-2xl font-semibold text-green-600">$24,500</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-md font-semibold">Inventory ( Stock Availability )</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1 border rounded text-sm text-gray-600">
              <FiFilter /> Filters
            </button>
            <button className="text-sm text-indigo-600 font-medium" onClick={() => navigate("/Inventory")}>See More</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-t">
            <thead className="text-gray-500">
              <tr>
                <th className="py-2">Category</th>
                <th className="py-2">Product Title</th>
                <th className="py-2">Total Quantity</th>
                <th className="py-2">No. of Quantity Ordered</th>
                <th className="py-2">Current Available</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{item.category}</td>
                  <td className="py-2 text-indigo-600">{item.title}</td>
                  <td className="py-2">{item.total}</td>
                  <td className="py-2">{item.ordered}</td>
                  <td className="py-2">{item.available}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4 gap-2">
          <button className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 text-sm">+</button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded ${
                page === 1 ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-600"
              } text-sm`}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 text-sm">+</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
