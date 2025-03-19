export type TSignUp = {
  fullName: string;
  email: string;
  password: string;
};
export type TSignIn = {
  email: string;
  password: string;
};

export type TAiModel = {
  name: string;
  value: number;
  iconPath: string;
};

export type TSave_Mindmap = {
  title: string;
  contentjson: string;
  isPublic: boolean;
  baseDiagramID?: string;
  isClone?: boolean;
};

export type TDiagram = {
  title: string;
  updatedAt: string;
  isPublic: boolean;
  diagramID: string;
  fullName: string;
  isInFavorite?: boolean;
  description?: string;
  contentJson?: string;
  numberOfFavorites?: number;
  isClone?: boolean;
  favouriteID?: string;
};
