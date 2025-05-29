import React, { useState } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ name: '', date: '', amount: '', description: '' });
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSave = () => {
    if (editingIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editingIndex] = formData;
      setExpenses(updatedExpenses);
      setEditingIndex(null);
    } else {
      setExpenses([...expenses, formData]);
    }
    setShowForm(false);
    setFormData({ name: '', date: '', amount: '', description: '' });
  };

  const handleEdit = (index) => {
    setFormData(expenses[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
  };

  return (
    <div className="w-full p-6">
      {/* Top controls */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Expenses Information</h2>
        <div className="flex flex-wrap gap-2 items-center">
          <div>
            <label className="text-sm text-gray-600">From Date</label><br />
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">To Date</label><br />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <button
            onClick={() => {
              setFormData({ name: '', date: '', amount: '', description: '' });
              setEditingIndex(null);
              setShowForm(true);
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded self-end"
          >
            Create Expenses
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Expenses Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">₹ {parseFloat(item.amount).toFixed(2)}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4">
              {editingIndex !== null ? 'Edit Expense' : 'Enter the Expenses Details'}
            </h3>
            <input
              className="w-full mb-2 border p-2"
              placeholder="Type the expense name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="date"
              className="w-full mb-2 border p-2"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <input
              type="number"
              className="w-full mb-2 border p-2"
              placeholder="₹"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
            <textarea
              className="w-full mb-4 border p-2"
              placeholder="1 - 100 characters"
              maxLength={100}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingIndex(null);
                }}
                className="text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-purple-600 text-white px-4 py-1 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
