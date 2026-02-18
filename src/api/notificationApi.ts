import { baseApi } from './baseApi';
import {
  GetNotificationsResponse,
  MarkNotificationAsReadResponse,
  SaveNotificationTokenRequest,
  SaveNotificationTokenResponse,
} from '../models/Notification';

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<GetNotificationsResponse, void>({
      query: () => ({
        url: '/notifications',
        method: 'GET',
      }),
    }),
    markNotificationAsRead: builder.mutation<MarkNotificationAsReadResponse, number | string>({
      query: (notificationId) => ({
        url: `/notifications/${notificationId}/read`,
        method: 'POST',
      }),
    }),
    saveNotificationToken: builder.mutation<SaveNotificationTokenResponse, SaveNotificationTokenRequest>({
      query: (body) => ({
        url: '/customer/notification-token',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useMarkNotificationAsReadMutation,
  useSaveNotificationTokenMutation,
} = notificationApi;
