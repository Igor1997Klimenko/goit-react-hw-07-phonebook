import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiContacts = createApi({
    reducerPath: 'apiContacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62727f8825fed8fcb5f54bcd.mockapi.io/api/v1',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => ({ url: `/contacts`, method:'GET' }),
            providesTags: ['Contacts'],
        }),

        addContacts: builder.mutation({
            query: newContact => {
                return {
                    url: '/contacts',
                    method: 'POST',
                    body: newContact,
                };
            },
            invalidatesTags: ['Contacts'], 
        }),

        deleteContacts: builder.mutation({
            query: id => {
                return {
                    url: `/contacts/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: ['Contacts'], 
        }),
    }),
});
export const { useGetContactsQuery, useAddContactsMutation, useDeleteContactsMutation } = apiContacts;