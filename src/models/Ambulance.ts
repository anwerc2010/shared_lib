export interface Ambulance {
    id: number;
    staff_id: number;
    service_name: string;
    vehicle_type: string;
    contact: string;
    email: string | null;
    service_area: string;
    response_time: string;
    company: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface AmbulancesResponse {
    error: boolean;
    message: string;
    data: Ambulance[];
}
