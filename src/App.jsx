import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Signin/Login";
import ForgotPassword from "./Components/Signin/ForgotPassword";
import VerifyCode from "./Components/Signin/VerifyCode";

import Navbar from "./Components/Dashboard/Navbar";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import ProfileSetting from "./Components/Profile/ProfileSettings";
import Category from "./Components/Product Management/Category";
import Sidebar from "./Components/Dashboard/Sidebar";
import DeliveryManagement from "./Components/DeliveryManagement/DeliveryManagement";

function AppContent() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
  const showNavbarAndSidebar =
    location.pathname !== "/" &&
    location.pathname !== "/forgot-password" &&
    location.pathname !== "/verify-code";

  return (
    <>
      {showNavbarAndSidebar && (
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      )}
      {showNavbarAndSidebar && (
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      )}

      <div
        className={`${
          showNavbarAndSidebar ? "md:ml-60" : ""
        } flex-1 bg-gray-50 pt-16 px-4 transition-all duration-300 min-h-screen`}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/Admindashboard" element={<AdminDashboard />} />
          <Route path="/profile-Setting" element={<ProfileSetting />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/DeliveryManagement" element={<DeliveryManagement />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
