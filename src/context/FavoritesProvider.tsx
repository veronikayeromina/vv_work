import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export function FavoritesProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const raw = localStorage.getItem("favorites");
    return raw ? JSON.parse(raw) : [];
  });

  function toggleFavorites(id: number) {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id],
    );
  }

  useEffect(() => {
    const stringFav = JSON.stringify(favorites);

    localStorage.setItem("favorites", stringFav);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
