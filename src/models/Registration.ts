export interface Registration {
    id: number;
    registration_id: string;
    full_name: string;
    date_of_birth: string | null;
    age: number | null;
    gender: string;
    contact_number: string;
    parent_guardian_contact: string | null;
    marital_status: string | null;
    email: string | null;
    address: string | null;
    pincode: string | null;
    state?: string;
    city?: string;
    district?: string;
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
    training_program_id?: number;
    created_at: string;
    updated_at: string;
}

export interface RegistrationRequest {
    training_program_id: number;
    full_name: string;
    date_of_birth: string;
    age: number;
    gender: string;
    state: string;
    city: string;
    district: string;
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
}

export interface RegistrationUpdateRequest {
    full_name?: string;
    date_of_birth?: string;
    age?: number;
    gender?: string;
    state?: string;
    city?: string;
    district?: string;
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
}

export interface RegistrationResponse {
    message: string;
    data: Registration;
}

export interface RegistrationsResponse {
    message: string;
    data: Registration[];
}
