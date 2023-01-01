export interface HomeContent {
    home : {
        name : string,
        description : string
    }
}

export interface ProjectCardContent {
    projectName: string,
    repositoryLink: string,
    projectLink: string,
    projectStartDate: string,
    projectEndDate: string,
    summary: string
}

export interface AllProjectCardContent {
    allProjects : ProjectCardContent[]
}