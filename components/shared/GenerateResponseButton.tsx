import { Button } from "../ui/button";
import { useGenerate } from "@/app/services/hooks/useGenerate";
import { Zap } from "lucide-react";
import React from "react";

const GenerateResponseButton = ({
  prompt,
  modelOption,
}: {
  prompt: string;
  modelOption: number;
}) => {
  const { mutate: generateResponse, isPending: isGenerating } = useGenerate({
    prompt,
    modelOption,
  });

  const handleGenerateResponse = (e: React.FormEvent) => {
    e.preventDefault();
    generateResponse();
  };
  return (
    <Button
      type="submit"
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6"
      disabled={isGenerating}
      onClick={handleGenerateResponse}
    >
      <Zap className="mr-2 h-5 w-5" />
      {isGenerating ? "Generating..." : "Generate Response"}
    </Button>
  );
};

export default GenerateResponseButton;
