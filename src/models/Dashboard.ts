export interface DashboardCustomer {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  blood_group: string | null;
  date_of_birth: string | null;
  joining_date: string | null;
  card_number: string | null;
}

export interface HealthCard {
  id: number;
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
  city: string | null;
  state_id: number;
  pincode: string | null;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface FamilyMember {
  name: string;
  relationship: string;
  date_of_birth: string;
  aadhaar_number: string;
  blood_group: string;
  gender: string;
  age_category: string;
}

export interface FeaturedPartner {
  order: number;
  partner_details: string;
  type: string;
  duration: string | null;
  performance: string | null;
  status: string;
  image_url: string;
  learn_more_url: string;
}

export interface CardRequest {
  id: number;
  status: string;
  requested_at?: string;
  updated_at?: string;
}

export interface Dashboard {
  error: boolean;
  customer: DashboardCustomer;
  health_card: HealthCard | null;
  family_members: FamilyMember[];
  featured_partners: FeaturedPartner[];
  card_requests: CardRequest[];
}
