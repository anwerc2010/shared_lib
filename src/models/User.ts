export interface User {
  id: number | string;
  fullname: string;
  email: string;
  phone: string;
  status: string;
  blood_group: string | null;
  date_of_birth: string | null;
  joining_date: string | null;
  card_number: string | null;
  aadhaar_number: string | null;
  allergies: string | null;
  chronic_conditions: string | null;
  emergency_contact_number: string | null;
  created_at?: string;
  updated_at?: string;
}
