import type {
  AllIismaJournalCardContent,
  AllMUNCardContent,
  AllMunsID,
  AllProjectCardContent,
  AllProjectID,
  AllWorkCardContent,
  AllWorkID,
  HasSlugAndID,
  HomeContent,
  IDAble,
  IismaJournalContent,
  IismaJournalPageContent,
  ListPageName,
  MUNContent,
  MUNPageContent,
  NextPrevIismaJournal,
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
          photoCycleTime,
          metaInfo {
            title,
            description,
            customThumbnail {
              alt,
              url,
              title
            }
          }
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
    slug,
    ongoing,
    projectName,
    repositoryLink,
    projectLink,
    links {
      customLinkText
      link
      linkType
    },
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

export async function iismaJournalCardContentFetcher(): Promise<AllIismaJournalCardContent> {
  const query = `
  query {
    allIismaJournals (orderBy: [publishedDate_DESC]) {
      id
      slug
      title
      stage
      publishedDate
      shortDescription
    }
  }
  `;
  const { error, result } = await fetcher<AllIismaJournalCardContent>(query);
  if (error === null && result?.data) {
    return result.data as AllIismaJournalCardContent;
  } else {
    return { allIismaJournals: [] } as AllIismaJournalCardContent;
  }
}

export async function workCardContentFetcher(): Promise<AllWorkCardContent> {
  const query = `query {
    allWorks (orderBy :[ongoing_DESC, workStartDate_DESC]) {
      id,
      slug,
      ongoing,
      companyName,
      shortRemark,
      repositoryLink,
      projectLink,
      links {
        customLinkText
        link
        linkType
      },
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
      slug
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
      bestPositionPaper
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

const listPageQueryGenerator = (pageName: ListPageName) => {
  return `query {
    ${pageName} {
      title
      description {
        blocks
        value
        links
      }
      metaInfo {
        title,
        description,
        customThumbnail {
          alt,
          url,
          title
        }
      }
    }
  }
  `;
};

export async function projectsContentFetcher(): Promise<PortofolioContent> {
  const query = listPageQueryGenerator("portofolio");
  const { error, result } = await fetcher<PortofolioContent>(query);
  if (error === null && result?.data) {
    return result.data as PortofolioContent;
  }

  throw new Error("Failed to fetch portofolio page content!");
}

export async function munContentFetcher(): Promise<MUNContent> {
  const query = listPageQueryGenerator("munPage");
  const { error, result } = await fetcher<MUNContent>(query);
  if (error === null && result?.data) {
    return result.data as MUNContent;
  }

  throw new Error("Failed to fetch MUN page content!");
}

export async function iismaJournalContentFetcher(): Promise<IismaJournalContent> {
  const query = listPageQueryGenerator("iismaJournalPage");
  const { error, result } = await fetcher<IismaJournalContent>(query);
  if (error === null && result?.data) {
    return result.data as IismaJournalContent;
  }

  throw new Error("Failed to fetch works page content!");
}

export async function workContentFetcher(): Promise<WorkContent> {
  const query = listPageQueryGenerator("workPage");
  const { error, result } = await fetcher<WorkContent>(query);
  if (error === null && result?.data) {
    return result.data as WorkContent;
  }

  throw new Error("Failed to fetch works page content!");
}

export async function worksPageContentFetcher(
  slug: string
): Promise<WorkPageContent> {
  const query = `query {
    work (filter : {slug : {eq : "${slug}"}}) {
      id
      ongoing,
      companyName,
      repositoryLink,
      projectLink,
      links {
        customLinkText
        link
        linkType
      },
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
        thumbnail {
          thumbnail {
            alt
            url
            title
          }
        }
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

export async function iismaJournalPageContentFetcher(
  slug: string
): Promise<IismaJournalPageContent> {
  const query = `query {
    iismaJournal (filter : {slug : {eq : "${slug}"}}) {
      id
      title
      stage
      publishedDate
      shortDescription
      description {
        blocks
        value
        links
      }
      thumbnail {
        thumbnail {
          alt
          url
          title
        }
      }
    }
  }
  `;
  const { error, result } = await fetcher<{
    iismaJournal: IismaJournalPageContent;
  }>(query);
  if (error === null && result?.data) {
    return result.data.iismaJournal as IismaJournalPageContent;
  }

  throw new Error("Failed to fetch work page content!");
}

export async function projectsPageContentFetcher(
  slug: string
): Promise<ProjectPageContent> {
  const query = `query {
    project (filter : {slug : {eq : "${slug}"}}) {
      id,
      slug,
      projectName,
      projectName,
    repositoryLink,
    projectLink,
    links {
      customLinkText
      link
      linkType
    },
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
    thumbnail {
      thumbnail {
        alt
        url
        title
      }
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
  throw new Error(`Error getting project's data. Slug : ${slug}`);
}

export async function munPageContentFetcher(
  slug: string
): Promise<MUNPageContent> {
  const query = `query {
    mun (filter : {slug : {eq : "${slug}"}}) {
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
      bestPositionPaper
      shortRemark
        gradientStartColor
        gradientEndColor
        thumbnail {
          thumbnail {
            alt
            url
            title
          }
        }
    }
  }`;
  const { error, result } = await fetcher<{ mun: MUNPageContent }>(query);
  if (error === null && result?.data) {
    return result.data.mun as MUNPageContent;
  }
  throw new Error(`Error getting MUN's data. Slug : ${slug}`);
}

export async function munIdFetcher(): Promise<HasSlugAndID[]> {
  const query = `query {
    allMuns (orderBy :[startDate_ASC]) {
      id
      slug
    }
  }`;
  const { error, result } = await fetcher<{ allMuns: HasSlugAndID[] }>(query);
  if (error === null && result?.data) {
    return result.data.allMuns as HasSlugAndID[];
  } else {
    return [] as HasSlugAndID[];
  }
}

export async function workIdFetcher(): Promise<HasSlugAndID[]> {
  const query = `query {
    allWorks (orderBy :[ongoing_ASC, workStartDate_ASC]) {
      id
      slug
    }
  }`;
  const { error, result } = await fetcher<{ allWorks: HasSlugAndID[] }>(query);
  if (error === null && result?.data) {
    return result.data.allWorks as HasSlugAndID[];
  } else {
    return [] as HasSlugAndID[];
  }
}

export async function projectsIdFetcher(): Promise<HasSlugAndID[]> {
  const query = `query {
    allProjects (orderBy :[ongoing_ASC, projectStartDate_ASC]) {
    id,
    slug
}
}`;
  const { error, result } = await fetcher<{ allProjects: HasSlugAndID[] }>(
    query
  );
  if (error === null && result?.data) {
    return result.data.allProjects as HasSlugAndID[];
  } else {
    return [] as HasSlugAndID[];
  }
}

export async function iismaJournalIdFetcher(): Promise<HasSlugAndID[]> {
  const query = `query {
    allIismaJournals (orderBy :[publishedDate_DESC]) {
    id,
    slug
}
}`;
  const { error, result } = await fetcher<{ allIismaJournals: HasSlugAndID[] }>(
    query
  );
  if (error === null && result?.data) {
    return result.data.allIismaJournals as HasSlugAndID[];
  } else {
    return [] as HasSlugAndID[];
  }
}

export async function worksNextPrevFetcher(
  slug: string
): Promise<NextPrevWork> {
  const query = `query {
    work (filter : {slug : {eq : "${slug}"}}) {
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

  throw new Error(`Failed to fetch work page content with slug ${slug}!`);
}

export async function projectsNextPrevFetcher(
  slug: string
): Promise<NextPrevProject> {
  const query = `query {
    project (filter : {slug : {eq : "${slug}"}}) {
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
  throw new Error();
}

export async function munNextPrevFetcher(slug: string): Promise<NextPrevMUN> {
  const query = `query {
    mun (filter : {slug : {eq : "${slug}"}}) {
      eventName
    	startDate
      gradientStartColor
      gradientEndColor
  }
  }`;
  const { error, result } = await fetcher<{ mun: NextPrevMUN }>(query);
  if (error === null && result?.data) {
    return result.data.mun as NextPrevMUN;
  }
  throw new Error(`Error getting MUN's data. Slug : ${slug}`);
}

export async function iismaJournalNextPrevFetcher(
  slug: string
): Promise<NextPrevIismaJournal> {
  const query = `query {
    iismaJournal (filter : {slug : {eq : "${slug}"}}) {
      title
      stage
  }
  }`;
  const { error, result } = await fetcher<{
    iismaJournal: NextPrevIismaJournal;
  }>(query);
  if (error === null && result?.data) {
    return result.data.iismaJournal as NextPrevIismaJournal;
  }
  throw new Error(`Error getting IISMA Journal's data. Slug : ${slug}`);
}
