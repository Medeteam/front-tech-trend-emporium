import { User } from "./user";

export interface UserResponse {
    pageNumber: number,
    pageSize: number,
    totalUsers: number,
    users: User[]
}
