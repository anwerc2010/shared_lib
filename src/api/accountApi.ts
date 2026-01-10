import { baseApi } from './baseApi';
import { Account } from '../models/Account';

export const accountApi = baseApi.injectEndpoints({
    
  endpoints: (builder) => ({
    getAccount: builder.query<Account, string>({
      query: (id) => `/account/${id}`,
    }),
    getAccounts: builder.query<Account[], void>({
      query: () => '/account',
    }),
  }),
});

export const { useGetAccountQuery, useGetAccountsQuery } = accountApi;

