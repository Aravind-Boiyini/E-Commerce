import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiGrid,
  FiBox,
  FiTruck,
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiHeadphones,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';

export default function Sidebar() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-40 transform transition-transform duration-300">
        <div className="flex flex-col justify-between h-full py-6">
          <div>
            <div className="flex items-center gap-2 px-6 mb-8">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              <span className="text-xl font-semibold text-gray-800">VARAHI</span>
            </div>

            <nav className="flex flex-col space-y-1 px-4 text-gray-700">
              <SidebarItem icon={<FiGrid />} label="Dashboard" to="/Admindashboard" />

              {/* Product Management with Dropdown */}
              <div>
                <button
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                  className="flex items-center w-full px-2 py-2 text-sm font-medium rounded hover:bg-gray-100 focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    <FiBox />
                    Product Management
                  </span>
                  <span className="ml-auto">
                    {isProductDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>

                {/* Dropdown links */}
                {isProductDropdownOpen && (
                  <div className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <SidebarItem label="Categories" to="/Category" />
                    <SidebarItem label="Products" to="/ProductList" />
                    <SidebarItem label="Inventory" to="/Inventory" />
                  </div>
                )}
              </div>

              <SidebarItem icon={<FiTruck />} label="Delivery Management" to="/DeliveryManagement" />
              <SidebarItem icon={<FiShoppingCart />} label="Orders" to="/OrderManagement" />
              <SidebarItem icon={<FiUsers />} label="Customers" to="/side-bar/customers" />
              <SidebarItem icon={<FiDollarSign />} label="Finance" to="/side-bar/finance" />
              <SidebarItem icon={<FiSettings />} label="Setting" to="/side-bar/settings" />
            </nav>
          </div>

          {/* Bottom Contact Section */}
          <div className="px-6 text-sm text-gray-500">
            <div className="flex items-center gap-2 mb-1">
              <FiHeadphones className="text-gray-700" />
              <span>contact us</span>
            </div>
            <p className="text-xs">info@rfchh.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarItem({ icon, label, to }) {
  return (
    <Link to={to}>
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100`}
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-sm font-medium">{label}</span>
      </div>
    </Link>
  );
}
