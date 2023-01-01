import type { Date } from "./types/types";

export function dateConverter (dateString : string){
    const numbers = dateString.split("-");
    return {
        date : Number(numbers[2]),
        month : Number(numbers[1]),
        year : Number(numbers[0]),

    } as Date
}

export const months  = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];