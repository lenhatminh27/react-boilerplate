import {type RootState} from '@/stores'

export const getAccessToken = (state: RootState) => state.auth.accessToken
export const getUser = (state: RootState) => state.auth.user
export const isAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated
export const getUserRole = (state: RootState) => state.auth.user?.roles
