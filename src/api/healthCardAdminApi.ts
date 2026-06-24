import { baseApi } from './baseApi';
import {
  HealthCardLoginRequest,
  HealthCardLoginResponse,
  HealthCardListResponse,
  HealthCardsByStatusResponse,
  UpdateHealthCardStatusRequest,
  UpdateHealthCardStatusResponse,
} from '../models/HealthCardAdmin';

export const healthCardAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginHealthCard: builder.mutation<HealthCardLoginResponse, HealthCardLoginRequest>({
      query: (body) => ({
        url: '/health-card/login',
        method: 'POST',
        body,
      }),
    }),

    getHealthCards: builder.query<HealthCardListResponse, void>({
      query: () => ({
        url: '/health-card/list',
        method: 'GET',
      }),
    }),

    getHealthCardsByStatus: builder.query<HealthCardsByStatusResponse, string>({
      query: (status) => ({
        url: `/health-cards/status/${status}`,
        method: 'GET',
      }),
    }),

    updateHealthCardStatus: builder.mutation<
      UpdateHealthCardStatusResponse,
      UpdateHealthCardStatusRequest
    >({
      query: ({ id, status }) => ({
        url: `/health-card/${id}/status`,
        method: 'PUT',
        body: { status },
      }),
    }),
  }),
});

export const {
  useLoginHealthCardMutation,
  useGetHealthCardsQuery,
  useGetHealthCardsByStatusQuery,
  useUpdateHealthCardStatusMutation,
} = healthCardAdminApi;
