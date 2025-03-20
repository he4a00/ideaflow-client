import React from "react";
import { Button } from "../ui/button";
import { useUnStarDiagram } from "@/app/services/hooks/Diagram/useDiagram";
import { Heart } from "lucide-react";

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
      <Heart />
    </Button>
  );
};

export default UnStarButton;
