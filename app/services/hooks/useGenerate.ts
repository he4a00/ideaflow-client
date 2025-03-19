/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMutation } from "@tanstack/react-query";
import { generateResponse } from "../api/generate/generateApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useGenerate = ({
  prompt,
  modelOption,
}: {
  prompt: string;
  modelOption: number;
}) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => generateResponse({ prompt, modelOption }),
    onSuccess: (data) => {
      const encodedData = encodeURIComponent(JSON.stringify(data.result));
      router.push(`/mindmap?data=${encodedData}`);
    },
    onError: (error: any) => {
      if (error.response?.status === 500) {
        toast(
          "There was an error related to the servers of the AI model, please try again later."
        );
      }
    },
  });
};
