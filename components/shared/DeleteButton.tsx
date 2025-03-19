"use client";
import { deleteDiagram } from "@/app/services/api/diagram/diagramApi";
import React from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

const DeleteButton = ({ diagramID }: { diagramID: string }) => {
  const handleDelete = async (diagramID: string) => {
    try {
      await deleteDiagram(diagramID);
      toast.success(`Diagram ${diagramID} deleted successfully.`);
      window.location.reload(); // Refresh the page after successful deletion
    } catch (error: Error | unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast.error(`Failed to delete diagram ${diagramID}: ${errorMessage}`);
      console.error(`Failed to delete diagram ${diagramID}:`, error);
    }
  };

  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.info(`Attempting to delete diagram ${diagramID}...`);
        handleDelete(diagramID);
      } else {
        toast.info(`Deletion of diagram ${diagramID} cancelled.`);
      }
    });
  };

  return (
    <button className="cursor-pointer" onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
