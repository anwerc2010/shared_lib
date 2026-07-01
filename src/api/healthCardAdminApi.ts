import { baseApi } from './baseApi';
import {
  HealthCardLoginRequest,
  HealthCardLoginResponse,
  HealthCardListResponse,
  HealthCardsByStatusResponse,
  UpdateHealthCardStatusRequest,
  UpdateHealthCardStatusResponse,
  HealthCardStatusCountsResponse,
  HealthCardSearchResponse,
  HealthCardAdminReportsResponse,
} from '../models/HealthCardAdmin';

export interface HealthCardSearchArgs {
  q: string;
  page?: number;
  per_page?: number;
}

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

    getHealthCardStatusCounts: builder.query<HealthCardStatusCountsResponse, void>({
      query: () => ({
        url: '/health-cards/status-counts',
        method: 'GET',
      }),
    }),

    searchHealthCards: builder.query<HealthCardSearchResponse, HealthCardSearchArgs>({
      query: ({ q, page = 1, per_page = 20 }) => ({
        url: `/health-cards/search?q=${encodeURIComponent(q)}&page=${page}&per_page=${per_page}`,
        method: 'GET',
      }),
    }),

    getHealthCardAdminReports: builder.query<HealthCardAdminReportsResponse, void>({
      query: () => ({
        url: '/health-cards/admin-reports',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLoginHealthCardMutation,
  useGetHealthCardsQuery,
  useGetHealthCardsByStatusQuery,
  useUpdateHealthCardStatusMutation,
  useGetHealthCardStatusCountsQuery,
  useSearchHealthCardsQuery,
  useGetHealthCardAdminReportsQuery,
} = healthCardAdminApi;
