import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const handleAddOrUpdateCategory = () => {
    const trimmedName = categoryName.trim();
    if (trimmedName === "") return;

    if (editingId !== null) {
      setCategories(categories.map(cat =>
        cat.id === editingId ? { ...cat, name: trimmedName } : cat
      ));
      setEditingId(null);
    } else {
      setCategories([
        ...categories,
        { id: Date.now(), name: trimmedName },
      ]);
    }

    setCategoryName("");
  };

  const handleEdit = (cat) => {
    setCategoryName(cat.name);
    setEditingId(cat.id);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div className="p-8 bg-[#fafbfc] min-h-screen font-sans">
      <h2 className="text-2xl font-semibold mb-2">Add Category</h2>
      <div className="text-gray-400 text-sm mb-6">
        <button className="text-[#6c63ff] font-medium hover:underline" 
        onClick={() => navigate("/Admindashboard")}>
          Dashboard
        </button>
        <span className="mx-1">{'>'}</span>
        <span>Add Category</span>
      </div>

      <div className="bg-white rounded-lg p-6 mb-8 shadow-sm max-w-3xl">
        <h3 className="text-lg font-medium mb-4">
          {editingId ? "Edit Category" : "Add Category"}
        </h3>
        <input
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-base bg-[#fafbfc] mb-4 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
          type="text"
          placeholder="Type category name here. . ."
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          className="bg-[#6c63ff] hover:bg-[#554ee2] text-white px-7 py-2 rounded-md font-medium text-base transition"
          onClick={handleAddOrUpdateCategory}
        >
          {editingId ? "Update Category" : "Add Category"}
        </button>
      </div>

      {categories.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm max-w-3xl">
          <div className="flex items-center px-6 py-4 border-b border-gray-100 text-gray-400 font-semibold text-base">
            <input type="checkbox" className="mr-4" disabled />
            <span className="flex-1">Category</span>
            <span className="w-32 text-right">Action</span>
          </div>
          {categories.map((cat) => (
            <div
              className="flex items-center px-6 py-4 border-b border-gray-100 last:border-b-0"
              key={cat.id}
            >
              <input type="checkbox" className="mr-4" />
              <span className="flex-1 text-gray-700">{cat.name}</span>
              <span className="w-32 flex justify-end space-x-3">
                <button
                  title="Edit"
                  className="text-gray-400 hover:text-[#6c63ff]"
                  onClick={() => handleEdit(cat)}
                >
                  <FiEdit2 className="h-5 w-5" />
                </button>
                <button
                  title="Delete"
                  className="text-gray-400 hover:text-red-500"
                  onClick={() => handleDelete(cat.id)}
                >
                  <FiTrash2 className="h-5 w-5" />
                </button>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
