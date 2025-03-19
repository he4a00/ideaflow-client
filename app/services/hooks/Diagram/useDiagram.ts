import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getDiagramById,
  getFavoritesByUser,
  getUserDiagrams,
  starDiagram,
  unStarDiagram,
} from "../../api/diagram/diagramApi";
import { toast } from "sonner";

export const useGetDiagramById = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["diagram", id],
    queryFn: () => getDiagramById({ id }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    staleTime: Infinity,
  });
};

export const useGetUserDiagrams = ({ userID }: { userID: string }) => {
  return useQuery({
    queryKey: ["userDiagrams", userID],
    queryFn: () => getUserDiagrams(userID),
  });
};

export const useStarDiagram = (diagramID: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => starDiagram(diagramID),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["diagram"] });
      toast("Star status updated successfully");
    },
  });
};
export const useUnStarDiagram = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => unStarDiagram(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["diagram"] });
      toast("Unstar status updated successfully");
    },
  });
};

export const useGetUserFavDiagrams = () => {
  return useQuery({
    queryKey: ["diagram"],
    queryFn: () => getFavoritesByUser(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    staleTime: Infinity,
  });
};
