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
    full_name: string;
    father_or_husband_name: string;
    dob: string;
    age: number;
    gender: string;
    mobile: string;
    email: string;
    alternate_number: string;
    current_address: string;
    city: string | null;
    district: string | null;
    state: string | null;
    pincode: string | null;
    id_proof_type: string;
    id_proof_number: string;
    total_family_members: number;
    earning_members: number;
    children_below_5: number;
    children_school_going: number;
    elderly_or_disabled_member: boolean;
    elderly_or_disabled_details: string | null;
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
    full_name: string;
    father_or_husband_name: string;
    dob: string;
    age: number;
    gender: string;
    mobile: string;
    alternate_number: string;
    current_address: string;
    email: string;
    id_proof_type: string;
    id_proof_number: string;
    total_family_members: number;
    earning_members: number;
    children_below_5: number;
    children_school_going: number;
    elderly_disabled_members: number;
    elderly_disabled_details: string;
    house_type: string;
    reason: string;
    items_needed: string[];
    documents: string[];
    state: string;
    city: string;
    district: string;
    pincode: string;
    declaration: boolean;
}

export interface ReliefCreateResponse {
    error: boolean;
    message: string;
    data: ReliefRequestWithCustomer;
}
