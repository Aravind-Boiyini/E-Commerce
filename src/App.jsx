import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import ProductList from "./Components/Product Management/ProductList";
import AddProduct from "./Components/Product Management/AddProduct";
import Finance from "./Components/Finance/Finance";
import Customers from "./Components/Customers";
import Inventory from "./Components/Product Management/Inventory";
import Banners from "./Components/Banners";


function AppContent({ products, setProducts }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // const [products, setProducts] = useState([]);

  
  const showNavbarAndSidebar =
    location.pathname !== "/" &&
    location.pathname !== "/forgot-password" &&
    location.pathname !== "/verify-code";

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product]);
    navigate("/Productlist");
  };

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
          <Route path="/OrderManagement" element={<DeliveryManagement />} />

          <Route path="/Productlist"
            element={<ProductList products={products} />}
          />
          <Route
            path="/addproduct"
            element={
              <AddProduct
                onSave={handleAddProduct}
                onCancel={() => navigate("/Productlist")}
              />
            }
          />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Customerslist" element={<Customers/>} />
          <Route path="/Finance" element={<Finance/>} />
          <Route path="/Banners-settings" element={<Banners/>} />
          
        </Routes>
      </div>
    </>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  return (
    <Router>
      <AppContent products={products} setProducts={setProducts} />
    </Router>
  );
}

export default App;
