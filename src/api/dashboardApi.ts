import { baseApi } from './baseApi';
import { Dashboard } from '../models/Dashboard';
import dashboardResponseData from '../asserts/dashboardResponse.json';

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardDetails: builder.query<Dashboard, void>({
      queryFn: async () => {
        // Return the mock dashboard response from JSON file
        return { data: dashboardResponseData as Dashboard };
      },
    }),
  }),
});

export const { useGetDashboardDetailsQuery } = dashboardApi;

