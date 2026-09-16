import { useParams } from "react-router-dom";
import { PARTNERS } from "../types/Partner";
import VacancyList from "../components/vacancies/VacancyList";
import { useCallback, useState } from "react";
import Input from "../components/ui/Input";
import useDebounce from "../hooks/useDebounce";
import useCategoryFilter from "../hooks/useCategoryFilter";
import { CATEGORY } from "../types/Category";
import Button from "../components/ui/Button";
import useAsyncData from "../hooks/useAsyncData";
import fakeApi from "../api/fakeApi";
import RetryBlock from "../components/ui/RetryBlock";
import Skeleton from "../components/ui/Skeleton";
import usePageMeta from "../hooks/usePageMeta";

function PartnerPage() {
  const [search, setSearch] = useState("");

  const { slug } = useParams();
  const [selectedCategory, setSelectedCategory] = useCategoryFilter();

  const debouncedSearch = useDebounce(search, 500);

  const fetcher = useCallback(() => {
    const foundPartner = PARTNERS.find(el => el.slug === slug);
    return fakeApi(foundPartner);
  }, [slug]);

  const { data: partner, status, error, refetch } = useAsyncData(fetcher);

  usePageMeta(
    partner ? `${partner.name} — Вакансії | VV Work` : "Партнер | VV Work",
    partner
      ? `Актуальні вакансії від ${partner.name} на платформі VV Work.`
      : "Вакансії від партнера VV Work.",
  );

  if (status === "loading") {
    return <Skeleton />;
  }

  if (status === "error") {
    return <RetryBlock onRetry={refetch} message={error?.message} />;
  }

  if (!partner) {
    return <p>Партнера не знайдено</p>;
  }

  const filteredVacancy = partner.vacancyList.filter(
    el =>
      el.title.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
      (selectedCategory === null || el.category === selectedCategory),
  );

  return (
    <div className="flex flex-col gap-6 px-4 py-8 sm:px-8">
      <Input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Пошук за назвою..."
        className="max-w-sm"
      />

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => setSelectedCategory(null)}
          className={
            selectedCategory === null ? "border-(--accent) text-(--accent)" : ""
          }
        >
          Всі
        </Button>
        {CATEGORY.map(category => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={
              selectedCategory === category.id
                ? "border-(--accent) text-(--accent)"
                : ""
            }
          >
            {category.label}
          </Button>
        ))}
      </div>

      <VacancyList vacancies={filteredVacancy} />
    </div>
  );
}

export default PartnerPage;
