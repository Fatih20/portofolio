import type { ProjectCardContent, ProjectPageContent } from "./types/cms";
import type { Date } from "./types/types";

export function dateConverter(dateString: string) {
  const numbers = dateString.split("-");
  return {
    date: Number(numbers[2]),
    month: Number(numbers[1]),
    year: Number(numbers[0]),
  } as Date;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function projectCompareFunction(
  a: ProjectCardContent,
  b: ProjectCardContent
) {
  {
    const {
      date: aDate,
      month: aMonth,
      year: aYear,
    } = dateConverter(a.projectStartDate);
    const {
      date: bDate,
      month: bMonth,
      year: bYear,
    } = dateConverter(b.projectStartDate);

    if (aYear > bYear) {
      return -1;
    } else if (aYear < bYear) {
      return 1;
    }

    if (aMonth > bMonth) {
      return -1;
    } else if (aMonth < bMonth) {
      return 1;
    }

    if (aDate > bDate) {
      return -1;
    } else if (aDate < bDate) {
      return 1;
    }

    return 0;
  }
}

export function projectPCompareFunction(
  a: ProjectPageContent,
  b: ProjectPageContent
): number {
  {
    const {
      date: aDate,
      month: aMonth,
      year: aYear,
    } = dateConverter(a.projectStartDate);
    const {
      date: bDate,
      month: bMonth,
      year: bYear,
    } = dateConverter(b.projectStartDate);

    if (aYear > bYear) {
      return -1;
    } else if (aYear < bYear) {
      return 1;
    }

    if (aMonth > bMonth) {
      return -1;
    } else if (aMonth < bMonth) {
      return 1;
    }

    if (aDate > bDate) {
      return -1;
    } else if (aDate < bDate) {
      return 1;
    }

    return 0;
  }
}
