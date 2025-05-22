import React, { useState, useRef } from 'react';

const ProfileSetting = () => {
  const [profile, setProfile] = useState({
    logo: null,
    businessName: '',
    contactNumber: '',
    mailId: '',
    address: '',
    instagram: '',
    facebook: '',
    youtube: '',
    whatsapp: '',
  });

  // Ref for hidden file input
  const fileInputRef = useRef(null);

  // Handle text and URL inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input (logo)
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({
        ...prev,
        logo: file,
      }));
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data:', profile);

    // Add API call here
  };
  const inputStyle =
    'w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500';

  return (
    <form onSubmit={handleSubmit} className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Profile</h2>
          <nav className="text-sm text-gray-500">
            <span className="text-indigo-600 cursor-pointer">Dashboard</span> &gt; Profile Setting
          </nav>
        </div>
      </div>

      {/* Logo Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
        <div
          className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 cursor-pointer overflow-hidden"
          onClick={() => fileInputRef.current.click()}
        >
          {profile.logo ? (
            <img
              src={URL.createObjectURL(profile.logo)}
              alt="logo"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 text-xl font-bold">+</span>
          )}
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={fileInputRef}
          onChange={handleLogoChange}
          className="hidden"
        />
      </div>

      {/* Profile Information */}
      <div className="bg-white p-10 rounded-md shadow border mb-10 max-w-screen-lg">
        <h3 className="text-md font-semibold mb-4">Profile Information</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
          <input
            type="text"
            name="businessName"
            placeholder="Enter the business name"
            className={inputStyle}
            value={profile.businessName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Enter contact number"
            className={inputStyle}
            value={profile.contactNumber}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="mailId"
            placeholder="Enter mail id"
            className={inputStyle}
            value={profile.mailId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            className={inputStyle}
            value={profile.address}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white p-6 rounded-md shadow border mb-6 max-w-screen-lg">
        <h3 className="text-md font-semibold mb-4">Social Media Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="url"
            name="instagram"
            placeholder="Instagram link"
            className={inputStyle}
            value={profile.instagram}
            onChange={handleInputChange}
          />
          <input
            type="url"
            name="facebook"
            placeholder="Facebook link"
            className={inputStyle}
            value={profile.facebook}
            onChange={handleInputChange}
          />
          <input
            type="url"
            name="youtube"
            placeholder="Youtube link"
            className={inputStyle}
            value={profile.youtube}
            onChange={handleInputChange}
          />
          <input
            type="url"
            name="whatsapp"
            placeholder="Whatsapp link"
            className={inputStyle}
            value={profile.whatsapp}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="text-left">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileSetting;
