import { baseApi } from './baseApi';
import {
    CardRequestPayload,
    CardRequestResponse,
    UploadDocumentResponse,
    ApplyHealthCard,
    HealthCardResponse
} from '../models/CardRequest';

export const cardRequestApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCardRequest: builder.mutation<CardRequestResponse, CardRequestPayload>({
            query: (payload) => ({
                url: '/card-requests',
                method: 'POST',
                body: payload,
            }),
        }),
        uploadDocument: builder.mutation<UploadDocumentResponse, FormData>({
            query: (formData) => ({
                url: '/card-requests/upload-document',
                method: 'POST',
                body: formData,
            }),
        }),
        applyHealthCard: builder.mutation<HealthCardResponse, ApplyHealthCard>({
            query: (payload) => ({
                url: '/health-card/store',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const {
    useCreateCardRequestMutation,
    useUploadDocumentMutation,
    useApplyHealthCardMutation
} = cardRequestApi;
