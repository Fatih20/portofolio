import type {
  HasSlugAndID,
  HasThumbnail,
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

export function nextPrevSlugMaker(
  slug: string,
  slugLinkArray: string[]
): NextPrevID {
  const indexOfID = slugLinkArray.indexOf(slug);

  if (indexOfID < 0) {
    throw new Error(
      `${slug} not found in slug array [${slugLinkArray.join(", ")}] !`
    );
  }

  const length = slugLinkArray.length;

  const prev = indexOfID - 1 < 0 ? length - 1 : indexOfID - 1;
  const next = (indexOfID + 1) % length;

  return { nextSlug: slugLinkArray[next], prevSlug: slugLinkArray[prev] };
}

export function idAbleToStaticPathConverter(idAbles: HasSlugAndID[]) {
  return idAbles.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
}

export function thumbnailProcessor(hasThumbnail: HasThumbnail["thumbnail"]) {
  return hasThumbnail === null ? null : hasThumbnail.thumbnail;
}
