import { createContext } from "react";

export type FavoritesContextType = {
  favorites: number[];
  toggleFavorites: (id: number) => void;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);
