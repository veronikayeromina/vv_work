import type { VacancyType } from "../../types/Vacancy";
import VacancyCard from "./VacancyCard";

type PropsType = {
  vacancies: VacancyType[];
};

function VacancyList({ vacancies }: PropsType) {
  return (
    <div>
      {vacancies.length === 0 ? (
        <p>Нічого не знайдено</p>
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
