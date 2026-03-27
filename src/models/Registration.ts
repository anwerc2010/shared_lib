export interface Registration {
  id: number;
  registration_id: string;
  full_name: string;
  date_of_birth: string | null;
  age: number | string | null;
  gender: string;
  contact_number: string;
  parent_guardian_contact: string | null;
  marital_status: string | null;
  email: string | null;
  address: string | null;
  pincode: string | null;
  state_id?: number | null;
  district_id?: number | null;
  block_id?: number | null;
  mandal_id?: number | null;
  state?: string;
  city?: string;
  district?: string;
  mandal?: string;
  state_name?: string;
  district_name?: string;
  block_name?: string;
  mandal_name?: string;
  guardian_name: string | null;
  id_proof_type: string | null;
  id_proof_number: string | null;
  highest_qualification: string | null;
  other_qualification: string | null;
  medium_of_instruction: string | null;
  other_medium: string | null;
  school_college_name: string | null;
  school_college_location: string | null;
  education_gap_reason: string | null;
  courses: string[];
  other_course: string | null;
  status?: string;
  status_note?: string | null;
  customer_id?: number;
  customer_search?: string;
  training_program_id?: number | string;
  created_at: string;
  updated_at: string;
}

export interface RegistrationRequest {
  training_program_id: number | string;
  full_name: string;
  date_of_birth: string;
  age: number | string;
  gender: string;
  state: string;
  city: string;
  district: string;
  mandal?: string;
  state_id?: number | null;
  district_id?: number | null;
  block_id?: number | null;
  mandal_id?: number | null;
  contact_number: string;
  parent_guardian_contact: string;
  marital_status: string;
  email: string;
  address: string;
  pincode: string;
  guardian_name: string;
  id_proof_type: string;
  id_proof_number: string;
  highest_qualification: string;
  other_qualification?: string;
  medium_of_instruction: string;
  other_medium?: string;
  school_college_name: string;
  school_college_location: string;
  education_gap_reason: string;
  courses: string[];
  other_course?: string;
  customer_id?: number;
  customer_search?: string;
}

export interface RegistrationUpdateRequest {
  training_program_id?: number | string;
  full_name?: string;
  date_of_birth?: string;
  age?: number | string;
  gender?: string;
  state_id?: number | null;
  district_id?: number | null;
  block_id?: number | null;
  mandal_id?: number | null;
  state?: string;
  city?: string;
  district?: string;
  mandal?: string;
  contact_number?: string;
  parent_guardian_contact?: string;
  marital_status?: string;
  email?: string;
  address?: string;
  pincode?: string;
  guardian_name?: string;
  id_proof_type?: string;
  id_proof_number?: string;
  highest_qualification?: string;
  other_qualification?: string;
  medium_of_instruction?: string;
  other_medium?: string;
  school_college_name?: string;
  school_college_location?: string;
  education_gap_reason?: string;
  courses?: string[];
  other_course?: string;
  customer_id?: number;
  customer_search?: string;
}

export interface RegistrationResponse {
  message: string;
  data: Registration;
}

export interface RegistrationsResponse {
  message: string;
  data: Registration[];
}
