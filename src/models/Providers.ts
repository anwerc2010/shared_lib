export interface Provider {
    id: number;
    staff_id: number;
    provider_name: string;
    type: string;
    sub_type: string;
    address: string;
    state: string;
    district: string;
    city: string;
    pincode: string;
    phone: string;
    email: string;
    specialities: string[];
    benefits: string;
    latitude: number;
    longitude: number;
    map_url: string;
    rating: number;
    distance_km?: number;
    created_at: string;
    updated_at: string;
}

export interface ProvidersResponse {
    error: boolean;
    message: string;
    total: number;
    data: Provider[];
}

export interface LocationProviderParams {
    latitude: number;
    longitude: number;
    radius: number;
}
