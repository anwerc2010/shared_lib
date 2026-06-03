import { baseApi } from "./baseApi";
import { BenefitsResponse } from "../models/Benefit";

export const benefitsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBenefits: builder.query<BenefitsResponse, void>({
      query: () => ({
        url: "/benefits",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBenefitsQuery } = benefitsApi;
