
export type TPost = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export type Geo = {
    lat: number;
    lng: number;
}

export type Company = {
    name: string;
    catchPhrase: string;
    bs: string
}

export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export type User = {
    id: number;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company
}

export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface PostsState {
    loading: boolean;
    posts: TPost[];
    showcase: TPost | null;
    showing: number;
    error: string
}


export type Showcase = {
    post: TPost;
    user: User;
    comments: Comment[]
}
export type Action = {
    type: string,
    payload?: any
}
