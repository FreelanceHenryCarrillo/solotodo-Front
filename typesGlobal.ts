export interface Blog{
    id?:number;
    title: string;
    content: string;
    author: string;
    created_at?: string;
}

export enum Filter {
    LASTEST = 'lastest'
}

export enum TypeFilter {
    SEARCH = 'searchInput',
    SELECT = 'selectInput'
}