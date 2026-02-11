import { baseApi } from './baseApi';
import { VolunteerRegistrationPayload, VolunteerRegistrationResponse, VolunteerRegistrationsResponse } from '../models/Volunteer';

export const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getVolunteerRegistrations: builder.query<VolunteerRegistrationsResponse, void>({
            query: () => ({
                url: '/volunteer-registrations',
                method: 'GET',
            }),
        }),
        createVolunteerRegistration: builder.mutation<VolunteerRegistrationResponse, VolunteerRegistrationPayload>({
            query: (payload) => ({
                url: '/volunteer-registrations',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const { useGetVolunteerRegistrationsQuery, useCreateVolunteerRegistrationMutation } = volunteerApi;
