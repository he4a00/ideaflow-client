"use client";

import MindMapGenerator from "@/components/shared/MindMapGenerator";
import React from "react";

const GeneratePage = () => {
  // const router = useRouter();
  // const { user } = useUserContext();
  // if (!user) {
  //   router.push("/sign-in");
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <MindMapGenerator />
    </main>
  );
};

export default GeneratePage;
