// src/Login.jsx
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="flex min-h-screen ">
      {/* Left: Image and Quote */}
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/src/assets/login.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-10">
          <div className="bg-white bg-opacity-10 backdrop-blur-md text-white p-10 pt-10  rounded-lg text-center">
            <h2 className="text-xl font-medium">
              Empowered by Vaarahi, embrace your unique style.
            </h2>
            <p className="mt-2">
              Dress with strength, shine with divine confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-8 relative">
        {/* Top-left brand heading */}
        <h1 className="absolute top-8 left-8 text-2xl font-semibold">
          Varahi <span className="text-red-500">Saree Collections</span>
        </h1>
        <div className="w-full max-w-md mt-20">
          <h2 className="mt-6 text-xl font-bold">Log in</h2>
          <p className="text-sm text-gray-500 mb-4">
            Enter your credentials to access your account
          </p>

          <form className="space-y-4">
            {/* Username */}
            <div>
              <label className="text-sm font-medium">User Name</label>
              <input
                type="text"
                placeholder="enter user name"
                className="mt-1 w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  className="mt-1 w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <div
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </div>
              </div>
              <div className="text-right mt-1">
                <button
                  type="button"
                  className="text-blue-500 text-sm underline"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition" onClick={() => navigate("/Admindashboard")}
            >
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
