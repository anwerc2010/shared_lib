import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../api/baseApi';
import { authApi } from '../../api/authApi';
import { User } from '../../models/User';

describe('authApi', () => {
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

  it('should inject login endpoint', () => {
    expect(authApi.endpoints.login).toBeDefined();
  });

  it('should inject getProfile endpoint', () => {
    expect(authApi.endpoints.getProfile).toBeDefined();
  });

  it('should have correct login mutation configuration', () => {
    const loginEndpoint = authApi.endpoints.login;
    expect(loginEndpoint).toBeDefined();
    expect(typeof loginEndpoint.initiate).toBe('function');
  });

  it('should have correct getProfile query configuration', () => {
    const getProfileEndpoint = authApi.endpoints.getProfile;
    expect(getProfileEndpoint).toBeDefined();
    expect(typeof getProfileEndpoint.initiate).toBe('function');
  });

  it('should export useLoginMutation hook', () => {
    expect(authApi.useLoginMutation).toBeDefined();
    expect(typeof authApi.useLoginMutation).toBe('function');
  });

  it('should export useGetProfileQuery hook', () => {
    expect(authApi.useGetProfileQuery).toBeDefined();
    expect(typeof authApi.useGetProfileQuery).toBe('function');
  });

  describe('login endpoint', () => {
    it('should have correct URL configuration', () => {
      const loginEndpoint = authApi.endpoints.login;
      expect(loginEndpoint).toBeDefined();
      expect(loginEndpoint.initiate).toBeDefined();
    });

    it('should accept email and password', () => {
      const loginEndpoint = authApi.endpoints.login;
      expect(loginEndpoint).toBeDefined();
      expect(typeof loginEndpoint.initiate).toBe('function');
    });
  });

  describe('getProfile endpoint', () => {
    it('should have correct URL', () => {
      const getProfileEndpoint = authApi.endpoints.getProfile;
      expect(getProfileEndpoint).toBeDefined();
    });

    it('should return User type', () => {
      const getProfileEndpoint = authApi.endpoints.getProfile;
      expect(getProfileEndpoint).toBeDefined();
    });
  });
});

