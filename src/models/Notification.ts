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
}

export interface GetNotificationsResponse {
  success: boolean;
  data: NotificationItem[];
}

export interface MarkNotificationAsReadResponse {
  success: boolean;
  message: string;
}
