import React, { useRef, useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-3 bg-white shadow-md">
      
      <div className="flex items-center ml-10">
        <img
          src="./src/assets/logo1.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>
      {/* Profile dropdown on the right */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-1 pr-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src="./src/assets/images.jpeg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover aspect-square"
          />
          <FiChevronDown className="w-5 h-5" />
        </div>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100"
             onClick={() => navigate("/profile-Setting")}>
              My Profile
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => navigate("/")}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;