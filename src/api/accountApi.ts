import { baseApi } from "./baseApi";
import {
  Account,
  UpdateCustomerRequest,
  UpdateCustomerResponse,
  DeleteAccountResponse,
} from "../models/Account";

export const accountApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.query<Account, string>({
      query: (id) => `/account/${id}`,
    }),
    getAccounts: builder.query<Account[], void>({
      query: () => "/account",
    }),
    updateCustomer: builder.mutation<
      UpdateCustomerResponse,
      UpdateCustomerRequest
    >({
      async queryFn(args, _api, _extraOptions, baseQuery) {
        const { id, data } = args;

        // Primary endpoint confirmed by backend.
        const primary = await baseQuery({
          url: `/customers/${id}`,
          method: "PUT",
          body: data,
        });

        if (!primary.error) {
          return { data: primary.data as UpdateCustomerResponse };
        }

        // Fallback for older servers expecting legacy route + method override.
        const fallback = await baseQuery({
          url: `/customer/${id}?_method=PUT`,
          method: "POST",
          body: data,
        });

        if (!fallback.error) {
          return { data: fallback.data as UpdateCustomerResponse };
        }

        return { error: fallback.error } as any;
      },
    }),
    // Apple 5.1.1(v) — permanently deletes the authenticated customer's own
    // account. No id/body: the backend resolves the target from the JWT.
    deleteAccount: builder.mutation<DeleteAccountResponse, void>({
      query: () => ({
        url: "/customer/account",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAccountQuery,
  useGetAccountsQuery,
  useUpdateCustomerMutation,
  useDeleteAccountMutation,
} = accountApi;
