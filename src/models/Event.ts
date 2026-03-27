export interface Event {
  id: number;
  staff_id: number;
  event_name: string;
  event_type: string;
  status: string;
  event_date: string | null;
  total_capacity: number;
  start_time: string;
  end_time: string;
  location: string;
  latitude: string | null;
  longitude: string | null;
  map_url: string | null;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface MyEventRegistration {
  registration_id: number;
  customer_status: string;
  review_note: string | null;
  registered_at: string;
}

export interface EventData {
  event: Event;
  registrations_count: number;
  my_registrations: MyEventRegistration[];
}

export interface EventsResponse {
  error: boolean;
  message: string;
  data: EventData[];
}

export interface EventRegistrationRequest {
  event_id: number;
  full_name: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  age: string;
  email: string;
  address: string;
  participation_type: string;
  declaration: boolean;
  status?: string;
}

export interface EventRegistration {
  id: number;
  customer_id: number | null;
  event_id: number;
  full_name: string;
  date_of_birth: string;
  age: string;
  gender: string;
  phone_number: string;
  email: string;
  address: string;
  participation_type: string;
  declaration: boolean;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface EventRegistrationResponse {
  error: boolean;
  message: string;
  data: EventRegistration;
}
