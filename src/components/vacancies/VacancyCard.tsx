import React from "react";
import type { VacancyType } from "../../types/Vacancy";
import { CATEGORY } from "../../types/Category";

type PropsType = {
  vacancy: VacancyType;
};

function VacancyCard({ vacancy }: PropsType) {
  const category = CATEGORY.find(category => category.id === vacancy.category);

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-(--border) p-4">
      <p className="font-medium text-(--text-h)">{vacancy.title}</p>
      <span className="w-fit rounded-full bg-(--accent-bg) px-3 py-1 text-xs text-(--accent)">
        {category?.label}
      </span>
    </div>
  );
}

export default React.memo(VacancyCard);
