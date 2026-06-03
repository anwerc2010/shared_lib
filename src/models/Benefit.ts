export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface BenefitsResponse {
  error?: boolean;
  message?: string;
  total?: number;
  data: Benefit[];
}
