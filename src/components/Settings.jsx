import React, { useState } from 'react';

const Settings = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSave = () => {
    console.log('Settings saved:', { email, password, notificationsEnabled });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Settings</h2>
      <p className="mt-4">Manage your account settings here.</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Account Information</h3>
        <div className="mt-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a new password"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Notifications</h3>
        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="mr-2"
            />
            Enable notifications
          </label>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
