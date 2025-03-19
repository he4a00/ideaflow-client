"use client";

import { useVerifyOTP } from "@/app/services/hooks/useVerifyOTP";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function VerifyOTPContent() {
  const [otp, setOTP] = useState("");

  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const { mutate: verifyOTP, isPending } = useVerifyOTP({ email, otp });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyOTP();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
        <div className="flex flex-col items-center space-y-2 pt-8">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 5.37258 5.37258 0 12 0H36C42.6274 0 48 5.37258 48 12V36C48 42.6274 42.6274 48 36 48H12C5.37258 48 0 42.6274 0 36V12Z"
              fill="#2563EB"
            />
            <path
              d="M0 12C0 5.37258 5.37258 0 12 0H36C42.6274 0 48 5.37258 48 12V36C48 42.6274 42.6274 48 36 48H12C5.37258 48 0 42.6274 0 36V12Z"
              stroke="#E5E7EB"
            />
          </svg>

          <h1 className="text-xl font-semibold text-center">
            Ready to continue resetting your password?!
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Please enter your OTP
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="otp" className="text-sm font-medium">
                OTP
              </label>
              <div className="relative">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#7C3AED] py-2 text-white font-medium hover:bg-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              disabled={isPending}
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function VerifyOTP() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOTPContent />
    </Suspense>
  );
}
