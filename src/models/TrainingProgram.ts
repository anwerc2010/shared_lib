export interface TrainingProgram {
    id: number;
    program_name: string;
    duration: string;
    schedule: string;
    total_seat: number;
    address: string;
    state: string;
    district: string;
    city: string;
    pincode: string;
    topics_covered: string;
    status: string;
    description: string;
    documents: any[];
    created_at: string;
    updated_at: string;
}

export interface MyRegistration {
    registration_id: number;
    customer_status: string;
    review_note: string | null;
    registered_at: string;
}

export interface TrainingProgramData {
    training_program: TrainingProgram;
    registrations_count: number;
    my_registrations: MyRegistration[];
}

export interface TrainingProgramsResponse {
    error: boolean;
    message: string;
    data: TrainingProgramData[];
}

export interface TrainingProgramRequest {
    program_name: string;
    duration: string;
    description: string;
    total_seat: number;
    schedule: string;
    topics_covered: string;
    status: string;
}
