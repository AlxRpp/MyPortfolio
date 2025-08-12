export interface Project {
    slug: string;
    title: string;
    description: string;
    implDetails: string;
    url: string;
    detailImg: string;
    featured: boolean;
    duration: number;
    technology: Technology[]
}

export interface Technology {
    src: string;
    name: string;
}