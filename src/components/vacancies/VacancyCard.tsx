import React from "react";
import type { VacancyType } from "../../types/Vacancy";
import { CATEGORY } from "../../types/Category";
import { useFavorites } from "../../hooks/useFavorites";
import { FaRegHeart, FaHeart } from "react-icons/fa";

type PropsType = {
  vacancy: VacancyType;
};

function VacancyCard({ vacancy }: PropsType) {
  const { favorites, toggleFavorites } = useFavorites();

  const category = CATEGORY.find(category => category.id === vacancy.category);
  const isFavorite = favorites.includes(vacancy.id);

  return (
    <div className="relative flex flex-col gap-2 rounded-xl border border-(--border) p-4">
      <button
        type="button"
        onClick={() => toggleFavorites(vacancy.id)}
        aria-label={isFavorite ? "Видалити з обраного" : "Додати в обране"}
        aria-pressed={isFavorite}
        className="absolute top-3 right-3 text-lg text-(--text) transition-colors hover:text-(--accent)"
      >
        {isFavorite ? <FaHeart className="text-(--accent)" /> : <FaRegHeart />}
      </button>

      <p className="pr-6 font-medium text-(--text-h)">{vacancy.title}</p>
      <span className="w-fit rounded-full bg-(--accent-bg) px-3 py-1 text-xs text-(--accent)">
        {category?.label}
      </span>
    </div>
  );
}

export default React.memo(VacancyCard);
