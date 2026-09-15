import { Link } from "react-router-dom";
import type { CATEGORY } from "../../types/Category";

type PropsType = {
  category: (typeof CATEGORY)[number];
};

function CategoryCard({ category }: PropsType) {
  return (
    <Link
      to={`/partners/euro-logistics?category=${category.id}`}
      key={category.id}
      className="rounded-full border border-(--border) px-4 py-2 text-sm text-(--text-h) transition-colors hover:border-(--accent) hover:text-(--accent)"
    >
      {category.label}
    </Link>
  );
}

export default CategoryCard;
