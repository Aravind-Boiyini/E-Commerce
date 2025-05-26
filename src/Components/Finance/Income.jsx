import React, { useState } from 'react';

const Income = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [incomeList, setIncomeList] = useState([]); // Fetch from API or props

  const filteredData = incomeList.filter((item) => {
    const orderDate = new Date(item.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    return (!from || orderDate >= from) && (!to || orderDate <= to);
  });

  return (
    <div className="p-6 w-full">
      {/* Header and Filters */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Income Information</h2>
        <div className="flex gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">To Date</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border px-2 py-1 rounded"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded shadow">
        <table className="w-full table-auto border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Order Value</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No income records available.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 text-blue-600 font-medium cursor-pointer">#{item.id}</td>
                  <td className="px-4 py-2">{item.customerName}</td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">₹ {parseFloat(item.amount).toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Income;
