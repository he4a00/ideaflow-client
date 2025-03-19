import React from "react";
import { Button } from "../ui/button";
import { TSave_Mindmap } from "@/constants/types";
import { useSaveMindMap } from "@/app/services/hooks/Mindmap/useMindMap";

const SaveMindmapButton = ({ title, contentjson, isPublic }: TSave_Mindmap) => {
  const { mutate: saveMindmap, isPending } = useSaveMindMap({
    title,
    contentjson,
    isPublic,
  });

  return (
    <Button
      className="bg-purple-600 hover:bg-purple-700 text-white"
      type="submit"
      onClick={() => saveMindmap()}
      disabled={isPending}
    >
      {text || "Save"}
    </Button>
  );
};

export default SaveMindmapButton;
