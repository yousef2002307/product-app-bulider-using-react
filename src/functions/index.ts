/**
 * 
 * @param {string} str - string should be sliced
 * @param {number} max - max length of string
 * @returns the sloced string
 */
export function txtslicer(str : string,max:number = "50"): string {
    if(str.length >= max) return str.slice(0,max) + " ... ";
    else return str
}