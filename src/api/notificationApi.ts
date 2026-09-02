import { baseApi } from "./baseApi";
import {
  DismissNotificationResponse,
  GetNotificationsResponse,
  MarkNotificationAsReadResponse,
  SaveNotificationTokenRequest,
  SaveNotificationTokenResponse,
} from "../models/Notification";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<GetNotificationsResponse, void>({
      query: () => ({
        url: "/notifications",
        method: "GET",
      }),
      providesTags: ["Notification"],
    }),
    markNotificationAsRead: builder.mutation<
      MarkNotificationAsReadResponse,
      number | string
    >({
      query: (notificationId) => ({
        url: `/staff/notifications/read/${notificationId}`,
        method: "POST",
      }),
      invalidatesTags: ["Notification"],
    }),
    dismissNotification: builder.mutation<
      DismissNotificationResponse,
      number | string
    >({
      query: (notificationId) => ({
        url: `/customer/notifications/${notificationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notification"],
    }),
    saveNotificationToken: builder.mutation<
      SaveNotificationTokenResponse,
      SaveNotificationTokenRequest
    >({
      query: (body) => ({
        url: "/customer/notification-token",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useMarkNotificationAsReadMutation,
  useDismissNotificationMutation,
  useSaveNotificationTokenMutation,
} = notificationApi;
