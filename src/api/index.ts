import type {
  AllMUNCardContent,
  AllMunsID,
  AllProjectCardContent,
  AllProjectID,
  AllWorkCardContent,
  AllWorkID,
  HomeContent,
  MUNContent,
  MUNPageContent,
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
      council
      country
      countryFlag
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

export async function worksIdFetcher(): Promise<AllWorkID> {
  const query = `query {
      allWorks {
      id
  }
  }`;
  const { error, result } = await fetcher<AllWorkID>(query);
  if (error === null && result?.data) {
    return result.data as AllWorkID;
  } else {
    return { allWorks: [] } as AllWorkID;
  }
}

export async function munsIdFetcher(): Promise<AllMunsID> {
  const query = `query {
      allMuns {
      id
  }
  }`;
  const { error, result } = await fetcher<AllMunsID>(query);
  if (error === null && result?.data) {
    return result.data as AllMunsID;
  } else {
    return { allMuns: [] } as AllMunsID;
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
      council
      country
      countryFlag
      topic
      description
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
