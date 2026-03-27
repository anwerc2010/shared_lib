import { User } from "./User";

export interface Account {
  id: string;
  name: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  error: boolean;
  token: string;
  customer: User;
}

export interface RegisterRequest {
  fullname: string;
  age: number;
  gender: string;
  phone: string;
  date_of_birth: string;
  address: string;
  email: string;
  password: string;
  equipment_type: string;
  medical_reason: string;
  duration: string;
  reference_name: string;
  reference_contact: string;
  consent: boolean;
}

export interface FamilyMember2 {
  name: string;
  age: number;
  relation: string;
}

export interface HealthCardData {
  id: number;
  customer_id: number;
  card_holder_name: string;
  gender: string;
  age_category: string;
  membership_id: string;
  aadhaar_number: string;
  blood_group: string;
  date_of_issue: string;
  date_of_expiry: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  district: string;
  state_id: string | null;
  pincode: string | null;
  family_members: FamilyMember2[];
  family_head_image: string | null;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface HealthCard1 {
  health_card: HealthCardData;
  customer: User;
}

export interface RegisterResponse {
  error: boolean;
  message: string;
  data: HealthCard1[];
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  error?: boolean;
  message: string;
  errors?: {
    email: string[];
  };
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordResponse {
  error: boolean;
  message: string;
  errors?: {
    password?: string[];
  };
}

export interface UpdateCustomerPayload {
  fullname: string;
  email: string;
  phone: string;
  date_of_birth: string;
  joining_date: string;
  blood_group: string;
  allergies?: string;
  chronic_conditions?: string;
  emergency_contact_number?: string;
  card_number?: string;
  status?: string;
  password?: string;
}

export interface UpdateCustomerRequest {
  id: number | string;
  data: UpdateCustomerPayload;
}

export interface UpdateCustomerResponse {
  error: boolean;
  message: string;
  data: User;
}
