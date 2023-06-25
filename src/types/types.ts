export interface Date {
  date: number;
  month: number;
  year: number;
}

const headerOptions = ["", "home", "hobbyProject", "works", "mun"] as const;

export type HeaderOption = typeof headerOptions[number];

export type NextPrevID = {
  nextID: string;
  prevID: string;
};
