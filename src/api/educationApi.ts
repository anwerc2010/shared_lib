import { baseApi } from './baseApi';
import { RegistrationsResponse, RegistrationResponse, RegistrationRequest, RegistrationUpdateRequest } from '../models/Registration';

export const educationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRegistrations: builder.query<RegistrationsResponse, void>({
            query: () => ({
                url: '/education/registrations',
                method: 'GET',
            }),
        }),
        registerEducation: builder.mutation<RegistrationResponse, RegistrationRequest>({
            query: (body) => ({
                url: '/education/register',
                method: 'POST',
                body,
            }),
        }),
        updateRegistration: builder.mutation<RegistrationResponse, { registrationId: string; body: RegistrationUpdateRequest }>({
            query: ({ registrationId, body }) => ({
                url: `/education/registrations/${registrationId}`,
                method: 'PUT',
                body,
            }),
        }),
    }),
});

export const { useGetRegistrationsQuery, useRegisterEducationMutation, useUpdateRegistrationMutation } = educationApi;
