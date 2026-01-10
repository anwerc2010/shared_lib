import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getApiBaseUrl = (): string => {
  if (typeof window !== 'undefined') {
    // Browser/Client-side: Use NEXT_PUBLIC_ prefix for Next.js
    return process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'https://api.mhfglobal.com/api';
  }
  // Server-side
  return process.env.API_BASE_URL || 'https://api.mhfglobal.com/api';
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: getApiBaseUrl(),
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any)?.auth?.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: () => ({}),
});
