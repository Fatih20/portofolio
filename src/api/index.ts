import type {
  AllProjectCardContent,
  HomeContent,
  PortofolioContent,
  ProjectPageContent,
  ProjectsID,
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
          description,
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
  } else {
    return {
      home: { name: "Fatih Nararya R. I.", description: "Placeholder" },
    } as HomeContent;
  }
}

export async function projectsCardContentFetcher(): Promise<AllProjectCardContent> {
  const query = `query {
        allProjects {
        id
        projectName,
        repositoryLink,
        projectLink,
        projectStartDate,
        projectEndDate,
        shortDescription,
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

export async function portofolioContentFetcher(): Promise<PortofolioContent> {
  const query = `query {
    portofolio {
      title
    }
  }
  `;
  const { error, result } = await fetcher<PortofolioContent>(query);
  if (error === null && result?.data) {
    return result.data as PortofolioContent;
  } else {
    return {
      portofolio: { title: "The many projects that I've worked on" },
    } as PortofolioContent;
  }
}

export async function projectsIDFetcher(): Promise<ProjectsID> {
  const query = `query{
    allProjects {
      id
    }
  }
  `;
  const { error, result } = await fetcher<ProjectsID>(query);
  if (error === null && result?.data) {
    return result.data as ProjectsID;
  } else {
    return { allProjects: [] } as ProjectsID;
  }
}

// export async function projectPageContentFetcher(
//   projectID: string
// ): Promise<ProjectPageContent> {
//   const query = `query {
//     allProjects(filter: { id: { eq: ${projectID} } }){
//       id,
//       projectName,
//       repositoryLink,
//       projectLink,
//       projectStartDate,
//       projectEndDate,
//       summary,
//       gradientStartColor,
//       gradientEndColor,
//       shortDescription,

//     }
//   }
//   `;
//   const { error, result } = await fetcher<{
//     allProjects: ProjectPageContent[];
//   }>(query);
//   if (error === null && result?.data) {
//     return result.data.allProjects[0] as ProjectPageContent;
//   } else {
//     return undefined as ProjectPageContent;
//   }
// }

export async function projectsPageContentFetcher(): Promise<
  ProjectPageContent[]
> {
  const query = `query {
    allProjects {
      id,
      projectName,
      projectName,
    repositoryLink,
    projectLink,
    shortDescription,
    projectStartDate,
    projectEndDate,
    summary {
      blocks,
      value,
      links
    },
    techStack {
      name
    },
      diaryAndReflections {
        blocks,
        links,
        value
      },
    gradientStartColor,
    gradientEndColor
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
