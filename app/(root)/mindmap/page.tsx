import MindMapScreen from "@/components/shared/MindMapScreen";
import { ReactFlowProvider } from "@xyflow/react";
import React from "react";

const page = () => {
  return (
    <ReactFlowProvider>
      <div className="h-screen">
        <MindMapScreen />
      </div>
    </ReactFlowProvider>
  );
};

export default page;
