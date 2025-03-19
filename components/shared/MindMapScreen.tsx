/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSearchParams } from "next/navigation";
import {
  ReactFlow,
  Controls,
  Background,
  MarkerType,
  useNodesState,
  useEdgesState,
  Edge,
  Node,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useEffect, useState } from "react";
import ShareMindMap from "./ShareMindMap";

function MindMapScreen() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");
  const [nodes, setNodes, onNodesChange] = useNodesState([] as Node[]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([] as Edge[]);
  const [nodeName, setNodeName] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDelete = useCallback(
    (nodeId: string) => {
      setNodes((prevNodes) =>
        prevNodes.filter((node: any) => node.id !== nodeId)
      );
      setEdges((prevEdges) =>
        prevEdges.filter(
          (edge: any) => edge.source !== nodeId && edge.target !== nodeId
        )
      );
    },
    [setEdges, setNodes]
  );

  const handleAddNode = () => {
    if (!nodeName.trim()) return;

    const newNode = {
      id: `${Date.now()}`,
      data: {
        label: (
          <div style={{ position: "relative", padding: "10px" }}>
            {nodeName}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(newNode.id);
              }}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                fontSize: "12px",
                color: "#ff0000",
              }}
            >
              ×
            </button>
          </div>
        ),
      },
      position: selectedParent
        ? {
            x:
              (nodes as any[]).find((n) => n.id === selectedParent)?.position
                ?.x ?? window.innerWidth / 2 + 200,
            y:
              (nodes as any[]).find((n) => n.id === selectedParent)?.position
                ?.y ?? window.innerHeight / 2 + 100,
          }
        : { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      style: {
        background: "#fff",
        border: "2px solid #94a3b8",
        borderRadius: "5px",
        width: "150px",
        padding: "20px",
      },
    };

    const newEdges = selectedParent
      ? [
          {
            id: `e${selectedParent}-${newNode.id}`,
            source: selectedParent,
            target: newNode.id,
            animated: true,
            type: "smoothstep",
            style: { stroke: "#94a3b8", strokeWidth: 2 },
            markerEnd: { type: MarkerType.ArrowClosed, color: "#94a3b8" },
            labelBgStyle: { fill: "transparent" },
            labelStyle: { fill: "#000" },
          },
        ]
      : [];

    setNodes((nds: Node[]) => [...nds, newNode as Node]);
    setEdges((eds: Edge[]) => [...eds, ...(newEdges as Edge[])]);
    setNodeName("");
    setSelectedParent("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (dataParam) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(dataParam));
        const formattedNodes = decodedData.nodes.map(
          (node: any, index: number) => ({
            id: node.id.toString(),
            data: {
              label: (
                <div style={{ position: "relative", padding: "10px" }}>
                  {node.data.label}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(node.id.toString());
                    }}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                      fontSize: "12px",
                      color: "#ff0000",
                    }}
                  >
                    ×
                  </button>
                </div>
              ),
            },
            position: node.position || { x: index * 100, y: index * 50 },
            style: {
              background: node.style.background,
              border: node.style.border,
              color: node.style.color,
              width: node.style.width,
              borderRadius: node.style.borderRadius,
              labelStyle: { background: "transparent", fill: "white" },
            },
          })
        );

        const formattedEdges = decodedData.edges.map((edge: any) => ({
          id: `e${edge.source}-${edge.target}`,
          source: edge.source.toString(),
          target: edge.target.toString(),
          animated: true,
          type: "smoothstep",
          style: {
            stroke: edge.style?.stroke || "#94a3b8",
            strokeWidth: edge.style?.strokeWidth || 2,
          },
          label: edge.label,
          markerEnd: { type: MarkerType.ArrowClosed, color: "#94a3b8" },
          labelBgStyle: { fill: "transparent" },
          labelStyle: { fill: "#000" },
        }));

        setNodes(formattedNodes);
        setEdges(formattedEdges);
      } catch (error) {
        console.error("Error parsing mind map data:", error);
      }
    }
  }, [dataParam, handleDelete, setEdges, setNodes]);


  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1000,
          padding: "10px 20px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Node
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1001,
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            minWidth: "300px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Create New Node</h3>
          <input
            type="text"
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
            placeholder="Node name"
            style={{
              margin: "10px 0",
              padding: "8px",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />

          {nodes.length > 0 && (
            <div>
              <label>Connect to parent node:</label>
              <select
                value={selectedParent}
                onChange={(e) => setSelectedParent(e.target.value)}
                style={{
                  margin: "10px 0",
                  padding: "8px",
                  width: "100%",
                  borderRadius: "4px",
                }}
              >
                <option value="">None</option>
                {nodes.map((node: any) => (
                  <option key={node.id} value={node.id}>
                    {node.data.label.props.children[0]}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <button
              onClick={handleAddNode}
              style={{
                padding: "8px 16px",
                background: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                flex: 1,
              }}
            >
              Create
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                padding: "8px 16px",
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                flex: 1,
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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
      <ShareMindMap />
    </div>
  );
}

export default MindMapScreen;
