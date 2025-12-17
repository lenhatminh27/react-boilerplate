import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {AuthState, User} from './auth.types'

const initialState: AuthState = {
    accessToken: null,
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (
            state,
            action: PayloadAction<{ accessToken: string; user: User }>
        ) => {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.accessToken = null
            state.user = null
            state.isAuthenticated = false
        },
    },
})

export const {loginSuccess, logout} = authSlice.actions
export default authSlice.reducer
