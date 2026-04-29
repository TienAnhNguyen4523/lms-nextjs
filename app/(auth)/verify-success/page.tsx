"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const VerifySuccessPage = () => {
  return (
    <div className="space-y-8 text-center py-4">
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl opacity-50 scale-150 animate-pulse" />
          <CheckCircle2 className="w-20 h-20 text-green-500 relative animate-in zoom-in duration-500" />
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Verification Successful!
        </h1>
        <p className="text-gray-500 max-w-[280px] mx-auto text-sm leading-relaxed">
          Your account has been activated. You can now access all features of our platform.
        </p>
      </div>

      <div className="pt-4">
        <Link
          href="/sign-in"
          className="inline-flex items-center justify-center w-full py-3.5 px-6 bg-[#fe5933] hover:bg-[#e44d2a] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#fe5933]/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          Sign In to Your Account
        </Link>
      </div>
      
      <p className="text-xs text-gray-400">
        Redirecting you to sign in...
      </p>
    </div>
  );
};

export default VerifySuccessPage;
