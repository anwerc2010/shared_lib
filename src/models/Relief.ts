import { MyRegistration } from "./TrainingProgram";

export interface ReliefWelfare {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  duration: string;
  address: string;
  families_supported: number;
  items_provided: string[];
  allow_apply: boolean;
  allow_donate: boolean;
  latitude: string | null;
  longitude: string | null;
  priority: string;
  created_at: string;
  updated_at: string;
  registrations_count: number;
  map_url: string | null;
  registrations: any[];
}

export interface ReliefData {
  relief_welfare: ReliefWelfare;
  registrations_count: number;
  my_registrations: MyRegistration[];
  map_url: string | null;
}

export interface ReliefRequest {
  id: number;
  customer_id: number;
  request_id: string;
  relief_welfare_id?: number;
  relief_camp?: string | null;
  full_name: string;
  father_or_husband_name: string;
  dob: string;
  age: number | string;
  gender: string;
  mobile: string;
  email: string;
  alternate_number: string;
  current_address: string;
  state_id?: number | null;
  district_id?: number | null;
  block_id?: number | null;
  mandal_id?: number | null;
  city: string | null;
  district: string | null;
  state: string | null;
  mandal?: string | null;
  state_name?: string | null;
  district_name?: string | null;
  block_name?: string | null;
  mandal_name?: string | null;
  pincode: string | null;
  id_proof_type: string;
  id_proof_number: string;
  total_family_members: number | string;
  earning_members: number | string;
  children_below_5: number | string;
  children_school_going: number | string;
  elderly_disabled_members?: number | string;
  elderly_or_disabled_member?: boolean;
  elderly_disabled_details?: string | null;
  elderly_or_disabled_details?: string | null;
  house_type: string;
  reason: string;
  items_needed: string[];
  documents: string[];
  items_other_text: string | null;
  documents_submitted: string | null;
  status: string;
  review_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Customer1 {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  status: string;
  created_at: string;
  updated_at: string;
  blood_group: string | null;
  date_of_birth: string;
  joining_date: string | null;
  card_number: string | null;
}

export interface ReliefRequestWithCustomer {
  relief_request: ReliefRequest;
  customer: Customer1;
}

export interface ReliefRequestsResponse {
  error: boolean;
  message: string;
  data: ReliefData[];
}

export interface CreateReliefRequestPayload {
  relief_welfare_id?: number | null;
  relief_camp?: string;
  full_name: string;
  father_or_husband_name: string;
  dob: string;
  age: number | string;
  gender: string;
  mobile: string;
  alternate_number?: string;
  current_address: string;
  email: string;
  id_proof_type: string;
  id_proof_number: string;
  total_family_members: number | string;
  earning_members: number | string;
  children_below_5: number | string;
  children_school_going: number | string;
  elderly_disabled_members: number | string;
  elderly_disabled_details: string;
  house_type: string;
  reason: string;
  items_needed: string[];
  documents: string[];
  state_id: number | null;
  district_id: number | null;
  block_id: number | null;
  mandal_id: number | null;
  state?: string;
  city?: string;
  district?: string;
  mandal?: string;
  pincode?: string;
  customer_id?: number;
  status?: string;
  declaration: boolean;
}

export interface ReliefCreateResponse {
  error: boolean;
  message: string;
  data: ReliefRequestWithCustomer;
}
