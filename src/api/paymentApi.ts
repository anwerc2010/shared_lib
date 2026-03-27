import { baseApi } from "./baseApi";
import {
  PricingResponse,
  CreateOrderPayload,
  CreateOrderResponse,
  VerifyPaymentPayload,
  VerifyPaymentResponse,
  PaymentStatusResponse,
  PaymentHistoryResponse,
} from "../models/Payment";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPricing: builder.query<PricingResponse, void>({
      query: () => ({
        url: "/customer/payments/pricing",
        method: "GET",
      }),
    }),
    createOrder: builder.mutation<CreateOrderResponse, CreateOrderPayload>({
      query: (payload) => ({
        url: "/customer/payments/create-order",
        method: "POST",
        body: payload,
      }),
    }),
    verifyPayment: builder.mutation<
      VerifyPaymentResponse,
      VerifyPaymentPayload
    >({
      query: (payload) => ({
        url: "/customer/payments/verify",
        method: "POST",
        body: payload,
      }),
    }),
    fetchPaymentStatus: builder.query<PaymentStatusResponse, number>({
      query: (healthCardId) => ({
        url: `/customer/payments/status/${healthCardId}`,
        method: "GET",
      }),
    }),
    fetchPaymentHistory: builder.query<PaymentHistoryResponse, void>({
      query: () => ({
        url: "/customer/payments/history",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useFetchPricingQuery,
  useCreateOrderMutation,
  useVerifyPaymentMutation,
  useFetchPaymentStatusQuery,
  useFetchPaymentHistoryQuery,
} = paymentApi;
