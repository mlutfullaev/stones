export type ProjectT = {img: HTMLImageElement, name: string, link: string}
export type ProductT = {
    img: string,
    title: string,
    type: string,
}

export type BlogT = {
    title: string,
    uploadedFile: {id: string}[],
    id: number,
    link: "",
    createdAt: string
}

// export type StoneT = {
//     title: string,
//     abrasion
// }