import api from "@/lib/api";

export const generateResponse = async ({
  prompt,
  modelOption,
}: {
  prompt: string;
  modelOption: number;
}) => {
  const { data } = await api.post("/Generator/generate", {
    prompt,
    modelOption,
  });
  return data;
};
