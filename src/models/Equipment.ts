import { CustomerData } from './CardRequest';

export interface EquipmentRequestPayload {
    full_name: string;
    age: string;
    gender: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    equipment_type: string;
    medical_reason: string;
    duration: string;
    reference_name: string;
    reference_contact: string;
    customer_id: number;
    consent: boolean;
    status: string;
}

export interface EquipmentRequest {
    id: number;
    customer_id: number;
    full_name: string;
    email: string;
    age: string | number;
    gender: string;
    mobile: string;
    address: string;
    city: string;
    state: string;
    district: string;
    pincode: string;
    equipment_type: string;
    medical_reason: string;
    duration: string;
    reference_name: string;
    reference_contact: string;
    consent: boolean | number;
    status: string;
    request_id: string;
    review_notes: string | null;
    created_at: string;
    updated_at: string;
    customer?: CustomerData;
}

export interface EquipmentRequestResponse {
    message: string;
    data: EquipmentRequest;
    customer: CustomerData;
}

export interface EquipmentRequestsResponse {
    data: EquipmentRequest[];
}
