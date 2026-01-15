"use client";
import React from "react";
import Link from "next/link";

const Signup = ({setLogin}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2 mb-6">
          Sign up to get started
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full  text-gray-900 mb-3 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full text-gray-900 mb-3 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full text-gray-900 mb-3 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full text-gray-900 mb-4 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            <button className="cursor-pointer" onClick={() => setLogin(true)}>Login</button>
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;
