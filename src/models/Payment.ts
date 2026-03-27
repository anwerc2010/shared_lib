export interface PricingTier {
  new: number;
  renewal: number;
}

export interface PricingData {
  individual: PricingTier;
  family: PricingTier;
  currency: string;
}

export interface PricingResponse {
  success: boolean;
  data: PricingData;
}

export interface CreateOrderPayload {
  customer_id: number;
  health_card_id?: number;
  card_type: "individual" | "family";
  purpose: "new" | "renewal";
}

export interface OrderData {
  payment_id: number;
  razorpay_order_id: string;
  razorpay_key_id: string;
  amount: number;
  currency: string;
  requires_payment: boolean;
}

export interface CreateOrderResponse {
  success: boolean;
  data: OrderData;
}

export interface VerifyPaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface PaymentInstrument {
  method: string;
  upi?: {
    vpa: string;
  };
  card?: {
    last4: string;
    network: string;
  };
}

export interface PaymentRecord {
  id: number;
  payment_id?: number;
  razorpay_order_id: string;
  razorpay_payment_id?: string | null;
  amount: number;
  currency: string;
  status: "pending" | "paid" | "failed" | "refunded";
  health_card_id?: number;
  created_at: string;
  updated_at: string;
  notes?: {
    payment_instrument?: PaymentInstrument;
  };
}

export interface VerifyPaymentResult {
  payment: PaymentRecord;
  health_card_id: number;
  status: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  data: VerifyPaymentResult;
}

export interface PaymentStatusResponse {
  success: boolean;
  data: PaymentRecord;
}

export interface PaymentHistoryResponse {
  success: boolean;
  data: PaymentRecord[];
}
