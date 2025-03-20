/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Register } from "../api/user/userApi";
import { TSignUp } from "@/constants/types";
import { toast } from "sonner";

export const useSignup = ({ fullName, email, password }: TSignUp) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => Register({ fullName, email, password }),
    onSuccess: () => {
      router.push(`/sign-in`);
    },
    onError: (error: any) => {
      if (error.status) {
        toast(
          "Passwords must have at least one non alphanumeric character., Passwords must have at least one lowercase ('a'-'z')., Passwords must have at least one uppercase ('A'-'Z')"
        );
      }
    },
  });
};
