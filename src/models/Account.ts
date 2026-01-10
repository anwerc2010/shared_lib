import { User } from "./User";

export interface Account {
  id: string;
  name: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  error: boolean;
  token: string;
  customer: User;
}

export interface RegisterRequest {
  fullname: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  equipment_type: string;
  medical_reason: string;
  duration: string;
  reference_name: string;
  reference_contact: string;
  consent: boolean;
}

export interface RegisterResponse {
  error: boolean;
  message: string;
  customer: User;
}