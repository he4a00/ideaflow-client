import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../api/user/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useResetPassword = ({
  password,
  confirmPassword,
  email,
}: {
  password: string;
  confirmPassword: string;
  email: string;
}) => {
  const router = useRouter();
  return useMutation({
    mutationFn: () => resetPassword({ password, confirmPassword, email }),
    onSuccess: () => {
      toast("great, your password has been reset!");
      router.push("/sign-in");
    },
  });
};
