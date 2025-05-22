import { useState, useRef } from 'react';

export default function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ''); // Allow digits only
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    console.log('Verifying OTP:', enteredOtp);
    // Add your verification logic here
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

      {/* Right: OTP Form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-8 relative">
        {/* Top-left brand heading */}
        <h1 className="absolute top-8 left-8 text-2xl font-semibold">
          Varahi <span className="text-red-500">Saree Collections</span>
        </h1>
        <div className="w-full max-w-md mt-20">
          <h2 className="text-2xl font-bold mb-2">Verify Code</h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your 4 digits of code to reset your Password
          </p>

          <form onSubmit={handleVerify} className="space-y-6">
            <div className="flex justify-between space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                  className="w-12 h-12 border rounded text-center text-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
