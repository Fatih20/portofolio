import type {
  AllMUNCardContent,
  AllMunsID,
  AllProjectCardContent,
  AllProjectID,
  AllWorkCardContent,
  AllWorkID,
  HomeContent,
  IDAble,
  MUNContent,
  MUNPageContent,
  NextPrevMUN,
  NextPrevProject,
  NextPrevWork,
  PortofolioContent,
  ProjectPageContent,
  WorkContent,
  WorkPageContent,
} from "@/types/cms";

async function fetcher<T>(
  query: string
): Promise<{ error: any; result: null | { data: T } }> {
  try {
    const result = (await (
      await fetch(import.meta.env.DATO_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.READ_TOKEN}`,
        },
        body: JSON.stringify({
          query: query,
        }),
      })
    ).json()) as { data: T };
    return { error: null, result };
  } catch (error) {
    return { error, result: null };
  }
}

export async function homeContentFetcher(): Promise<HomeContent> {
  const query = `query {
        home {
          name,
          pageDescription,
          description {
            blocks
            links
            value
          },
          photoOfUs {
            alt, 
            url, 
            title
          },
          photoCycleTime
        }
      }
      `;
  const { error, result } = await fetcher<HomeContent>(query);
  if (error === null && result?.data) {
    return result.data as HomeContent;
  }

  throw new Error("Failed to fetch home!");
}

export async function projectsCardContentFetcher(): Promise<AllProjectCardContent> {
  const query = `query {
    allProjects (orderBy :[ongoing_DESC, projectStartDate_DESC]) {
    id,
    ongoing,
    projectName,
    repositoryLink,
    projectLink,
    projectStartDate,
    projectEndDate,
    shortDescription
    gradientStartColor,
    gradientEndColor
}
}`;
  const { error, result } = await fetcher<AllProjectCardContent>(query);
  if (error === null && result?.data) {
    return result.data as AllProjectCardContent;
  } else {
    return { allProjects: [] } as AllProjectCardContent;
  }
}

export async function workCardContentFetcher(): Promise<AllWorkCardContent> {
  const query = `query {
    allWorks (orderBy :[ongoing_DESC, workStartDate_DESC]) {
      id
      ongoing,
      companyName,
      shortRemark,
        repositoryLink,
        projectLink,
      workStartDate,
      workEndDate,
      role
      gradientStartColor,
      gradientEndColor
    }
  }`;
  const { error, result } = await fetcher<AllWorkCardContent>(query);
  if (error === null && result?.data) {
    return result.data as AllWorkCardContent;
  } else {
    return { allWorks: [] } as AllWorkCardContent;
  }
}

export async function munCardContentFetcher(): Promise<AllMUNCardContent> {
  const query = `query {
    allMuns (orderBy :[startDate_DESC]) {
      id
      eventName
    	startDate
      council {
        name
        acronym
      }
      country {
        name
        flag
      }
    	roleOrAward
      shortRemark
        gradientStartColor
        gradientEndColor
    }
  }`;
  const { error, result } = await fetcher<AllMUNCardContent>(query);
  if (error === null && result?.data) {
    return result.data as AllMUNCardContent;
  } else {
    return { allMuns: [] } as AllMUNCardContent;
  }
}

export async function projectsContentFetcher(): Promise<PortofolioContent> {
  const query = `query {
    portofolio {
      title
      pageDescription
      description {
        blocks
        value
        links
      }
    }
  }
  `;
  const { error, result } = await fetcher<PortofolioContent>(query);
  if (error === null && result?.data) {
    return result.data as PortofolioContent;
  }

  throw new Error("Failed to fetch portofolio page content!");
}

export async function munContentFetcher(): Promise<MUNContent> {
  const query = `query {
    munPage {
      title
      pageDescription
      description {
        blocks
        value
        links
      }
    }
  }
  `;
  const { error, result } = await fetcher<MUNContent>(query);
  if (error === null && result?.data) {
    return result.data as MUNContent;
  }

  throw new Error("Failed to fetch MUN page content!");
}

export async function workContentFetcher(): Promise<WorkContent> {
  const query = `query {
    workPage {
      title
      pageDescription
      description {
        blocks
        value
        links
      }
    }
  }
  `;
  const { error, result } = await fetcher<WorkContent>(query);
  if (error === null && result?.data) {
    return result.data as WorkContent;
  }

  throw new Error("Failed to fetch works page content!");
}

export async function worksPageContentFetcher(
  id: string
): Promise<WorkPageContent> {
  const query = `query {
    work (filter : {id : {eq : ${id}}}) {
      id
      ongoing,
      companyName,
        repositoryLink,
        projectLink,
      workStartDate,
      workEndDate,
      shortRemark,
      description {
        blocks
        value
        links
      },
      role
      techStack {
        name
        link
      }
        gradientStartColor,
        gradientEndColor
    }
  }
  `;
  const { error, result } = await fetcher<{
    work: WorkPageContent;
  }>(query);
  if (error === null && result?.data) {
    return result.data.work as WorkPageContent;
  }

  throw new Error("Failed to fetch work page content!");
}

export async function projectsPageContentFetcher(
  id: string
): Promise<ProjectPageContent> {
  const query = `query {
    project (filter : {id : {eq : ${id}}}) {
      id,
      projectName,
      projectName,
    repositoryLink,
    projectLink,
    shortDescription,
    projectStartDate,
    projectEndDate,
    description {
      blocks
      value
      links
    },
    techStack {
      name
      link
    },
    gradientStartColor,
    gradientEndColor,
    galleryTitle,
    galleryPhotos {
      alt
      title
      url
    }
    }
  }
  `;
  const { error, result } = await fetcher<{
    project: ProjectPageContent;
  }>(query);
  if (error === null && result?.data) {
    return result.data.project as ProjectPageContent;
  }
  throw new Error(`Error getting project's data. ID : ${id}`);
}

export async function munPageContentFetcher(
  id: string
): Promise<MUNPageContent> {
  const query = `query {
    mun (filter : {id : {eq : ${id}}}) {
      id
      eventName
    	startDate
      council {
        name
        acronym
      }
      country {
        name
        flag
      }
      topic {
        name
      }
      description {
        blocks
        value
        links
      },
      roleOrAward
      shortRemark
        gradientStartColor
        gradientEndColor
    }
  }`;
  const { error, result } = await fetcher<{ mun: MUNPageContent }>(query);
  if (error === null && result?.data) {
    return result.data.mun as MUNPageContent;
  }
  throw new Error(`Error getting MUN's data. ID : ${id}`);
}

export async function munIdFetcher(): Promise<IDAble[]> {
  const query = `query {
    allMuns (orderBy :[startDate_DESC]) {
      id
    }
  }`;
  const { error, result } = await fetcher<{ allMuns: IDAble[] }>(query);
  if (error === null && result?.data) {
    return result.data.allMuns as IDAble[];
  } else {
    return [] as IDAble[];
  }
}

export async function workIdFetcher(): Promise<IDAble[]> {
  const query = `query {
    allWorks (orderBy :[ongoing_DESC, workStartDate_DESC]) {
      id
    }
  }`;
  const { error, result } = await fetcher<{ allWorks: IDAble[] }>(query);
  if (error === null && result?.data) {
    return result.data.allWorks as IDAble[];
  } else {
    return [] as IDAble[];
  }
}

export async function projectsIdFetcher(): Promise<IDAble[]> {
  const query = `query {
    allProjects (orderBy :[ongoing_DESC, projectStartDate_DESC]) {
    id,
}
}`;
  const { error, result } = await fetcher<{ allProjects: IDAble[] }>(query);
  if (error === null && result?.data) {
    return result.data.allProjects as IDAble[];
  } else {
    return [] as IDAble[];
  }
}

export async function worksNextPrevFetcher(id: string): Promise<NextPrevWork> {
  const query = `query {
    work (filter : {id : {eq : ${id}}}) {
      companyName,
      role
      gradientStartColor
      gradientEndColor

    }
  }
  `;
  const { error, result } = await fetcher<{
    work: NextPrevWork;
  }>(query);
  if (error === null && result?.data) {
    return result.data.work as NextPrevWork;
  }

  throw new Error(`Failed to fetch work page content with ID ${id}!`);
}

export async function projectsNextPrevFetcher(
  id: string
): Promise<NextPrevProject> {
  const query = `query {
    project (filter : {id : {eq : ${id}}}) {
      projectName
      gradientStartColor
      gradientEndColor

    }
  }
  `;
  const { error, result } = await fetcher<{
    project: NextPrevProject;
  }>(query);
  if (error === null && result?.data) {
    return result.data.project as NextPrevProject;
  }
  throw new Error(`Error getting project's data. ID : ${id}`);
}

export async function munNextPrevFetcher(id: string): Promise<NextPrevMUN> {
  const query = `query {
    mun (filter : {id : {eq : ${id}}}) {
      eventName
    	startDate
      gradientStartColor
      gradientEndColor

  }`;
  const { error, result } = await fetcher<{ mun: NextPrevMUN }>(query);
  if (error === null && result?.data) {
    return result.data.mun as NextPrevMUN;
  }
  throw new Error(`Error getting MUN's data. ID : ${id}`);
}
