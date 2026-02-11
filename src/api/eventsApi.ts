import { baseApi } from './baseApi';
import { EventsResponse, EventRegistrationRequest, EventRegistrationResponse } from '../models/Event';

export const eventsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query<EventsResponse, void>({
            query: () => ({
                url: '/events',
                method: 'GET',
            }),
        }),
        createEventRegistration: builder.mutation<EventRegistrationResponse, EventRegistrationRequest>({
            query: (payload) => ({
                url: '/event-registrations',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const { useGetEventsQuery, useCreateEventRegistrationMutation } = eventsApi;
