import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
