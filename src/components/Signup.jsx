import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match!");
        return;
    }

    toast.success("Signup successful!"); 
    setTimeout(() => {
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        navigate('/dashboard');
    }, 1000);
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaUser className="text-gray-500 ml-2" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaEnvelope className="text-gray-500 ml-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaLock className="text-gray-500 ml-2" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaLock className="text-gray-500 ml-2" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div>
            <Link to="/login">
              <p className='pb-2 hover:text-blue-500 text-center'>Already Have an account? <span className=''>Login</span></p>
            </Link>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Sign Up
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

export default Signup;
