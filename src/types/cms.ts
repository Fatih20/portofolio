import type { StructuredText } from "datocms-structured-text-utils";

export interface HomeContent {
  home: {
    name: string;
    description: StructuredText;
    pageDescription: string;
    photoOfUs: Image[];
    photoCycleTime: number;
  };
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

export type ProjectCardContent = {
  id: string;
  projectName: string;
  ongoing: boolean;
  repositoryLink: string;
  projectLink: string;
  projectStartDate: string;
  projectEndDate?: string;
  shortDescription: string;
} & Gradiented;

export type WorkCardContent = {
  id: string;
  companyName: string;
  shortRemark: string;
  role: string;
  ongoing: boolean;
  repositoryLink: string;
  projectLink: string;
  workStartDate: string;
  workEndDate?: string;
} & Gradiented;

export type MUNCardContent = {
  id: string;
  eventName: string;
  shortRemark: string;
  startDate: string;
  roleOrAward: string;
} & Gradiented;

export interface ProjectID {
  id: string;
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

export interface AllProjectID {
  allProjects: ProjectID[];
}

export interface PortofolioContent {
  portofolio: {
    title: string;
    description: StructuredText;
    pageDescription: string;
  };
}

export interface MUNContent {
  munPage: {
    title: string;
    description: StructuredText;
    pageDescription: string;
  };
}

export interface WorkContent {
  workPage: {
    title: string;
    description: StructuredText;
    pageDescription: string;
  };
}

export interface ProjectPageContent {
  id: string;
  projectName: string;
  ongoing: boolean;
  shortDescription: string;
  repositoryLink: string;
  projectLink: string;
  projectStartDate: string;
  projectEndDate?: string;
  description: StructuredText;
  techStack: { name: string }[];
  gradientStartColor: string;
  gradientEndColor: string;
  galleryTitle: string;
  galleryPhotos: Image[];
}
