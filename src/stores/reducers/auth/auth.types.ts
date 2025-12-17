export interface User {
    id: string
    roles: string[]
    email: string
}

export interface AuthState {
    accessToken: string | null
    user: User | null
    isAuthenticated: boolean
}
