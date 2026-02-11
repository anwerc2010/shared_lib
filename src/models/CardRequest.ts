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
    blood_group: string;
    date_of_birth: string;
    joining_date: string;
    card_number: string;
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
    gender: "Male" | "Female";
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
    status?: "active" | "expired" | "suspended";
    state: string | null;
    family_members: FamilyMember1[];
    phone: string;
    email: string;
    address: string;
    city: string;
    district: string;
    pincode: string;
    gender: "Male" | "Female";
    age_category: "Child" | "Adult";
    created_at?: string;
    updated_at?: string;
    customer?: CustomerData;
    family_head_image?: string;
    state_id?: number | null;

}

export interface HealthCardResponse {
    error: boolean;
    message: string;
    data: ApplyHealthCard;
}
