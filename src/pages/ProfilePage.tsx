import React, { useState, useRef } from 'react';
import { User, Camera, Mail, Lock, Edit2, Save, X, Eye, EyeOff } from 'lucide-react';

const ProfilePage: React.FC = () => {
  // User data state
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Digital marketing specialist with 5+ years of experience in content creation and social media management.',
    location: 'New York, USA',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2023'
  });

  // Profile image state
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit states
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [editName, setEditName] = useState(userData.name);
  const [editBio, setEditBio] = useState(userData.bio);

  // Password states
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // Handle profile image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Save name changes
  const saveName = () => {
    setUserData({ ...userData, name: editName });
    setIsEditingName(false);
  };

  // Save bio changes
  const saveBio = () => {
    setUserData({ ...userData, bio: editBio });
    setIsEditingBio(false);
  };

  // Handle password change
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');

    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    // Here you would typically call an API to update the password
    console.log('Password updated successfully');
    
    // Reset form and close
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setIsChangingPassword(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Profile Header */}
        <div className="relative h-48 bg-gradient-to-r from-red-500 to-red-700">
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={64} className="text-gray-400" />
                )}
              </div>
              <button 
                onClick={triggerFileInput}
                className="absolute bottom-0 right-0 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Upload profile picture"
              >
                <Camera size={18} />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*"
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              {isEditingName ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="text-2xl font-bold border-b-2 border-red-500 focus:outline-none bg-transparent"
                    autoFocus
                  />
                  <button 
                    onClick={saveName}
                    className="text-green-500 hover:text-green-600"
                    aria-label="Save name"
                  >
                    <Save size={20} />
                  </button>
                  <button 
                    onClick={() => {
                      setEditName(userData.name);
                      setIsEditingName(false);
                    }}
                    className="text-gray-500 hover:text-gray-600"
                    aria-label="Cancel editing"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
                  <button 
                    onClick={() => setIsEditingName(true)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Edit name"
                  >
                    <Edit2 size={16} />
                  </button>
                </div>
              )}
              <div className="flex items-center mt-1 text-gray-500">
                <Mail size={16} className="mr-2" />
                <span>{userData.email}</span>
              </div>
            </div>
            <button 
              onClick={() => setIsChangingPassword(true)}
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              <Lock size={16} />
              <span>Change Password</span>
            </button>
          </div>

          {/* Bio Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-gray-700">About Me</h2>
              {!isEditingBio ? (
                <button 
                  onClick={() => setIsEditingBio(true)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Edit bio"
                >
                  <Edit2 size={16} />
                </button>
              ) : null}
            </div>
            {isEditingBio ? (
              <div className="space-y-2">
                <textarea
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={4}
                  autoFocus
                />
                <div className="flex justify-end space-x-2">
                  <button 
                    onClick={() => {
                      setEditBio(userData.bio);
                      setIsEditingBio(false);
                    }}
                    className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={saveBio}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">{userData.bio}</p>
            )}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-700">Contact Information</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Email:</span>
                  <span className="text-gray-800">{userData.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Phone:</span>
                  <span className="text-gray-800">{userData.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Location:</span>
                  <span className="text-gray-800">{userData.location}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-700">Account Information</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Member since:</span>
                  <span className="text-gray-800">{userData.joinDate}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Status:</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {isChangingPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Change Password</h2>
              <button 
                onClick={() => setIsChangingPassword(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              
              {passwordError && (
                <div className="text-red-500 text-sm">{passwordError}</div>
              )}
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsChangingPassword(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;