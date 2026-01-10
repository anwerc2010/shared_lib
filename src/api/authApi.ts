import { baseApi } from './baseApi';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../models/Account';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: '/customer/login',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: '/customer/register',
        method: 'POST',
        body,
      }),
    }),
    getProfile: builder.query<any, void>({
      query: () => '/auth/profile',
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetProfileQuery } = authApi;
