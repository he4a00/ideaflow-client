"use client";

import { useResetPassword } from "@/app/services/hooks/useResetPassword";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function ResetPasswordContent() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const { mutate: resetPassword, isPending } = useResetPassword({
    password,
    confirmPassword,
    email,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
        <div className="flex flex-col items-center space-y-2 pt-8">
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
              <label htmlFor="password" className="text-sm font-medium">
                New Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Your New Password"
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Your New Password"
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#7C3AED] py-2 text-white font-medium hover:bg-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              disabled={isPending}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
