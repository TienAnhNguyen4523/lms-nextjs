"use client";

import React, { useState } from "react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
            <div className="bg-green-100 p-4 rounded-full">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Check your email</h1>
          <p className="text-sm text-gray-500">We&apos;ve sent a password reset link to your email address.</p>
        </div>
        <Link
          href="/sign-in"
          className="block w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold transition-all shadow-lg"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
        <p className="text-sm text-gray-500">No worries, we&apos;ll send you reset instructions.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="name@company.com"
            required
            className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe5933]/20 focus:border-[#fe5933] transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-[#fe5933] hover:bg-[#e44d2a] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#fe5933]/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Sending link..." : "Reset password"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Remember your password?{" "}
        <Link href="/sign-in" className="font-bold text-[#fe5933] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
