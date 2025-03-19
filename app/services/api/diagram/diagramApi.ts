import api from "@/lib/api";

export const getUserDiagrams = async (userID: string) => {
  const { data } = await api.get(`/Diagram/getUserDiagrams/${userID}`);
  return data;
};

export const getAllDiagrams = async () => {
  const { data } = await api.get("/Diagram/getAllDiagrams");
  return data;
};

export const getPublicDiagrams = async () => {
  const { data } = await api.get("/Diagram/getPublicDiagrams");
  return data;
};

export const getDiagramByTitle = async (title: string) => {
  const { data } = await api.get(`/Diagram/getDiagrams/${title}`);
  return data;
};

export const getDiagramById = async ({ id }: { id: string }) => {
  const { data } = await api.get(`/Diagram/getDiagram/${id}`);
  return data;
};

export const deleteDiagram = async (diagramID: string) => {
  const { data } = await api.delete(`/Diagram/deleteDiagram/${diagramID}`);
  return data;
};
export const getFavoritesByUser = async () => {
  const { data } = await api.get(`/Favorite/getFavoritesByUser`);
  return data;
};

export const starDiagram = async (diagramID: string) => {
  const { data } = await api.post("/Favorite/addFavorite", { diagramID });
  return data;
};

export const unStarDiagram = async (id: string) => {
  const { data } = await api.delete(`/Favorite/deleteFavorite/${id}`);
  return data;
};
