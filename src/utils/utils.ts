import type {
  IDAble,
  ProjectCardContent,
  ProjectPageContent,
} from "@/types/cms";
import type { Date, NextPrevID } from "@/types/types";

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

export function nextPrevIDMaker(id: string, idArray: string[]): NextPrevID {
  const indexOfID = idArray.indexOf(id);

  if (indexOfID < 0) {
    throw new Error(`${id} not found in id array [${idArray.join(", ")}] !`);
  }

  const length = idArray.length;

  let prev = indexOfID - 1;
  let next = (indexOfID + 1) % length;

  if (prev < 0) {
    prev = length - 1;
  }

  return { nextID: idArray[next], prevID: idArray[prev] };
}

export function idAbleToStaticPathConverter(idAbles: IDAble[]) {
  return idAbles.map(({ id }) => {
    return {
      params: { id },
    };
  });
}
