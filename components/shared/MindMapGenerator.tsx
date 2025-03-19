"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import GenerateResponseButton from "./GenerateResponseButton";
import AiDropdown from "./AiDropdown";
import { TAiModel } from "@/constants/types";
import { AiModels } from "@/constants";

export default function MindMapGenerator() {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState<TAiModel>(AiModels[1]);

  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Transform Your Ideas into{" "}
        <span className="text-purple-600">Visual Mind Maps</span> with AI
      </h1>

      <Card className="shadow-lg">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-2">Mind Map Generation</h2>
          <p className="text-gray-600 mb-6">
            Enter your prompt below and let our AI help you generate amazing
            results.
          </p>

          <form>
            <Textarea
              placeholder="Enter your prompt here..."
              className="min-h-[120px] mb-6 text-base focus-visible:ring-0"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex flex-row gap-2">
              <div className="flex-grow">
                <GenerateResponseButton
                  modelOption={selectedModel.value}
                  prompt={prompt}
                />
              </div>
              <AiDropdown
                selectedModel={selectedModel}
                onModelSelect={setSelectedModel}
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
