"use client";

import { useUserContext } from "@/app/context/UserContext";
import { redirect } from "next/navigation";
import React from "react";

const Profile = () => {
  const { user } = useUserContext();
  if (!user) {
    redirect("/");
  }
  return <></>;
};

export default Profile;
