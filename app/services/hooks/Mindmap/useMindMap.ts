import { TSave_Mindmap } from "@/constants/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveMindmap } from "../../api/mindmap/mindmapApi";
import { toast } from "sonner";

export const useSaveMindMap = ({
  title,
  contentjson,
  isPublic,
  baseDiagramID,
}: TSave_Mindmap) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      saveMindmap({ title, contentjson, isPublic, baseDiagramID }),
    onSuccess: (data) => {
      console.log(data);
      toast("Your mind map has been created!");
      queryClient.invalidateQueries({ queryKey: ["diagram"] });
    },
  });
};
