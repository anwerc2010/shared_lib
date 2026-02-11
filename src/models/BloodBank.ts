import { CustomerData } from './CardRequest';

export interface BloodRequestPayload {
    patient_name: string;
    patient_age: string;
    patient_gender: string;
    required_blood_group: string;
    units_required: number;
    required_datetime: string;
    urgency_level: string;
    hospital_name: string;
    doctor_name: string;
    doctor_contact: string;
    requester_name: string;
    requester_mobile: string;
    email: string;
    remarks: string;
    status: string;
    address: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
}

export interface BloodRequest {
    id: number;
    customer_id: number;
    email: string;
    patient_name: string;
    patient_age: string | number;
    patient_gender: string;
    required_blood_group: string;
    units_required: number;
    required_datetime: string;
    urgency_level: string;
    hospital_name: string;
    doctor_name: string;
    doctor_contact: string;
    requester_name: string;
    requester_mobile: string;
    address: string;
    state: string;
    district: string;
    city: string;
    pincode: string;
    remarks: string;
    status: string;
    review_notes?: string | null;
    request_id: string;
    created_at: string;
    updated_at: string;
}

export interface BloodRequestResponse {
    error: boolean;
    message: string;
    blood_request: BloodRequest;
    customer: CustomerData;
}

export interface BloodRequestWithCustomer {
    blood_request: BloodRequest;
    customer: CustomerData;
}

export interface BloodRequestsResponse {
    error: boolean;
    message: string;
    data: BloodRequestWithCustomer[];
}
