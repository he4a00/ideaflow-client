/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Edge,
  Node,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useEffect } from "react";
import { useGetDiagramById } from "@/app/services/hooks/Diagram/useDiagram";

function DiagramFlow({ id }: { id: string }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([] as Node[]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([] as Edge[]);
  const { data: diagramData } = useGetDiagramById({ id: id as string });

  useEffect(() => {
    if (diagramData?.result?.contentJson) {
      try {
        const data =
          typeof diagramData.result.contentJson === "string"
            ? JSON.parse(diagramData.result.contentJson)
            : diagramData.result.contentJson;

        const formattedNodes = data.nodes.map((node: any) => ({
          ...node,
          data: {
            label: (
              <div style={{ position: "relative", padding: "10px" }}>
                {node.data.label}
              </div>
            ),
          },
        }));

        const formattedEdges = data.edges.map((edge: any) => ({
          ...edge,
          labelBgStyle: { fill: "transparent" },
          labelStyle: { fill: "#000" },
        }));

        setNodes(formattedNodes);
        setEdges(formattedEdges);
      } catch (error) {
        console.error("Error parsing mind map data:", error);
      }
    }
  }, [diagramData, setEdges, setNodes]);


  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesConnectable={false}
        zoomOnScroll={true}
        panOnDrag={true}
        fitView={true}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
      {/* <ShareMindMap /> */}
    </div>
  );
}

export default DiagramFlow;
