export interface HomeContent {
  home: {
    name: string;
    description: string;
    photoOfUs: Image[];
    photoCycleTime: number;
  };
}

export interface Image {
  alt: string;
  url: string;
  title: string;
}

export interface ProjectCardContent {
  id: string;
  projectName: string;
  repositoryLink: string;
  projectLink: string;
  projectStartDate: string;
  projectEndDate?: string;
  shortDescription: string;
  gradientStartColor: string;
  gradientEndColor: string;
}

export interface ProjectID {
  id: string;
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
  };
}

export interface ProjectPageContent {
  id: string;
  projectName: string;
  shortDescription: string;
  repositoryLink: string;
  projectLink: string;
  projectStartDate: string;
  projectEndDate?: string;
  summary: StructuredText;
  diaryAndReflections: StructuredText;
  techStack: { name: string }[];
  gradientStartColor: string;
  gradientEndColor: string;
}
