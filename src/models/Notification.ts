export interface SaveNotificationTokenRequest {
  notification_token: string;
}

export interface NotificationTokenData {
  id: number;
  customer_id: number;
  notification_token: string;
  created_at: string;
  updated_at: string;
}

export interface SaveNotificationTokenResponse {
  error: boolean;
  message: string;
  data: NotificationTokenData;
}

export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  image: string | null;
  reason: string;
  created_at: string;
  is_read: boolean | number;
  read_at: string | null;
}

export interface GetNotificationsResponse {
  error: boolean;
  count: number;
  data: NotificationItem[];
}

export interface MarkNotificationAsReadResponse {
  error: boolean;
  message: string;
}
