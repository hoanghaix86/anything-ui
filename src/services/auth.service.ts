import {client} from "./client"

export type TSignInReq = {
    email: string,
    password: string
}

export type TSignInRes = {
    accessToken: string,
    refreshToken: string
}

export type TSignUpReq = {
    email: string,
    password: string
}

export type TSignUpRes = undefined


export const authService = {
    signIn: async (req: TSignInReq) => {
        const response = await client.post<TSignInRes>('/auth/signin', req)
        return response.data
    },
    signUp: async (req: TSignUpReq) => {
        const response = await client.post<TSignUpRes>('/auth/signup', req)
        return response.data
    },
}