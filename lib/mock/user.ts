import { User } from "@/types/user"

export let user: User = {
    id: "user_1",
    name: "John Doe",
    email: "john.doe@example.com",
}

export function updateUser(data: Partial<User>) {
    user = { ...user, ...data }
}
