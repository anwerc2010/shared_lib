export interface Donor {
    full_name: string;
    age: number;
    gender: string;
    blood_group: string;
    mobile_number: string;
    address: string;
    city: string;
    state: string;
    district: string;
    pincode: string;
    willing_to_donate: boolean;
    available_for_emergency: boolean;
    health_issue_or_medication: boolean;
    consent_share_contact: boolean;
    status: string;
    status_note: string | null;
    updated_at: string;
    created_at: string;
    id: number;
    donor_id: string;
}

export interface DonorListResponse {
    message: string;
    total: number;
    data: Donor[];
}
