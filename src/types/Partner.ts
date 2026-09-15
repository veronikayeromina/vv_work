import { VACANCY, type VacancyType } from "./Vacancy";

export const PARTNERS: PartnersType[] = [
  {
    slug: "euro-logistics",
    name: "EuroLogistics OÜ",
    vacancyList: VACANCY,
  },
];

export type PartnersType = {
  slug: string;
  name: string;
  vacancyList: VacancyType[];
};
