export interface Customer {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  blood_group: string;
  date_of_birth: string;
  joining_date: string;
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
  city: string;
  state_id: string | null;
  pincode: string;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
  aadhaar_number: string;
  blood_group: string;
  date_of_birth: string;
  gender: string;
  age_category: string;
}

export interface FeaturedPartner {
  order: number;
  partner_details: string;
  type: string;
  duration: string | null;
  performance: string;
  status: string;
  image_url: string;
  learn_more_url: string;
}

export interface CardRequest {
  id: number;
  status: string;
  review_notes: string | null;
  requested_at: string;
  updated_at: string;
}

export interface Dashboard {
  error: boolean;
  customer: Customer;
  health_card: HealthCard | null;
  family_members: FamilyMember[];
  featured_partners: FeaturedPartner[];
  card_requests: CardRequest[];
}

