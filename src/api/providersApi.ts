import { baseApi } from './baseApi';
import { ProvidersResponse } from '../models/Providers';

export const providersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProviders: builder.query<ProvidersResponse, void>({
            query: () => ({
                url: '/providers/list',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetProvidersQuery } = providersApi;
