import type { CategoryType } from "./Category";

export const VACANCY: VacancyType[] = [
  {
    id: 1,
    title: "Водій категорії C, Німеччина",
    category: "drivers",
  },
  {
    id: 2,
    title: "Водій-далекобійник, Польща",
    category: "drivers",
  },
  {
    id: 3,
    title: "Комплектувальник на складі, Польща",
    category: "logistics",
  },
  {
    id: 4,
    title: "Кур'єр-водій, Чехія",
    category: "logistics",
  },
  {
    id: 5,
    title: "Різноробочий на будівництво",
    category: "construction",
  },
  {
    id: 6,
    title: "Монтажник фасадів, Німеччина",
    category: "construction",
  },
  {
    id: 7,
    title: "Оператор виробничої лінії",
    category: "manufacturing",
  },
  {
    id: 8,
    title: "Пакувальник продукції",
    category: "manufacturing",
  },
  {
    id: 9,
    title: "Покоївка в готель, Чехія",
    category: "hospitality",
  },
  {
    id: 10,
    title: "Офіціант/-ка, Австрія",
    category: "hospitality",
  },
  {
    id: 11,
    title: "Frontend-розробник (Remote)",
    category: "it",
  },
  {
    id: 12,
    title: "Прибиральник/-ця виробничих приміщень",
    category: "it",
  },
];

export type VacancyType = {
  id: number;
  title: string;
  category: CategoryType;
};
