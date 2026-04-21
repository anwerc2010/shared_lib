import { baseApi } from './baseApi';
import { ProfessionsResponse } from '../models/Profession';

export const professionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfessions: builder.query<ProfessionsResponse, void>({
            query: () => ({
                url: '/professions',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetProfessionsQuery } = professionApi;
