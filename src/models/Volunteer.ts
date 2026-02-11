export interface VolunteerRegistrationPayload {
    full_name: string;
    date_of_birth: string;
    gender: string;
    phone_number: string;
    alternate_contact?: string;
    email: string;
    address: string;
    qualification: string;
    employment_status: string;
    occupation: string;
    volunteer_area: string;
    availability: string;
    previous_volunteering: string;
    motivation: string;
    declaration: boolean;
}

export interface VolunteerRegistration {
    id?: number;
    full_name: string;
    date_of_birth: string;
    gender: string;
    phone_number: string;
    alternate_contact?: string;
    email: string;
    address: string;
    qualification: string;
    employment_status: string;
    occupation: string;
    volunteer_area: string;
    availability: string;
    previous_volunteering: string;
    motivation: string;
    declaration: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface VolunteerRegistrationResponse {
    success: boolean;
    message: string;
    data: VolunteerRegistration;
}

export interface VolunteerRegistrationsResponse {
    success: boolean;
    message: string;
    data: VolunteerRegistration[];
}
