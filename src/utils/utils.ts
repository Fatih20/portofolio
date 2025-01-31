import type {
  Gradiented,
  HasSlugAndID,
  HasThumbnail,
  IDAble,
  IismaJournalContent,
  ProjectCardContent,
  ProjectPageContent,
} from "@/types/cms";
import type {
  Date,
  IismaJournalEntryStage,
  IismaJournalEntryStageCount,
  NextPrevID,
} from "@/types/types";

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

export function dateCardMaker(
  dateStart: string,
  dateEnd: string | undefined,
  ongoing: boolean
) {
  const { month: startMonth, year: startYear } = dateConverter(dateStart);
  const { month: endMonth, year: endYear } = dateEnd
    ? dateConverter(dateEnd)
    : { month: 0, year: 0 };

  if (ongoing) {
    return `${months[startMonth - 1]}
    ${startYear} — Now`;
  }

  if (
    (startMonth === endMonth && startYear === endYear) ||
    dateEnd === undefined
  ) {
    return `${months[startMonth - 1]}
    ${startYear}`;
  }

  return `${months[startMonth - 1]} ${startYear} —
          ${months[endMonth - 1]} ${endYear}`;
}

export const iismaJournalGradient: Record<IismaJournalEntryStage, Gradiented> =
  {
    all: { gradientEndColor: "#c12117", gradientStartColor: "#ff453a" },
    abroad: { gradientEndColor: "#25355a", gradientStartColor: "#007fa3" },
    aftermath: { gradientEndColor: "#1B5E20", gradientStartColor: "#2E7D32" },
    preambule: { gradientEndColor: "", gradientStartColor: "" },
    registration: {
      gradientStartColor: "#6A2D6E",
      gradientEndColor: "#4A0E4E",
    },
    "pre-departure": {
      gradientStartColor: "#EEC900",
      gradientEndColor: "#FF8C00",
    },
  };

export const iismaJournalStageDisplay: Record<IismaJournalEntryStage, string> =
  {
    all: "All",
    abroad: "Abroad",
    aftermath: "Aftermath",
    preambule: "Preambule",
    registration: "Registration",
    "pre-departure": "Pre-Departure",
  };

export function dateCardMakerIismaJournal(publishedDate: string) {
  const { month, year, date } = dateConverter(publishedDate);

  const monthName = months[month - 1];

  return `${date} ${monthName} ${year}`;
}

export const emptyIismaJournalEntryStageCount: IismaJournalEntryStageCount = {
  "pre-departure": 0,
  abroad: 0,
  aftermath: 0,
  all: 0,
  preambule: 0,
  registration: 0,
};

export function iismaJournalEntryStageCountCounter(
  stages: IismaJournalEntryStage[]
) {
  const iismaJournalEntryStageCount = { ...emptyIismaJournalEntryStageCount };
  stages.forEach((stage) => {
    iismaJournalEntryStageCount[stage]++;
    iismaJournalEntryStageCount.all++;
  });
  return iismaJournalEntryStageCount;
}

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
