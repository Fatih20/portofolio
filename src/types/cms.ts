export interface HomeContent {
    home : {
        name : string,
        description : string,
        photoOfUs : Image[],
        photoCycleTime : number
    }
}

export interface Image {
    alt : string,
    url : string,
    title : string,
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

export interface PortofolioContent {
    portofolio : {
        title : string
    }
}