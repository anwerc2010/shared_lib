export interface CardRequestPayload {
  fullname: string;
  contact_number: string;
  health_issue: string;
  hospital_name: string;
  hospital_type: string;
  treatment_duration: string;
  reference_name: string;
  reference_contact: string;
  email: string;
  documents: string[];
  blood_group?: string;
  card_holder_name?: string;
  phone?: string;
}

export interface CardRequestData {
  request_date: string;
  customer_id: number;
  email: string;
  fullname: string;
  contact_number: string;
  health_issue: string;
  hospital_name: string;
  hospital_type: string;
  treatment_duration: string;
  documents: string[];
  reference_name: string;
  reference_contact: string;
  updated_at: string;
  created_at: string;
  id: number;
  request_id: string;
}

export interface CustomerData {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  status: string;
  created_at: string;
  updated_at: string;
  blood_group: string | null;
  date_of_birth: string;
  joining_date: string;
  card_number: string | null;
  allergies: string | null;
  chronic_conditions: string | null;
  emergency_contact_number: string | null;
}

export interface CardRequestResponseData {
  card_request: CardRequestData;
  customer: CustomerData;
}

export interface CardRequestResponse {
  error: boolean;
  message: string;
  data: CardRequestResponseData;
}

export interface UploadDocumentResponse {
  error: boolean;
  message: string;
  data: {
    url: string;
  };
}

export interface FamilyMember1 {
  id: string;
  name: string;
  relationship: string;
  aadhaar_number: string;
  blood_group: string;
  date_of_birth: string;
  gender: "Male" | "Female" | "Other";
  age_category: "Child" | "Adult";
}

export interface ApplyHealthCard {
  id?: number;
  customer_id?: number;
  card_holder_name: string;
  membership_id?: string;
  aadhaar_number: string;
  blood_group: string;
  date_of_issue?: string;
  date_of_expiry?: string;
  type: "individual" | "family";
  mode?: "walk_in" | "free" | "online" | null;
  status?: "active" | "expired" | "suspended" | "pending";
  family_members: FamilyMember1[];
  phone: string;
  email: string;
  address: string;
  state_id?: number | null;
  district_id?: number | null;
  block_id?: number | null;
  mandal_id?: number | null;
  gender: "Male" | "Female" | "Other";
  age_category: "Child" | "Adult";
  created_at?: string;
  updated_at?: string;
  customer?: CustomerData;
  family_head_image?: string;
  aadhaar_image?: string;
  address_image?: string;
  reference_name?: string | null;
  professions?: string | null;
}

export interface PaymentData {
  payment_id: number;
  razorpay_order_id: string;
  razorpay_key_id: string;
  amount: number;
  currency: string;
  requires_payment: boolean;
}

export interface ZohoSyncDetail {
  code: string;
  details: {
    id: string;
    Modified_Time?: string;
    Created_Time?: string;
    Modified_By?: { name: string; id: string };
    Created_By?: { name: string; id: string };
  };
  message: string;
  status: string;
}

export interface HealthCardResponseData {
  health_card: ApplyHealthCard | null;
  customer: CustomerData;
  requires_payment?: boolean;
  payment?: PaymentData;
  card_created?: boolean;
  payment_type?: "free" | "paid" | string;
  payment_status?: "free" | "pending" | "paid" | "failed" | string;
  can_apply?: boolean;
  can_pay?: boolean;
  active_payment_order_id?: string | null;
  card_request?: CardRequestData;
  zoho_synced?: boolean;
  zoho_message?: string;
  zoho_response?: { data: ZohoSyncDetail[] } | null;
}

export interface HealthCardResponse {
  error: boolean;
  message: string;
  data: HealthCardResponseData;
}
