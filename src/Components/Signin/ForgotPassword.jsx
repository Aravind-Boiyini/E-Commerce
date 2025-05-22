import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import BackButton from '../BackButton';

export default function ForgotPassword() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Add your OTP logic here
    console.log('OTP sent to:', phone); 
    navigate("/verify-code"); 
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Image and Quote */}
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/src/assets/login.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-10">
          <div className="bg-white bg-opacity-10 backdrop-blur-md text-white p-10 pt-10 rounded-lg text-center">
            <h2 className="text-xl font-medium">
              Empowered by Varahi, embrace your unique style.
            </h2>
            <p className="mt-2">
              Dress with strength, shine with divine confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Forgot Password Form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-8 relative">
        {/* Top-left brand heading */}
        <h1 className="absolute top-8 left-8 text-2xl font-semibold">
          Varahi <span className="text-red-500">Saree Collections</span>
        </h1>
        {/* Back button under the heading */}
        <div className="absolute top-20 left-8">
          <BackButton />
        </div>
        <div className="w-full max-w-md mt-20">
          <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your credentials to Recover your Password
          </p>
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <div className="flex items-center mt-1 border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <MdOutlinePhoneAndroid className="text-gray-500 mr-2" />
                <input
                  type="tel"
                  placeholder="enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
