import { baseApi } from './baseApi';
import { DonorListResponse } from '../models/Donor';

export const donorApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDonorList: builder.query<DonorListResponse, void>({
            query: () => '/donors',
        }),
    }),
});

export const { useGetDonorListQuery } = donorApi;
