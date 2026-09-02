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
  HealthCardItem,
  HealthCardTab,
  HealthCardByIdResponse,
  HealthCardAnalyticsResponse,
  SetHealthCardLifecycleStatusRequest,
  SetHealthCardLifecycleStatusResponse,
} from '../models/HealthCardAdmin';

export interface HealthCardSearchArgs {
  q: string;
  page?: number;
  per_page?: number;
}

export interface GetHealthCardsArgs {
  tab?: HealthCardTab;
  page?: number;
  per_page?: number;
  search?: string;
}

export function buildHealthCardListParams(
  args: GetHealthCardsArgs,
): Record<string, string | number> {
  const { tab = 'all', page = 1, per_page = 25, search } = args;
  const params: Record<string, string | number> = { tab, page, per_page };
  const trimmedSearch = search?.trim();
  if (trimmedSearch) {
    params.search = trimmedSearch;
  }
  return params;
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

    getHealthCards: builder.query<HealthCardListResponse, GetHealthCardsArgs>({
      query: (args) => ({
        url: '/health-card/list',
        method: 'GET',
        params: buildHealthCardListParams(args),
      }),
      providesTags: ['HealthCard'],
    }),

    getHealthCardsByStatus: builder.query<HealthCardsByStatusResponse, string>({
      query: (status) => ({
        url: `/health-cards/status/${status}`,
        method: 'GET',
      }),
      providesTags: ['HealthCard'],
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
      invalidatesTags: ['HealthCard'],
    }),

    // Suspend/reactivate — the narrow /status endpoint above only accepts
    // approved/rejected/pending, so this goes through the general card
    // update endpoint instead (same one the web admin's "Suspended" select
    // option uses), sending only the status field.
    setHealthCardLifecycleStatus: builder.mutation<
      SetHealthCardLifecycleStatusResponse,
      SetHealthCardLifecycleStatusRequest
    >({
      query: ({ id, status }) => ({
        url: `/health-card/update/${id}`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['HealthCard'],
    }),

    getHealthCardStatusCounts: builder.query<HealthCardStatusCountsResponse, void>({
      query: () => ({
        url: '/health-cards/status-counts',
        method: 'GET',
      }),
      providesTags: ['HealthCard'],
    }),

    searchHealthCards: builder.query<HealthCardSearchResponse, HealthCardSearchArgs>({
      query: ({ q, page = 1, per_page = 20 }) => ({
        url: `/health-cards/search?q=${encodeURIComponent(q)}&page=${page}&per_page=${per_page}`,
        method: 'GET',
      }),
      providesTags: ['HealthCard'],
    }),

    getHealthCardAdminReports: builder.query<HealthCardAdminReportsResponse, void>({
      query: () => ({
        url: '/health-cards/admin-reports',
        method: 'GET',
      }),
      providesTags: ['HealthCard'],
    }),

    getHealthCardById: builder.query<HealthCardItem, number>({
      query: (id) => ({
        url: `/health-card/show/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: HealthCardByIdResponse) => {
        const { health_card, customer } = response.data;
        return {
          ...health_card,
          // Backend's show() doesn't overlay live customer data onto the
          // card the way list/search do — do it here so detail view stays
          // consistent with what the list/search screens already show.
          card_holder_name: customer?.fullname || health_card.card_holder_name,
          email: customer?.email || health_card.email,
          phone: customer?.phone || health_card.phone,
          aadhaar_number: customer?.aadhaar_number || health_card.aadhaar_number,
          customer: customer ?? null,
        };
      },
      providesTags: ['HealthCard'],
    }),

    getHealthCardAnalytics: builder.query<HealthCardAnalyticsResponse, void>({
      query: () => ({
        url: '/health-cards/analytics',
        method: 'GET',
      }),
      providesTags: ['HealthCard'],
    }),
  }),
});

export const {
  useLoginHealthCardMutation,
  useGetHealthCardsQuery,
  useGetHealthCardsByStatusQuery,
  useUpdateHealthCardStatusMutation,
  useSetHealthCardLifecycleStatusMutation,
  useGetHealthCardStatusCountsQuery,
  useSearchHealthCardsQuery,
  useGetHealthCardAdminReportsQuery,
  useGetHealthCardByIdQuery,
  useGetHealthCardAnalyticsQuery,
} = healthCardAdminApi;
