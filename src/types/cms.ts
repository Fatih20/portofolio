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

export type HasGallery = {
  galleryTitle: string;
  galleryPhotos: Image[];
};

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
  council: string;
  country: string;
  countryFlag: string;
  shortRemark: string;
  startDate: string;
  roleOrAward: string;
} & Gradiented;

export interface IDAble {
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
  allProjects: IDAble[];
}

export interface AllWorkID {
  allWorks: IDAble[];
}

export interface AllMunsID {
  allMuns: IDAble[];
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
  projectStartDate: string;
  projectEndDate?: string;
  description: StructuredText;
  techStack: TechStack[];
} & Gradiented &
  HasGallery;

export type WorkPageContent = {
  id: string;
  companyName: string;
  shortRemark: string;
  role: string;
  ongoing: boolean;
  repositoryLink: string;
  projectLink: string;
  workStartDate: string;
  workEndDate?: string;
  description: StructuredText;
  techStack: TechStack[];
} & Gradiented &
  HasGallery;

export type MUNPageContent = {
  id: string;
  eventName: string;
  council: string;
  country: string;
  countryFlag: string;
  shortRemark: string;
  topic: string;
  description: StructuredText;
  startDate: string;
  roleOrAward: string;
} & Gradiented &
  HasGallery;
