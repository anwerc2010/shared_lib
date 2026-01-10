export interface User {
  id: number | string;
  name?: string;
  fullname?: string;
  email: string;
  phone?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  blood_group?: string | null;
  date_of_birth?: string | null;
  joining_date?: string | null;
  card_number?: string | null;
  deleted_at?: string | null;
}