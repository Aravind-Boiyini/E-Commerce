import React, { useEffect, useState } from 'react';

const BalanceSheet = () => {
  const [balanceData, setBalanceData] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  useEffect(() => {
    // Example API call to fetch real data
    fetch('/api/balance-sheet')
      .then((res) => res.json())
      .then((data) => setBalanceData(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  const filteredData = balanceData.filter((item) => {
    if (!fromDate && !toDate) return true;
    const date = new Date(item.date); // assuming `item.date` exists
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    if (from && date < from) return false;
    if (to && date > to) return false;
    return true;
  });

  return (
    <div className="p-6 w-full">
      {/* Header & Filter */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Balance Sheet</h2>
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
      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="w-full table-auto text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Total Income</th>
              <th className="px-4 py-2">Total Expenses</th>
              <th className="px-4 py-2">Profit / Loss</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-400">
                  No data available.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => {
                const profitLoss = item.total_income - item.total_expense;
                const isProfit = profitLoss >= 0;
                return (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 text-blue-600 font-medium">
                      ₹ {item.total_income.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 py-2">
                      ₹ {item.total_expense.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          isProfit ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        ₹ {Math.abs(profitLoss).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BalanceSheet;
