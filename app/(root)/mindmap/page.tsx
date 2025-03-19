import { Suspense } from "react";
import MindMapScreen from "@/components/shared/MindMapScreen";
import { ReactFlowProvider } from "@xyflow/react";

const Page = () => {
  return (
    <ReactFlowProvider>
      <div className="h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <MindMapScreen />
        </Suspense>
      </div>
    </ReactFlowProvider>
  );
};

export default Page;
