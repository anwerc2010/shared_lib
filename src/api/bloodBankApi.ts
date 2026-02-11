import { baseApi } from './baseApi';
import { BloodRequestPayload, BloodRequestResponse, BloodRequestsResponse } from '../models/BloodBank';

export const bloodBankApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBloodRequests: builder.query<BloodRequestsResponse, void>({
            query: () => ({
                url: '/blood-request',
                method: 'GET',
            }),
        }),
        createBloodRequest: builder.mutation<BloodRequestResponse, BloodRequestPayload>({
            query: (payload) => ({
                url: '/blood-request',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const { useGetBloodRequestsQuery, useCreateBloodRequestMutation } = bloodBankApi;
