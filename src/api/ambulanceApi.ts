import { baseApi } from './baseApi';
import { AmbulancesResponse } from '../models/Ambulance';

export const ambulanceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAmbulances: builder.query<AmbulancesResponse, void>({
            query: () => ({
                url: '/ambulances',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAmbulancesQuery } = ambulanceApi;
