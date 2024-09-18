export interface Date {
  date: number;
  month: number;
  year: number;
}

const headerOptions = [
  "",
  "home",
  "hobbyProject",
  "works",
  "mun",
  "iismaJournal",
] as const;

export type HeaderOption = (typeof headerOptions)[number];
export const iismaJournalEntryStages = [
  "all",
  "preambule",
  "registration",
  "pre-departure",
  "abroad",
  "aftermath",
] as const;

export type IismaJournalEntryStage = (typeof iismaJournalEntryStages)[number];

export type IismaJournalEntryStageCount = Record<
  IismaJournalEntryStage,
  number
>;

export type NextPrevID = {
  nextSlug: string;
  prevSlug: string;
};
