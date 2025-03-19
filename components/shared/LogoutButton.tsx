import React from "react";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const logout = () => {
    localStorage.removeItem("user");
  };
  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
