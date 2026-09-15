import { CATEGORY } from "../../types/Category";
import CategoryCard from "./CategoryCard";

function CategoriesBlock() {
  return (
    <div
      id="categories"
      className="flex flex-wrap justify-center gap-3 px-4 py-12 sm:px-8 sm:py-16"
    >
      {CATEGORY.map(category => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoriesBlock;
