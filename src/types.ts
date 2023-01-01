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
    projectEndDate?: string,
    shortDescription: string,
    gradientStartColor: string,
    gradientEndColor: string
}

export interface AllProjectCardContent {
    allProjects : ProjectCardContent[]
}

export interface Date {
    date : number,
    month : number,
    year : number,
}