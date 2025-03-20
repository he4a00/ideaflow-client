"use client";

import { useUserContext } from "@/app/context/UserContext";
import MindMapGenerator from "@/components/shared/MindMapGenerator";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const GeneratePage = () => {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [router, user]);

  if (user === undefined) {
    return <p>Loading...</p>;
  }

  if (user === null) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <MindMapGenerator />
    </main>
  );
};

export default GeneratePage;
