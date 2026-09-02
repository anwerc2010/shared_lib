import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

export const getApiBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    return (
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      process.env.API_BASE_URL ||
      "http://13.127.77.119:8080/api"
    );
  }
  return process.env.API_BASE_URL || "http://13.127.77.119:8080/api";
};

const rawBaseQuery = fetchBaseQuery({
  baseUrl: getApiBaseUrl(),
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any)?.auth?.token;
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

// Guard to prevent multiple simultaneous token refresh calls
let isRefreshing = false;

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const refreshToken = (api.getState() as any)?.auth?.refreshToken;
        if (refreshToken) {
          const refreshResult = await rawBaseQuery(
            {
              url: "/customer/refresh",
              method: "POST",
              body: { refresh_token: refreshToken },
            },
            api,
            extraOptions,
          );
          if (refreshResult.data) {
            const data = refreshResult.data as any;
            api.dispatch({
              type: "auth/loginSuccess",
              payload: {
                token: data.access_token,
                refreshToken: data.refresh_token,
                expiryTimestamp: Date.now() + data.expires_in * 1000,
                user: (api.getState() as any)?.auth?.user ?? null,
              },
            });
            result = await rawBaseQuery(args, api, extraOptions);
          } else {
            api.dispatch({ type: "auth/logout" });
          }
        } else {
          api.dispatch({ type: "auth/logout" });
        }
      } finally {
        isRefreshing = false;
      }
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["HealthCard", "Notification"],
  endpoints: () => ({}),
});
