export interface HealthCardAdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface HealthCardLoginRequest {
  username: string;
  password: string;
}

export interface HealthCardLoginResponse {
  error: boolean;
  message: string;
  token: string;
  permissions: string[];
}

export type HealthCardStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'active'
  | 'expired'
  | 'suspended';

export type HealthCardStatusUpdate = 'approved' | 'rejected' | 'pending';

export type HealthCardTab =
  | 'all'
  | 'family'
  | 'expired'
  | 'expiring'
  | 'pending'
  | 'renewal'
  | 'approved'
  | 'rejected';

export interface HealthCardFamilyMember {
  id: string;
  name: string;
  relationship: string;
  aadhaar_number?: string;
  blood_group: string;
  date_of_birth?: string;
  gender: 'Male' | 'Female';
  age_category: 'Child' | 'Adult';
}

export interface HealthCardAdminCustomer {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  status?: string;
  aadhaar_number?: string;
}

export interface HealthCardItem {
  id: number;
  card_holder_name: string;
  membership_id?: string | null;
  aadhaar_number: string;
  blood_group: string;
  type: 'individual' | 'family';
  status: HealthCardStatus;
  phone: string;
  email: string;
  address: string;
  state_id?: number | null;
  district_id?: number | null;
  block_id?: number | null;
  mandal_id?: number | null;
  gender: 'Male' | 'Female';
  age_category: 'Child' | 'Adult';
  mode?: 'walk_in' | 'free' | 'online' | null;
  card_category?: 'new' | 'renewal' | string | null;
  reference_name?: string | null;
  date_of_issue?: string | null;
  date_of_expiry?: string | null;
  rejection_reason?: string | null;
  family_members?: HealthCardFamilyMember[];
  customer?: HealthCardAdminCustomer | null;
  created_at: string;
  updated_at: string;
}

export interface HealthCardListItemRaw {
  health_card: HealthCardItem;
  customer: HealthCardAdminCustomer | null;
}

export interface HealthCardListMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  tab: HealthCardTab;
}

export interface HealthCardListResponse {
  error: boolean;
  message: string;
  data: HealthCardListItemRaw[];
  meta: HealthCardListMeta;
  counts: Record<string, number>;
}

export interface UpdateHealthCardStatusRequest {
  id: number;
  status: HealthCardStatusUpdate;
}

export interface UpdateHealthCardStatusResponse {
  error: boolean;
  message: string;
  status: string;
}

// PUT /health-card/{id}/status only accepts approved/rejected/pending and
// always sends a status-change email — wrong tool for suspend/activate.
// The general PUT /health-card/update/{id} endpoint accepts any status
// string (validated as 'sometimes|string' server-side) and sends no email,
// which is what the web admin actually uses for its "Suspended" option.
export type HealthCardLifecycleStatus = 'active' | 'suspended';

export interface SetHealthCardLifecycleStatusRequest {
  id: number;
  status: HealthCardLifecycleStatus;
}

export interface SetHealthCardLifecycleStatusResponse {
  error: boolean;
  message: string;
  data: {
    health_card: HealthCardItem;
    customer: HealthCardAdminCustomer | null;
  };
}

export interface HealthCardsByStatusResponse {
  error: boolean;
  status: string;
  count: number;
  data: HealthCardItem[];
}

export interface HealthCardStatusCountsResponse {
  error: boolean;
  message: string;
  data: {
    pending: number;
    approved: number;
    rejected: number;
    active: number;
    expired: number;
  };
}

export interface HealthCardSearchMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface HealthCardSearchResponse {
  error: boolean;
  message: string;
  data: HealthCardItem[];
  meta: HealthCardSearchMeta;
}

export interface HealthCardAdminReportsData {
  status_counts: {
    pending: number;
    approved: number;
    active: number;
    rejected: number;
    expired: number;
    total: number;
  };
  mode_counts: {
    walk_in: number;
    online: number;
    free: number;
  };
  category_counts: {
    new_cards: number;
    renewals: number;
  };
  today_count: number;
  this_month_count: number;
}

export interface HealthCardAdminReportsResponse {
  error: boolean;
  message: string;
  data: HealthCardAdminReportsData;
}

export interface HealthCardByIdResponse {
  error: boolean;
  message: string;
  data: {
    health_card: HealthCardItem;
    customer: HealthCardAdminCustomer | null;
    renewals: unknown[];
  };
}

// GET /health-cards/analytics — dashboard summary. active_cards here is
// date-aware (date_of_expiry >= today AND status NOT IN suspended/pending),
// distinct from HealthCardAdminReportsData.status_counts.active which is a
// raw count of rows where the status column literally says "active" (can
// include cards that are expired by date but never had status updated).
export interface HealthCardAnalyticsData {
  new_cards_this_month: number;
  renewal_cards_this_month: number;
  total_cards: number;
  expiring_cards_this_month: number;
  active_cards: number;
  total_revenue: number;
  free_camp_cards: number;
  new_cards_today: number;
  renewal_cards_today: number;
  rejected_cards_today: number;
}

export type HealthCardAnalyticsResponse = HealthCardAnalyticsData;
