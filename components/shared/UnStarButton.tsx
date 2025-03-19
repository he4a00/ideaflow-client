import React from "react";
import { Button } from "../ui/button";
import { useUnStarDiagram } from "@/app/services/hooks/Diagram/useDiagram";
import { X } from "lucide-react";

interface StarButtonProps {
  id: string;
}

const UnStarButton = ({ id }: StarButtonProps) => {
  const { mutate: unStarDiagram, isPending: unStarLoading } =
    useUnStarDiagram(id);
  return (
    <Button
      className="cursor-pointer"
      variant="destructive"
      onClick={() => unStarDiagram()}
      disabled={unStarLoading}
    >
      <X />
    </Button>
  );
};

export default UnStarButton;
