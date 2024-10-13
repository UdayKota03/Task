import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTitle = () => {
    switch (location.pathname) {
      case '/dashboard/profile':
        return 'Profile';
      case '/dashboard/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (location.pathname) {
      case '/dashboard':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard!</h2>
            <p className="text-gray-700">Here is a quick summary of your activity:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Total Matches: 5</li>
              <li>Interests Received: 10</li>
              <li>Interests Sent: 7</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Recent Activity</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>John Doe showed interest in your profile.</li>
              <li>You sent an interest to Jane Smith.</li>
              <li>Your profile was viewed 15 times this week.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">User Statistics</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-blue-100 p-4 rounded-lg shadow">
                <h4 className="font-bold">Total Users:</h4>
                <p>200</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow">
                <h4 className="font-bold">Active Users:</h4>
                <p>150</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow">
                <h4 className="font-bold">Profiles Liked:</h4>
                <p>75</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg shadow">
                <h4 className="font-bold">Profiles Disliked:</h4>
                <p>10</p>
              </div>
            </div>
          </div>
        );
      case '/dashboard/profile':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Profile Details</h2>
            <p className="mt-4">Here are your profile details...</p>
          </div>
        );
      case '/dashboard/settings':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p className="mt-4">Manage your account settings here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <aside className="w-full lg:w-64 bg-gray-800 text-white p-4 fixed h-full">
        <h2 className="text-xl font-bold mb-4 text-center">Zepto</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => `block py-2 px-4 rounded ${isActive ? 'bg-gray-700' : ''}`}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/dashboard/profile" 
                className={({ isActive }) => `block py-2 px-4 rounded ${isActive ? 'bg-gray-700' : ''}`}
              >
                Profile
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/dashboard/settings" 
                className={({ isActive }) => `block py-2 px-4 rounded ${isActive ? 'bg-gray-700' : ''}`}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-grow p-8 bg-gray-100 ml-64">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">{getTitle()}</h1>
          <div className="relative">
            <button
              onClick={toggleModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              User Profile
            </button>
          </div>
        </header>

        {renderContent()}
        <Outlet />

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-semibold mb-4">User Profile</h2>
              <p><strong>Name:</strong> Uday Kota</p>
              <p><strong>Email:</strong> udaykota4u@gmail.com</p>
              <p><strong>Joined:</strong> January 1, 2023</p>
              <button
                onClick={toggleModal}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
