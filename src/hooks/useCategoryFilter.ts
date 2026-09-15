import { useSearchParams } from "react-router-dom";
import type { CategoryType } from "../types/Category";
import { useState } from "react";

type SelectedCategory = CategoryType | null;

function useCategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>(
    searchParams.get("category") as SelectedCategory,
  );

  function handleCategoryChange(category: SelectedCategory) {
    setSelectedCategory(category);
    setSearchParams(category ? { category } : {});
  }

  return [selectedCategory, handleCategoryChange] as const;
}

export default useCategoryFilter;
