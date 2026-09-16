import type { VacancyType } from "../../types/Vacancy";
import Button from "../ui/Button";
import VacancyCard from "./VacancyCard";
import { IoSearch } from "react-icons/io5";

type PropsType = {
  vacancies: VacancyType[];
  onReset: () => void;
};

function VacancyList({ vacancies, onReset }: PropsType) {
  return (
    <div>
      {vacancies.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <IoSearch className="text-2xl text-(--text)" />
          <p className="text-(--text)">Вакансій за цим запитом не знайдено</p>
          <Button onClick={onReset}>Скинути фільтри</Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {vacancies.map(vacancy => (
            <VacancyCard vacancy={vacancy} key={vacancy.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default VacancyList;
