import type { StructuredText } from "datocms-structured-text-utils";
import type { IismaJournalEntryStage } from "./types";

export interface HomeContent {
  home: {
    name: string;
    description: StructuredText;
    photoOfUs: Image[];
    photoCycleTime: number;
  } & HasMetaInfo;
}

export interface Image {
  alt: string;
  url: string;
  title: string;
}

export interface Gradiented {
  gradientStartColor: string;
  gradientEndColor: string;
}

export type HasGallery = {
  galleryTitle: string;
  galleryPhotos: Image[];
};

const possibleProjectLink = ["repo", "custom", "project"] as const;

export type ProjectLinkType = (typeof possibleProjectLink)[number];

export type ProjectLink = {
  link: string;
  linkType: ProjectLinkType;
  customLinkText: "";
};

export type ProjectCardContent = {
  projectName: string;
  ongoing: boolean;
  repositoryLink: string;
  projectLink: string;
  links: ProjectLink[];
  projectStartDate: string;
  projectEndDate?: string;
  shortDescription: string;
} & Gradiented &
  HasSlugAndID;

export type IismaJournalCardContent = {
  title: string;
  stage: IismaJournalEntryStage;
  publishedDate: string;
  shortDescription: string;
} & HasSlugAndID;

export type IismaJournalCardContentAugmented = IismaJournalCardContent &
  Gradiented;

export type WorkCardContent = {
  companyName: string;
  shortRemark: string;
  role: string;
  ongoing: boolean;
  repositoryLink: string;
  projectLink: string;
  links: ProjectLink[];
  workStartDate: string;
  workEndDate?: string;
} & Gradiented &
  HasSlugAndID;

export type MUNCardContent = {
  eventName: string;
  council: Council[];
  country: Country[];
  shortRemark: string;
  startDate: string;
  roleOrAward: string;
  bestPositionPaper: boolean;
} & Gradiented &
  HasSlugAndID;

export interface IDAble {
  id: string;
}

export interface HasSlug {
  slug: string;
}

export type HasSlugAndID = HasSlug & IDAble;

export interface HasThumbnail {
  thumbnail: {
    thumbnail: Image | null;
  } | null;
}

export interface AllWorkCardContent {
  allWorks: WorkCardContent[];
}

export interface AllMUNCardContent {
  allMuns: MUNCardContent[];
}

export interface AllProjectCardContent {
  allProjects: ProjectCardContent[];
}

export interface AllIismaJournalCardContent {
  allIismaJournals: IismaJournalCardContent[];
}

export interface AllProjectID {
  allProjects: HasSlugAndID[];
}

export interface AllWorkID {
  allWorks: HasSlugAndID[];
}

export interface AllMunsID {
  allMuns: HasSlugAndID[];
}

export interface HasMetaInfo {
  metaInfo: {
    title: string;
    description: string;
    customThumbnail: Image | null;
  };
}

export type ListPageContent = {
  title: string;
  description: StructuredText;
} & HasMetaInfo;

const listPageNames = [
  "portofolio",
  "munPage",
  "workPage",
  "iismaJournalPage",
] as const;
export type ListPageName = (typeof listPageNames)[number];

export interface PortofolioContent {
  portofolio: ListPageContent;
}

export interface MUNContent {
  munPage: ListPageContent;
}

export interface WorkContent {
  workPage: ListPageContent;
}

export interface IismaJournalContent {
  iismaJournalPage: ListPageContent;
}

export interface TechStack {
  name: string;
  link: string;
}

export type ProjectPageContent = {
  id: string;
  projectName: string;
  ongoing: boolean;
  shortDescription: string;
  repositoryLink: string;
  projectLink: string;
  links: ProjectLink[];
  projectStartDate: string;
  projectEndDate?: string;
  description: StructuredText;
  techStack: TechStack[];
} & Gradiented &
  HasGallery &
  HasThumbnail;

export type WorkPageContent = {
  id: string;
  companyName: string;
  shortRemark: string;
  role: string;
  ongoing: boolean;
  repositoryLink: string;
  projectLink: string;
  links: ProjectLink[];
  workStartDate: string;
  workEndDate?: string;
  description: StructuredText;
  techStack: TechStack[];
} & Gradiented &
  HasGallery &
  HasThumbnail;

export type IismaJournalPageContent = {
  id: string;
  title: string;
  stage: IismaJournalEntryStage;
  publishedDate: string;
  description: StructuredText;
} & HasGallery &
  HasThumbnail;

export type Council = {
  name: string;
  acronym: string;
};

export type Country = {
  name: string;
  flag: string;
};

export type MUNPageContent = {
  id: string;
  eventName: string;
  council: Council[];
  country: Country[];
  topic: { name: string }[];
  shortRemark: string;
  description: StructuredText;
  startDate: string;
  roleOrAward: string;
  bestPositionPaper: boolean;
} & Gradiented &
  HasGallery &
  HasThumbnail;

export type NextPrevMUN = {
  eventName: string;
  startDate: string;
} & Gradiented;

export type NextPrevWork = {
  companyName: string;
  role: string;
} & Gradiented;

export type NextPrevProject = {
  projectName: string;
} & Gradiented;
