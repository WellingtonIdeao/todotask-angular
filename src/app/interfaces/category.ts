export interface Category {
    url: string;
    id: number;
    title: string;
    created: Date;
    updated: Date;
    tasks: [string];
}
