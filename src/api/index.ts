import type {
  AllProjectCardContent,
  AllProjectID,
  AllWorkCardContent,
  HomeContent,
  MUNContent,
  PortofolioContent,
  ProjectPageContent,
  WorkContent,
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
        allProjects (orderBy :[projectStartDate_DESC]) {
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
    allWorks (orderBy :[workStartDate_DESC]) {
      id
      ongoing,
      companyName,
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

export async function projectsIdFetcher(): Promise<AllProjectID> {
  const query = `query {
      allProjects {
      id
  }
  }`;
  const { error, result } = await fetcher<AllProjectID>(query);
  if (error === null && result?.data) {
    return result.data as AllProjectID;
  } else {
    return { allProjects: [] } as AllProjectID;
  }
}

export async function portofolioContentFetcher(): Promise<PortofolioContent> {
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

export async function worksPageContentFetcher(): Promise<WorkContent> {
  const query = `query {
    allWorks {
      id
      ongoing,
      companyName,
        repositoryLink,
        projectLink,
      workStartDate,
      workEndDate,
      description {
        blocks
        value
        links
      },
      role
      techStack {
        name
      }
        gradientStartColor,
        gradientEndColor
    }
  }
  `;
  const { error, result } = await fetcher<WorkContent>(query);
  if (error === null && result?.data) {
    return result.data as WorkContent;
  }

  throw new Error("Failed to fetch work page content!");
}

export async function projectsPageContentFetcher(): Promise<
  ProjectPageContent[]
> {
  const query = `query {
    allProjects {
      id,
      projectName,
      projectName,
      ongoing,
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
    },
    gradientStartColor,
    gradientEndColor,
    galleryTitle,
    galleryPhotos
    }
  }
  `;
  const { error, result } = await fetcher<{
    allProjects: ProjectPageContent[];
  }>(query);
  if (error === null && result?.data) {
    return result.data.allProjects as ProjectPageContent[];
  } else {
    return [] as ProjectPageContent[];
  }
}

export async function projectsContentFetcher(
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
  console.log(result);
  if (error === null && result?.data) {
    return result.data.project as ProjectPageContent;
  } else {
    throw new Error("Error getting project's data");
  }
}
