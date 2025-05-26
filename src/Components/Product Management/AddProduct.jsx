import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    status: "Publish",
    color: "",
    sizes: "",
    clothType: "",
    basePrice: "",
    quantity: "",
    delivery: "",
  });

  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) return;
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  const handleImageDelete = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || images.length === 0) {
      alert("Please fill required fields and upload at least one image.");
      return;
    }

    const newProduct = {
      id: uuidv4(), // Unique ID
      ...formData,
      images,
    };

    const existing = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem("products", JSON.stringify([...existing, newProduct]));
    navigate("/Productlist");
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate("/Productlist")}
          className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <h1 className="text-2xl font-semibold">Add Product</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">General Information</h2>
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows="4"
            />
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Media</h2>
            <div className="border-2 border-dashed p-6 rounded text-center cursor-pointer">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
              <p className="text-blue-500">Drag and drop or click to add up to 5 images</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative w-24 h-24">
                  <img src={img} alt="preview" className="w-full h-full object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => handleImageDelete(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded px-1"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Pricing & Inventory</h2>
            <input
              type="text"
              name="basePrice"
              placeholder="₹ enter base price per unit"
              value={formData.basePrice}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                name="quantity"
                placeholder="Available Quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="delivery"
                placeholder="Estimated Delivery"
                value={formData.delivery}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Category</h2>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select a category</option>
              <option value="Clothes">Clothes</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Status</h2>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="Publish">Publish</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Variation</h2>
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={formData.color}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="text"
              name="sizes"
              placeholder="Available Sizes"
              value={formData.sizes}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="text"
              name="clothType"
              placeholder="Type of Cloth"
              value={formData.clothType}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
