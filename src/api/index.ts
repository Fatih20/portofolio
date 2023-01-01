import type { AllProjectCardContent, HomeContent } from "@/types";

async function fetcher<T>(query : string) : Promise<{error : any, result : null | {data : T}}>{
    try {
        const result = await (await fetch(
            import.meta.env.DATO_ENDPOINT,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${import.meta.env.READ_TOKEN}`,
              },
              body: JSON.stringify({
                query: query
              }),
            }
          )).json() as {data : T};
          return {error : null, result}
    } catch (error){
        return {error, result : null}

    }
}

export async function homeContentFetcher () : Promise<HomeContent> {
    const query = `query {
        home {
          name,
          description
        }
      }`
    const {error, result} =  await (fetcher<HomeContent>(query))
    if (error === null && result?.data) {
        return result.data as HomeContent
    } else {
        return {home : {name : "Fatih Nararya R. I.", "description" : "Placeholder"}} as HomeContent
    }
}

export async function projectsCardContentFetcher () : Promise<AllProjectCardContent> {
    const query = `query {
        allProjects {
          projectName,
          repositoryLink,
          projectLink,
          projectStartDate,
          projectEndDate,
          summary,
          gradientStartColor,
          gradientEndColor
        }
      }`
    const {error, result} =  await (fetcher<AllProjectCardContent>(query))
    if (error === null && result?.data) {
        return result.data as AllProjectCardContent
    } else {
        return {allProjects : []} as AllProjectCardContent
    }
}



