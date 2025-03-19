import React from "react";
import { Button } from "../ui/button";
import { Check, Star } from "lucide-react";
import { useStarDiagram } from "@/app/services/hooks/Diagram/useDiagram";

interface StarButtonProps {
  diagramID: string;
  isInFavorite: boolean;
  numberOfFavorites: number;
}

const StarDiagramButton = ({
  diagramID,
  isInFavorite,
  numberOfFavorites,
}: StarButtonProps) => {
  const { mutate: starDiagram, isPending: starLoading } =
    useStarDiagram(diagramID);
  return (
    <div className="flex flex-row">
      <Button
        className="p-6 text-lg rounded-r-none cursor-pointer flex items-center gap-2"
        variant="outline"
        onClick={() => starDiagram()}
        disabled={starLoading || isInFavorite}
      >
        {isInFavorite ? (
          <>
            <Check size={20} /> <span>Stared</span>
          </>
        ) : (
          <>
            <Star size={20} /> <span>Star</span>
          </>
        )}
      </Button>
      <div className="px-4 border h-[50px] flex items-center rounded-r-md">
        <p className="font-semibold">{numberOfFavorites}</p>
      </div>
    </div>
  );
};

export default StarDiagramButton;
