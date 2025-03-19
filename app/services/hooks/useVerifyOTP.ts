import { useMutation } from "@tanstack/react-query";
import { verifyOTP } from "../api/user/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useVerifyOTP = ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) => {
  const router = useRouter();
  return useMutation({
    mutationFn: () => verifyOTP({ email, otp }),
    onSuccess: () => {
      toast("great, now you can reset your password.");
      router.push(`/reset-password?email=${encodeURIComponent(email)}`);
    },
  });
};
