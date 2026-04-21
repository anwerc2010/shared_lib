export interface Profession {
  id: number;
  occupation_name: string;
  status: boolean;
}

export interface ProfessionsResponse {
  error: boolean;
  message: string;
  data: Profession[];
}
