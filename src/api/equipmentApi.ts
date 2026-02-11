import { baseApi } from './baseApi';
import { EquipmentRequestPayload, EquipmentRequestResponse, EquipmentRequestsResponse } from '../models/Equipment';

export const equipmentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEquipmentRequests: builder.query<EquipmentRequestsResponse, void>({
            query: () => ({
                url: '/equipment-request',
                method: 'GET',
            }),
        }),
        createEquipmentRequest: builder.mutation<EquipmentRequestResponse, EquipmentRequestPayload>({
            query: (payload) => ({
                url: '/equipment-request',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const { useGetEquipmentRequestsQuery, useCreateEquipmentRequestMutation } = equipmentApi;
