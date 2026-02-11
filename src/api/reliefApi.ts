import { baseApi } from './baseApi';
import { ReliefRequestsResponse, CreateReliefRequestPayload, ReliefCreateResponse } from '../models/Relief';

export const reliefApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getReliefWelfare: builder.query<ReliefRequestsResponse, void>({
            query: () => ({
                url: '/relief-welfare',
                method: 'GET',
            }),
        }),
        createReliefRequest: builder.mutation<ReliefCreateResponse, CreateReliefRequestPayload>({
            query: (payload) => ({
                url: '/relief-requests',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const { useGetReliefWelfareQuery, useCreateReliefRequestMutation } = reliefApi;
