"use client";
import React from "react";
import Link from "next/link";

const Loginup = ({setLogin}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-500">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2 mb-6">
          Login to your account
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4  text-gray-900 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full text-gray-900 mb-4 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button 
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Login
        </button>
        

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            <button className="cursor-pointer"
            onClick={() => setLogin(false)}> Signup</button>
          </span>
        </p>

      </div>
    </div>
  );
};

export default Loginup;
