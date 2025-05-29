import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiGrid,
  FiBox,
  FiTruck,
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiHeadphones,
  FiChevronDown,
  FiChevronUp,
  FiImage
} from 'react-icons/fi';

export default function Sidebar() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const location = useLocation(); // hook to detect current route

  const isActive = (to) => location.pathname === to;

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-40 transform transition-transform duration-300">
      <div className="flex flex-col justify-between h-full py-6">
        <div>
          <div className="flex items-center gap-2 px-6 mb-8">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            <span className="text-xl font-semibold text-gray-800">VARAHI</span>
          </div>

          <nav className="flex flex-col space-y-2 px-4 text-gray-700">
            <SidebarItem icon={<FiGrid />} label="Dashboard" to="/Admindashboard" isActive={isActive} />

            {/* Product Management with Dropdown */}
            <div>
              <button
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded ${
                  location.pathname.startsWith('/Category') ||
                  location.pathname.startsWith('/Productlist') ||
                  location.pathname.startsWith('/Inventory')
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FiBox />
                  Product Management
                </span>
                <span className="ml-auto">
                  {isProductDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>

              {isProductDropdownOpen && (
                <div className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                  <SidebarItem label="Categories" to="/Category" isActive={isActive} />
                  <SidebarItem label="Products" to="/Productlist" isActive={isActive} />
                  <SidebarItem label="Inventory" to="/Inventory" isActive={isActive} />
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

            <SidebarItem icon={<FiTruck />} label="Delivery Management" to="/side-bar/delivery" isActive={isActive} />
            <SidebarItem icon={<FiShoppingCart />} label="Orders" to="/side-bar/orders" isActive={isActive} />
            <SidebarItem icon={<FiUsers />} label="Customers" to="/Customerslist" isActive={isActive} />
            <SidebarItem icon={<FiDollarSign />} label="Finance" to="/Finance" isActive={isActive} />
            <SidebarItem icon={<FiImage />} label="Banners" to="/Banners-settings" isActive={isActive} />
            <SidebarItem icon={<FiSettings />} label="Setting" to="/side-bar/settings" isActive={isActive} />
          </nav>
        </div>


        <div className="px-6 text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-1">
            <FiHeadphones className="text-gray-700" />
            <span>contact us</span>
          </div>
          <p className="text-xs">info@rfchh.com</p>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, to, isActive }) {
  const active = isActive(to);

  return (
    <Link to={to}>
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
          active ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-sm font-medium">{label}</span>
      </div>
    </Link>
  );
}
