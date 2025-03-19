import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "../api/user/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useForgetPassword = (email: string) => {
  const router = useRouter();
  return useMutation({
    mutationFn: () => forgetPassword({ email }),
    onSuccess: () => {
      toast("OTP sent successfully, please check your email.");
      router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
    },
  });
};
