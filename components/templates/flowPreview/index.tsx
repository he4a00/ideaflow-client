/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useQuery } from "@tanstack/react-query";
import { Background, ReactFlow, ReactFlowProvider } from "@xyflow/react";
import { useEffect, useRef } from "react";

const FlowPreview = ({ contentJson }: { contentJson: string }) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const {
    data: flowData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["contentJson", contentJson],
    queryFn: async () => {
      try {
        const data =
          typeof contentJson === "string"
            ? JSON.parse(contentJson)
            : contentJson;

        if (!data?.nodes || !Array.isArray(data.nodes)) {
          throw new Error("Invalid node data structure");
        }
        return data;
      } catch (e) {
        console.error("Content JSON parsing error:", e);
        throw e;
      }
    },
  });

  const sanitizePosition = (pos: any) => ({
    x: typeof pos?.x === "number" ? pos.x : 0,
    y: typeof pos?.y === "number" ? pos.y : 0,
  });

  const getNodes = () => {
    if (!flowData?.nodes) return [];

    return flowData.nodes.map((node: any) => ({
      id: node.id?.toString() || Math.random().toString(),
      position: sanitizePosition(node.position),
      data: {
        ...node.data,
        // Simplify label for preview
        label: node.data?.label ? truncateLabel(node.data.label) : "Node",
      },
      style: {
        backgroundColor: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 8,
        padding: 4,
        width: "80px",
        height: "30px",
        fontSize: "0.75rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        ...node.style,
      },
    }));
  };

  const getEdges = () => {
    if (!flowData?.edges) return [];

    return flowData.edges.map((edge: any) => ({
      id: edge.id?.toString() || `${edge.source}-${edge.target}`,
      source: edge.source?.toString(),
      target: edge.target?.toString(),
      style: {
        stroke: "#94a3b8",
        strokeWidth: 1.5,
      },
      animated: false,
    }));
  };

  const truncateLabel = (label: string) => {
    return label.length > 12 ? `${label.substring(0, 12)}...` : label;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const instance = reactFlowWrapper.current?.querySelector(
        ".react-flow__viewport"
      );
      if (instance) {
        (instance as HTMLElement).style.transform =
          "scale(1.2) translate(10%, 10%)";
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [flowData]);

  if (isLoading)
    return <div className="h-40 bg-gray-100 rounded-lg animate-pulse"></div>;
  if (error || !flowData)
    return (
      <div className="h-40 bg-red-50 text-red-600 p-4 rounded-lg">
        Preview unavailable
      </div>
    );

  return (
    <div
      className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-100"
      ref={reactFlowWrapper}
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={getNodes()}
          edges={getEdges()}
          fitView
          fitViewOptions={{
            padding: 0.4,
            duration: 300,
            includeHiddenNodes: true,
          }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          panOnDrag={false}
          preventScrolling={true}
          className="cursor-default"
          style={{ width: "100%", height: "100%" }}
          onInit={(instance) => {
            instance.fitView();
            setTimeout(() => instance.fitView(), 500);
          }}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        >
          <Background
            color="#f1f5f9"
            gap={32}
            style={{ filter: "blur(0.5px)" }}
          />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowPreview;
