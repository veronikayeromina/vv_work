export const CATEGORY = [
  {
    id: "construction",
    label: "Будівництво",
  },
  {
    id: "manufacturing",
    label: "Виробництво",
  },
  {
    id: "logistics",
    label: "Логістика",
  },
  {
    id: "hospitality",
    label: "Гостинність",
  },
  {
    id: "it",
    label: "АйТі",
  },
  {
    id: "drivers",
    label: "Водії",
  },
  {
    id: "other",
    label: "Інше",
  },
] as const;

export type CategoryType = (typeof CATEGORY)[number]["id"];
