export interface Date {
    date : number,
    month : number,
    year : number,
}

const headerOptions = ["home", "portofolio"] as const;

export type HeaderOption = typeof headerOptions[number];