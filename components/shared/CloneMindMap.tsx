import { Button } from "../ui/button";
import { Boxes, Check } from "lucide-react";
import { TSave_Mindmap } from "@/constants/types";
import { useSaveMindMap } from "@/app/services/hooks/Mindmap/useMindMap";

const CloneMindMap = ({
  title,
  contentjson,
  isPublic,
  baseDiagramID,
  isClone,
}: TSave_Mindmap) => {
  const { mutate: saveMindmap, isPending } = useSaveMindMap({
    title: `Cloned ${title}`,
    contentjson,
    isPublic,
    baseDiagramID,
  });

  return (
    <Button
      className="p-6 text-lg cursor-pointer"
      variant="outline"
      onClick={() => saveMindmap()}
      disabled={
        isPending ||
        isClone ||
        (title && title.substring(0, 6) === "Cloned" ? true : false)
      }
    >
      {isClone ? (
        <>
          <Check /> <span>Cloned</span>
        </>
      ) : (
        <>
          <Boxes /> <span>Clone</span>
        </>
      )}
    </Button>
  );
};

export default CloneMindMap;
