import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../api/baseApi';
import { notificationApi } from '../../api/notificationApi';
import {
  GetNotificationsResponse,
  MarkNotificationAsReadResponse,
  SaveNotificationTokenResponse,
} from '../../models/Notification';
import notificationsResponse from '../../asserts/notificationsResponse.json';
import notificationReadResponse from '../../asserts/notificationReadResponse.json';
import notificationTokenResponse from '../../asserts/notificationTokenResponse.json';

describe('notificationApi', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        api: baseApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    });
  });

  it('should inject saveNotificationToken endpoint', () => {
    expect(notificationApi.endpoints.saveNotificationToken).toBeDefined();
  });

  it('should inject getNotifications endpoint', () => {
    expect(notificationApi.endpoints.getNotifications).toBeDefined();
  });

  it('should inject markNotificationAsRead endpoint', () => {
    expect(notificationApi.endpoints.markNotificationAsRead).toBeDefined();
  });

  it('should have correct saveNotificationToken mutation configuration', () => {
    const saveNotificationTokenEndpoint = notificationApi.endpoints.saveNotificationToken;
    expect(saveNotificationTokenEndpoint).toBeDefined();
    expect(typeof saveNotificationTokenEndpoint.initiate).toBe('function');
  });

  it('should export useSaveNotificationTokenMutation hook', () => {
    expect(notificationApi.useSaveNotificationTokenMutation).toBeDefined();
    expect(typeof notificationApi.useSaveNotificationTokenMutation).toBe('function');
  });

  it('should export useGetNotificationsQuery hook', () => {
    expect(notificationApi.useGetNotificationsQuery).toBeDefined();
    expect(typeof notificationApi.useGetNotificationsQuery).toBe('function');
  });

  it('should export useMarkNotificationAsReadMutation hook', () => {
    expect(notificationApi.useMarkNotificationAsReadMutation).toBeDefined();
    expect(typeof notificationApi.useMarkNotificationAsReadMutation).toBe('function');
  });

  describe('getNotifications endpoint', () => {
    it('should have correct getNotifications query configuration', () => {
      const getNotificationsEndpoint = notificationApi.endpoints.getNotifications;
      expect(getNotificationsEndpoint).toBeDefined();
      expect(typeof getNotificationsEndpoint.initiate).toBe('function');
    });

    it('should return GetNotificationsResponse type', () => {
      const response: GetNotificationsResponse = notificationsResponse;
      expect(response.error).toBe(false);
      expect(response.count).toBe(2);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBe(2);
    });

    it('should include notification fields with mixed is_read values', () => {
      const response: GetNotificationsResponse = notificationsResponse;
      const firstNotification = response.data[0];
      const secondNotification = response.data[1];

      expect(firstNotification).toHaveProperty('id');
      expect(firstNotification).toHaveProperty('title');
      expect(firstNotification).toHaveProperty('message');
      expect(firstNotification).toHaveProperty('image');
      expect(firstNotification).toHaveProperty('reason');
      expect(firstNotification).toHaveProperty('created_at');
      expect(firstNotification).toHaveProperty('is_read');
      expect(firstNotification).toHaveProperty('read_at');

      expect(firstNotification.is_read).toBe(false);
      expect(secondNotification.is_read).toBe(1);
    });
  });

  describe('saveNotificationToken endpoint', () => {
    it('should return SaveNotificationTokenResponse type', () => {
      const response: SaveNotificationTokenResponse = notificationTokenResponse;
      expect(response.error).toBe(false);
      expect(response.message).toBe('Notification token saved successfully');
      expect(response.data).toBeDefined();
    });

    it('should have notification token data with correct structure', () => {
      const response: SaveNotificationTokenResponse = notificationTokenResponse;

      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('customer_id');
      expect(response.data).toHaveProperty('notification_token');
      expect(response.data).toHaveProperty('created_at');
      expect(response.data).toHaveProperty('updated_at');
      expect(response.data.notification_token).toBe('fcm_device_token_here');
    });
  });

  describe('markNotificationAsRead endpoint', () => {
    it('should have correct markNotificationAsRead mutation configuration', () => {
      const markNotificationAsReadEndpoint = notificationApi.endpoints.markNotificationAsRead;
      expect(markNotificationAsReadEndpoint).toBeDefined();
      expect(typeof markNotificationAsReadEndpoint.initiate).toBe('function');
    });

    it('should return MarkNotificationAsReadResponse type', () => {
      const response: MarkNotificationAsReadResponse = notificationReadResponse;
      expect(response.error).toBe(false);
      expect(response.message).toBe('Notification marked as read');
    });
  });
});
