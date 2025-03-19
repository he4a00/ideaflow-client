import { TSignIn, TSignUp } from "@/constants/types";
import api from "@/lib/api";

export const Register = async ({ fullName, email, password }: TSignUp) => {
  const { data } = await api.post("/Account/register-Client", {
    fullName,
    email,
    password,
  });
  return data;
};

export const Login = async ({ email, password }: TSignIn) => {
  const { data } = await api.post("/Account/login", {
    email,
    password,
  });
  return data;
};


export const forgetPassword = async ({ email }: { email: string }) => {
  const { data } = await api.post("/Account/forgotPassword", { email });
  return data;
};

export const verifyOTP = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) => {
  const { data } = await api.post("/Account/verify-otp", { email, otp });
  return data;
};

export const resetPassword = async ({
  password,
  confirmPassword,
  email,
}: {
  password: string;
  confirmPassword: string;
  email: string;
}) => {
  const { data } = await api.post("/Account/resetPassword", {
    password,
    confirmPassword,
    email,
  });
  return data;
};

