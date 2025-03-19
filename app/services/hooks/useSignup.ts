"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Register } from "../api/user/userApi";
import { TSignUp } from "@/constants/types";

export const useSignup = ({ fullName, email, password }: TSignUp) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => Register({ fullName, email, password }),
    onSuccess: () => {
      router.push(`/sign-in`);
    },
  });
};