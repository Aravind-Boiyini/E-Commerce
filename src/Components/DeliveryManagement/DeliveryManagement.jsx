import React from 'react';
import { FaCalendarAlt, FaChevronRight, FaPlus } from 'react-icons/fa';

const orders = Array(8).fill({
  orderId: "#302012",
  productTitle: "Pattu Saree",
  productImage: "/src/assets/login.png",
  orderDate: "02/05/2025",
  customerId: "#302012",
  customerName: "Naveen",
  shippingAddress: {
    name: "John Bushmill",
    email: "Johnb@mail.com"
  },
  quantity: 2,
  value: "₹ 1200.00",
  paymentMode: "Mastercard",
  deliveryId: "-",
});

 function DeliveryManagement() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
        <span className="hover:underline cursor-pointer">Dashboard</span>
        <FaChevronRight size={12} />
        <span className="font-medium text-gray-700">Delivery Management</span>
      </div>

      {/* Filter Controls */}
      <div className="flex gap-3 items-center mb-4">
        <select className="border rounded px-4 py-2 text-sm">
          <option>2025</option>
        </select>
        <select className="border rounded px-4 py-2 text-sm">
          <option>12 Months</option>
        </select>
        <select className="border rounded px-4 py-2 text-sm">
          <option>30 Days</option>
        </select>
        <button className="ml-auto flex gap-2 items-center border rounded px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
          <FaCalendarAlt size={14} />
          Select Dates
        </button>
      </div>

      {/* Data Table */}
      <div className="overflow-auto rounded-lg shadow border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {[
                "Order ID", "Product Title", "Order Date", "Customer ID", "Customer Name",
                "Shipping Address", "Order Quantity", "Order Value", "Mode of Payment",
                "Delivery ID", "Action"
              ].map(header => (
                <th key={header} className="px-4 py-2 whitespace-nowrap">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 text-blue-600 cursor-pointer">{order.orderId}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={order.productImage} alt="" className="w-8 h-8 rounded" />
                  {order.productTitle}
                </td>
                <td className="px-4 py-2">{order.orderDate}</td>
                <td className="px-4 py-2 text-blue-600 cursor-pointer">{order.customerId}</td>
                <td className="px-4 py-2">{order.customerName}</td>
                <td className="px-4 py-2">
                  <div>{order.shippingAddress.name}</div>
                  <div className="text-gray-500 text-xs">{order.shippingAddress.email}</div>
                </td>
                <td className="px-4 py-2">{order.quantity}</td>
                <td className="px-4 py-2">{order.value}</td>
                <td className="px-4 py-2">{order.paymentMode}</td>
                <td className="px-4 py-2">{order.deliveryId}</td>
                
                <td className="px-4 py-2 flex gap-1">
                  <button className="text-green-600 bg-green-100 px-3 py-1 rounded text-xs">Accept</button>
                  <button className="text-red-600 bg-red-100 px-3 py-1 rounded text-xs">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-700"
          >
            {n}
          </button>
        ))}
        <button className="w-8 h-8 rounded-full bg-purple-600 text-white text-sm flex items-center justify-center">
          <FaPlus size={14} />
        </button>
      </div>
    </div>
  );
}
export default DeliveryManagement;