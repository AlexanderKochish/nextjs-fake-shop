import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
    endpoints: (build) =>  ({
        login: build.mutation({
            query: (user) => ({
                url: "auth/login",
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
        })
    }),
})

export const { useLoginMutation }: any = loginApi