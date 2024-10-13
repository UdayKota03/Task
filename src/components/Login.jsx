import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailOrUsername === '' || password === '') {
      toast.error("Please fill in all fields!"); 
      return;
    }

    toast.success("Login successful!"); 
    setEmailOrUsername('');
    setPassword('');
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <ToastContainer /> 
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaUser className="text-gray-500 ml-2" />
            <input
              type="text"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaLock className="text-gray-500 ml-2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-between mb-4">
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</Link>
            <Link to="/signup" className="text-sm text-blue-500 hover:underline">Sign Up</Link>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Login
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
