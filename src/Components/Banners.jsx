// import React, { useState, useEffect, useRef } from "react";
// import toast from "react-hot-toast";
// // import axiosInstance from "../Services/AxiosConfig";
// import { MdDeleteForever } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// import { LuSave } from "react-icons/lu";

// const Banners = () => {
//   const [formData, setFormData] = useState({
//     fileName: "",
//     file: null,
//     startDate: "",
//     endDate: "",
//     startTime: "",
//     endTime: "",
//   });

//   const [banners, setBanners] = useState([]);
//   const [editingRowId, setEditingRowId] = useState(null);
//   const fileInputRef = useRef(null);

//   const validate = () => {
//     let errors = {};
//     if (!formData.fileName) errors.fileName = "File name is required";
//     if (!formData.file) errors.file = "File is required";
//     if (!formData.startDate) errors.startDate = "Start date is required";
//     if (!formData.endDate) errors.endDate = "End date is required";
//     if (!formData.startTime) errors.startTime = "Start time is required";
//     if (!formData.endTime) errors.endTime = "End time is required";
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validate();
//     if (Object.keys(errors).length > 0) {
//       Object.values(errors).forEach((msg) => toast.error(msg));
//       return;
//     }

//     if (banners.length >= 5) {
//       toast.error("You can only upload up to 5 banners.");
//       return;
//     }

//     const { fileName, startDate, endDate, startTime, endTime, file } = formData;

//     const formatTime = (time) => {
//       const date = new Date(`1970-01-01T${time}`);
//       return date.toTimeString().slice(0, 5);
//     };

//     const postData = new FormData();
//     postData.append("fileName", fileName);
//     postData.append("startDate", startDate);
//     postData.append("endDate", endDate);
//     postData.append("startTime", formatTime(startTime));
//     postData.append("endTime", formatTime(endTime));
//     postData.append("file", file);

//     // try {
//     //   await axiosInstance.post(`banners/create`, postData, {
//     //     headers: {
//     //       Authorization: `Bearer ${localStorage.getItem("Token")}`,
//     //       "Content-Type": "multipart/form-data",
//     //     },
//     //   });

//       toast.success("Banner uploaded successfully");
//       setFormData({
//         fileName: "",
//         file: null,
//         startDate: "",
//         endDate: "",
//         startTime: "",
//         endTime: "",
//       });

//     //   if (fileInputRef.current) fileInputRef.current.value = "";
//     //   fetchBanners();
//     // } catch (error) {
//     //   console.error("Upload failed:", error);
//     //   toast.error(error.response?.data?.message || "Upload failed");
//     // }
//   };

//   const fetchBanners = async () => {
//     // try {
//     //   const response = await axiosInstance.get(`banners/getAll`);
//     //   setBanners(response.data.data || []);
//     // } catch (error) {
//     //   console.error("Error fetching banners:", error);
//     //   toast.error("Failed to fetch banners");
//     // }
//   };

//   const handleDelete = async (id) => {
//     // try {
//     //   await axiosInstance.delete(`banners/${id}`);
//     //   toast.success("Banner deleted successfully");
//     //   setBanners((prev) => prev.filter((b) => b.id !== id));
//     // } catch (error) {
//     //   console.error("Error deleting banner:", error);
//     //   toast.error("Failed to delete banner");
//     // }
//   };

// //   const handleEditToggle = (id) => {
// //     if (editingRowId === id) {
// //       handleEdit(id);
// //       setEditingRowId(null);
// //     } else {
// //       setEditingRowId(id);
// //     }
// //   };

//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const updated = [...banners];
//     updated[index][name] = value;
//     setBanners(updated);
//   };

// //   const handleEdit = async (id) => {
// //     const bannerToUpdate = banners.find((b) => b.id === id);
// //     // try {
// //     //   await axiosInstance.patch(`banners/update/${id}`, {
// //     //     startDate: bannerToUpdate.startDate,
// //     //     endDate: bannerToUpdate.endDate,
// //     //     startTime: bannerToUpdate.startTime,
// //     //     endTime: bannerToUpdate.endTime,
// //     //   });
// //     //   toast.success("Banner updated successfully");
// //     //   fetchBanners();
// //     // } catch (error) {
// //     //   console.error("Error updating banner:", error);
// //     //   toast.error("Failed to update banner");
// //     // }
// //   };

//   useEffect(() => {
//     fetchBanners();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-6">Banners</h1>

//       <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
//         <div>
//           <label className="block mb-1 font-medium">File Name</label>
//           <input
//             type="text"
//             name="fileName"
//             value={formData.fileName}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             placeholder="Enter file name"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Upload File</label>
//           <input
//             type="file"
//             name="file"
//             onChange={handleChange}
//             ref={fileInputRef}
//             className="w-full border rounded px-3 py-2"
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1 font-medium">Start Date</label>
//             <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//           </div>
//           <div>
//             <label className="block mb-1 font-medium">End Date</label>
//             <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//           </div>
//           <div>
//             <label className="block mb-1 font-medium">Start Time</label>
//             <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//           </div>
//           <div>
//             <label className="block mb-1 font-medium">End Time</label>
//             <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//           </div>
//         </div>

//         <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
//           Submit
//         </button>
//       </form>

//       <h2 className="text-xl font-semibold mt-8 mb-4">Banners List</h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-[700px] w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-3 py-2">File Name</th>
//               <th className="border px-3 py-2">Start Date</th>
//               <th className="border px-3 py-2">End Date</th>
//               <th className="border px-3 py-2">Start Time</th>
//               <th className="border px-3 py-2">End Time</th>
//               <th className="border px-3 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {banners.map((banner, index) => (
//               <tr key={banner.id}>
//                 <td className="border px-2 py-1">{banner.fileName}</td>
//                 <td className="border px-2 py-1">
//                   <input type="date" name="startDate" value={banner.startDate} onChange={(e) => handleInputChange(e, index)} disabled={editingRowId !== banner.id} className="w-full" />
//                 </td>
//                 <td className="border px-2 py-1">
//                   <input type="date" name="endDate" value={banner.endDate} onChange={(e) => handleInputChange(e, index)} disabled={editingRowId !== banner.id} className="w-full" />
//                 </td>
//                 <td className="border px-2 py-1">
//                   <input type="time" name="startTime" value={banner.startTime} onChange={(e) => handleInputChange(e, index)} disabled={editingRowId !== banner.id} className="w-full" />
//                 </td>
//                 <td className="border px-2 py-1">
//                   <input type="time" name="endTime" value={banner.endTime} onChange={(e) => handleInputChange(e, index)} disabled={editingRowId !== banner.id} className="w-full" />
//                 </td>
//                 <td className="border px-2 py-1 text-center">
//                   <button onClick={() => handleEditToggle(banner.id)} className={`${editingRowId === banner.id ? 'text-green-600' : 'text-blue-600'} mr-2`}>
//                     {editingRowId === banner.id ? <LuSave /> : <FaEdit />}
//                   </button>
//                   <button onClick={() => handleDelete(banner.id)} className="text-red-600">
//                     <MdDeleteForever />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Banners;

import React, { useState, useRef } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { LuSave } from "react-icons/lu";

const AdminPost = () => {
  const [formData, setFormData] = useState({
    fileName: "",
    file: null,
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });

  const [banners, setBanners] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validate = () => {
    const { fileName, file, startDate, endDate, startTime, endTime } = formData;
    const errors = {};
    if (!fileName) errors.fileName = "File name is required";
    if (!file) errors.file = "File is required";
    if (!startDate) errors.startDate = "Start date is required";
    if (!endDate) errors.endDate = "End date is required";
    if (!startTime) errors.startTime = "Start time is required";
    if (!endTime) errors.endTime = "End time is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors).join("\n"));
      return;
    }

    if (banners.length >= 5) {
      alert("You can only add up to 5 banners.");
      return;
    }

    const newBanner = {
      id: Date.now(),
      ...formData,
    };

    setBanners((prev) => [...prev, newBanner]);

    setFormData({
      fileName: "",
      file: null,
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDelete = (id) => {
    setBanners((prev) => prev.filter((b) => b.id !== id));
  };

  const handleEditToggle = (id) => {
    if (editingId === id) {
      setEditingId(null);
    } else {
      setEditingId(id);
    }
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    setBanners((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              [name]: value,
            }
          : b
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Banners (Local Demo)</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block mb-1 font-medium">File Name</label>
          <input
            type="text"
            name="fileName"
            value={formData.fileName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter file name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload File</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            ref={fileInputRef}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Add Banner
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-8 mb-4">Banners List</h2>

      {banners.length === 0 ? (
        <p>No banners added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">File Name</th>
                <th className="border px-3 py-2">Start Date</th>
                <th className="border px-3 py-2">End Date</th>
                <th className="border px-3 py-2">Start Time</th>
                <th className="border px-3 py-2">End Time</th>
                <th className="border px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner.id}>
                  <td className="border px-2 py-1">{banner.fileName}</td>
                  <td className="border px-2 py-1">
                    <input
                      type="date"
                      name="startDate"
                      value={banner.startDate}
                      onChange={(e) => handleInputChange(e, banner.id)}
                      disabled={editingId !== banner.id}
                      className="w-full"
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="date"
                      name="endDate"
                      value={banner.endDate}
                      onChange={(e) => handleInputChange(e, banner.id)}
                      disabled={editingId !== banner.id}
                      className="w-full"
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="time"
                      name="startTime"
                      value={banner.startTime}
                      onChange={(e) => handleInputChange(e, banner.id)}
                      disabled={editingId !== banner.id}
                      className="w-full"
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="time"
                      name="endTime"
                      value={banner.endTime}
                      onChange={(e) => handleInputChange(e, banner.id)}
                      disabled={editingId !== banner.id}
                      className="w-full"
                    />
                  </td>
                  <td className="border px-2 py-1 text-center">
                    <button
                      onClick={() => handleEditToggle(banner.id)}
                      className={`${editingId === banner.id ? "text-green-600" : "text-blue-600"} mr-2`}
                    >
                      {editingId === banner.id ? <LuSave /> : <FaEdit />}
                    </button>
                    <button onClick={() => handleDelete(banner.id)} className="text-red-600">
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPost;
