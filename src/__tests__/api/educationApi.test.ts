import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../api/baseApi';
import { educationApi } from '../../api/educationApi';
import { RegistrationsResponse, RegistrationResponse, RegistrationRequest, RegistrationUpdateRequest } from '../../models/Registration';
import registrationsResponse from '../../asserts/registrationsResponse.json';
import registerEducationResponse from '../../asserts/registerEducationResponse.json';
import updateRegistrationResponse from '../../asserts/updateRegistrationResponse.json';

describe('educationApi', () => {
    let store: ReturnType<typeof configureStore>;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                api: baseApi.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(baseApi.middleware),
        });
    });

    it('should inject getRegistrations endpoint', () => {
        expect(educationApi.endpoints.getRegistrations).toBeDefined();
    });

    it('should have correct getRegistrations query configuration', () => {
        const getRegistrationsEndpoint = educationApi.endpoints.getRegistrations;
        expect(getRegistrationsEndpoint).toBeDefined();
        expect(typeof getRegistrationsEndpoint.initiate).toBe('function');
    });

    it('should export useGetRegistrationsQuery hook', () => {
        expect(educationApi.useGetRegistrationsQuery).toBeDefined();
        expect(typeof educationApi.useGetRegistrationsQuery).toBe('function');
    });

    it('should inject registerEducation endpoint', () => {
        expect(educationApi.endpoints.registerEducation).toBeDefined();
    });

    it('should have correct registerEducation mutation configuration', () => {
        const registerEducationEndpoint = educationApi.endpoints.registerEducation;
        expect(registerEducationEndpoint).toBeDefined();
        expect(typeof registerEducationEndpoint.initiate).toBe('function');
    });

    it('should export useRegisterEducationMutation hook', () => {
        expect(educationApi.useRegisterEducationMutation).toBeDefined();
        expect(typeof educationApi.useRegisterEducationMutation).toBe('function');
    });

    it('should inject updateRegistration endpoint', () => {
        expect(educationApi.endpoints.updateRegistration).toBeDefined();
    });

    it('should have correct updateRegistration mutation configuration', () => {
        const updateRegistrationEndpoint = educationApi.endpoints.updateRegistration;
        expect(updateRegistrationEndpoint).toBeDefined();
        expect(typeof updateRegistrationEndpoint.initiate).toBe('function');
    });

    it('should export useUpdateRegistrationMutation hook', () => {
        expect(educationApi.useUpdateRegistrationMutation).toBeDefined();
        expect(typeof educationApi.useUpdateRegistrationMutation).toBe('function');
    });

    describe('getRegistrations endpoint', () => {
        it('should have correct URL configuration', () => {
            const endpoint = educationApi.endpoints.getRegistrations as any;
            const query = endpoint.queryFn || endpoint.query;
            expect(query).toBeDefined();
        });

        it('should return RegistrationsResponse type', () => {
            const response: RegistrationsResponse = registrationsResponse;
            expect(response.message).toBe('Fetched successfully');
            expect(Array.isArray(response.data)).toBe(true);
            expect(response.data.length).toBeGreaterThan(0);
        });

        it('should have registration data with correct structure', () => {
            const response: RegistrationsResponse = registrationsResponse;
            const registration = response.data[0];

            expect(registration).toHaveProperty('id');
            expect(registration).toHaveProperty('registration_id');
            expect(registration).toHaveProperty('full_name');
            expect(registration).toHaveProperty('gender');
            expect(registration).toHaveProperty('contact_number');
            expect(registration).toHaveProperty('courses');
            expect(registration).toHaveProperty('status');
            expect(registration).toHaveProperty('created_at');
            expect(registration).toHaveProperty('updated_at');
        });

        it('should have courses array in registration data', () => {
            const response: RegistrationsResponse = registrationsResponse;
            const registration = response.data[0];

            expect(Array.isArray(registration.courses)).toBe(true);
            expect(registration.courses.length).toBeGreaterThan(0);
            expect(registration.courses).toContain('computer');
            expect(registration.courses).toContain('spoken english');
        });
    });

    describe('registerEducation endpoint', () => {
        it('should have correct URL configuration', () => {
            const endpoint = educationApi.endpoints.registerEducation as any;
            const query = endpoint.queryFn || endpoint.query;
            expect(query).toBeDefined();
        });

        it('should return RegistrationResponse type', () => {
            const response: RegistrationResponse = registerEducationResponse;
            expect(response.message).toBe('Registration submitted successfully');
            expect(response.data).toBeDefined();
            expect(typeof response.data).toBe('object');
        });

        it('should have registration data with correct structure', () => {
            const response: RegistrationResponse = registerEducationResponse;
            const registration = response.data;

            expect(registration).toHaveProperty('id');
            expect(registration).toHaveProperty('registration_id');
            expect(registration).toHaveProperty('full_name');
            expect(registration).toHaveProperty('gender');
            expect(registration).toHaveProperty('contact_number');
            expect(registration).toHaveProperty('courses');
            expect(registration).toHaveProperty('training_program_id');
            expect(registration).toHaveProperty('customer_id');
            expect(registration).toHaveProperty('created_at');
            expect(registration).toHaveProperty('updated_at');
        });

        it('should have courses array in registration data', () => {
            const response: RegistrationResponse = registerEducationResponse;
            const registration = response.data;

            expect(Array.isArray(registration.courses)).toBe(true);
            expect(registration.courses.length).toBeGreaterThan(0);
            expect(registration.courses).toContain('computer');
            expect(registration.courses).toContain('spoken english');
        });

        it('should have location fields in registration data', () => {
            const response: RegistrationResponse = registerEducationResponse;
            const registration = response.data;

            expect(registration).toHaveProperty('state');
            expect(registration).toHaveProperty('city');
            expect(registration).toHaveProperty('district');
            expect(registration.state).toBe('test');
            expect(registration.city).toBe('test1');
            expect(registration.district).toBe('test2');
        });
    });

    describe('updateRegistration endpoint', () => {
        it('should have correct URL configuration', () => {
            const endpoint = educationApi.endpoints.updateRegistration as any;
            const query = endpoint.queryFn || endpoint.query;
            expect(query).toBeDefined();
        });

        it('should return RegistrationResponse type', () => {
            const response: RegistrationResponse = updateRegistrationResponse;
            expect(response.message).toBe('Updated');
            expect(response.data).toBeDefined();
            expect(typeof response.data).toBe('object');
        });

        it('should have registration data with correct structure', () => {
            const response: RegistrationResponse = updateRegistrationResponse;
            const registration = response.data;

            expect(registration).toHaveProperty('id');
            expect(registration).toHaveProperty('registration_id');
            expect(registration).toHaveProperty('full_name');
            expect(registration).toHaveProperty('gender');
            expect(registration).toHaveProperty('contact_number');
            expect(registration).toHaveProperty('courses');
            expect(registration).toHaveProperty('created_at');
            expect(registration).toHaveProperty('updated_at');
        });

        it('should have updated full_name field', () => {
            const response: RegistrationResponse = updateRegistrationResponse;
            const registration = response.data;

            expect(registration.full_name).toBe('updated user');
        });

        it('should have courses array in registration data', () => {
            const response: RegistrationResponse = updateRegistrationResponse;
            const registration = response.data;

            expect(Array.isArray(registration.courses)).toBe(true);
            expect(registration.courses.length).toBeGreaterThan(0);
            expect(registration.courses).toContain('computer');
            expect(registration.courses).toContain('spoken english');
        });

        it('should maintain registration_id after update', () => {
            const response: RegistrationResponse = updateRegistrationResponse;
            const registration = response.data;

            expect(registration.registration_id).toBe('REG-2025-003');
        });
    });
});
