export enum blogCategory {
    healthcare = "healthcare"
}

export interface Blog {
    _id: string;
    title: string;
    content: string;
    category: blogCategory;
    image_ID: string
    image: string
    __v: string
}

export interface Magazine {
    _id: string,
    title: string,
    description: string
    published: boolean,
    blog_ID: string,
    image: string,
    image_ID: string,
    __v: string
}