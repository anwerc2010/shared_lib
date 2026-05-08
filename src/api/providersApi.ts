import { baseApi } from "./baseApi";
import { ProvidersResponse, LocationProviderParams } from "../models/Providers";

export const providersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProviders: builder.query<ProvidersResponse, void>({
      query: () => ({
        url: "/providers/list",
        method: "GET",
      }),
    }),
    getProvidersByLocation: builder.query<
      ProvidersResponse,
      LocationProviderParams
    >({
      query: ({ latitude, longitude, radius }) => ({
        url: `/providers/location?latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProvidersQuery, useGetProvidersByLocationQuery } =
  providersApi;
