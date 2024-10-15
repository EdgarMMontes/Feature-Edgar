export interface User{
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    groupId: number;
    token: string;
    tokenActive: boolean;
}