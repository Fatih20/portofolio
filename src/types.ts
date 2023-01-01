export interface HomeContent {
    home : {
        name : string,
        description : string,
        photoOfUs : Image
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

export interface Date {
    date : number,
    month : number,
    year : number,
}

const headerOptions = ["home", "portofolio"] as const;

export type HeaderOption = typeof headerOptions[number];