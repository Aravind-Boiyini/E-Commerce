import React from "react";


const Customers = () => {
  const customers = []; // You can fetch your API data here later.

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Topbar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Costumer</h1>
        
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="text-indigo-600 cursor-pointer">Dashboard</span> &gt;{" "}
        <span>Customer</span>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Customer..."
          className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Customer ID
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Customer Name
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Phone Number
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Email ID
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 text-sm"
                >
                  No Customers Found.
                </td>
              </tr>
            ) : (
              customers.map((customer, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 text-indigo-600 font-medium cursor-pointer">
                    #{customer.customerId}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {customer.customerName}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {customer.phoneNumber}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{customer.email}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {customer.address}
                  </td>
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

export default Customers;
