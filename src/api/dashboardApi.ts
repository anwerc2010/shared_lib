import { baseApi } from './baseApi';
import { Dashboard } from '../models/Dashboard';

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardDetails: builder.query<Dashboard, void>({
      query: () => '/dashboard',
    }),
  }),
});

export const { useGetDashboardDetailsQuery } = dashboardApi;

