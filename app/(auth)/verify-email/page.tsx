"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "@/lib/api/auth";
import { ApiError } from "@/lib/api-client";
import { AlertCircle } from "lucide-react";

const VerifyEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste if value length > 1
      if (value.length === 6) {
        setCode(value.split(""));
        document.getElementById(`code-5`)?.focus();
      }
      return;
    }
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value !== "" && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const data = e.clipboardData.getData("text").slice(0, 6);
    if (data.length === 6 && /^\d+$/.test(data)) {
      setCode(data.split(""));
      document.getElementById("code-5")?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is missing. Please sign up again.");
      return;
    }
    setLoading(true);
    setError(null);
    const joinedCode = code.join("");
    try {
      await authApi.verifyEmail({ email, code: joinedCode });
      router.push("/verify-success");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.data?.message || "Invalid or expired code");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      await authApi.resendVerification(email);
      // Optional: Add a "Code resent" success message
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.data?.message || "Failed to resend code");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Verify Email</h1>
        <p className="text-sm text-gray-500">We&apos;ve sent a 6-digit code to your email.</p>
      </div>

      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 animate-in fade-in slide-in-from-top-2 duration-300">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleVerify} className="space-y-6">
        <div className="flex justify-between gap-2">
          {code.map((digit, i) => (
            <input
              key={i}
              id={`code-${i}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
              className="w-12 h-14 text-center text-xl font-bold bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe5933]/20 focus:border-[#fe5933] transition-all"
            />
          ))}
        </div>
        
        <button
          type="submit"
          disabled={loading || code.some(d => d === "")}
          className="w-full py-3 px-4 bg-[#fe5933] hover:bg-[#e44d2a] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#fe5933]/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Verifying..." : "Verify email"}
        </button>
      </form>

      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600">Didn&apos;t receive the code?</p>
        <button
          onClick={handleResend}
          disabled={loading}
          className="text-sm font-bold text-[#fe5933] hover:underline disabled:opacity-50"
        >
          Resend code
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
