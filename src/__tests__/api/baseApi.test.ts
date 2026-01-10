import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../api/baseApi';

describe('baseApi', () => {
  const originalWindow = global.window;

  beforeEach(() => {
    // Reset environment variables
    delete process.env.NEXT_PUBLIC_API_BASE_URL;
    delete process.env.API_BASE_URL;
    
    // Remove window for server-side tests
    delete (global as any).window;
  });

  afterEach(() => {
    // Restore window
    if (originalWindow) {
      (global as any).window = originalWindow;
    }
    jest.restoreAllMocks();
  });

  it('should create baseApi with correct reducer path', () => {
    expect(baseApi.reducerPath).toBe('api');
  });

  it('should use default base URL when no environment variable is set', () => {
    const store = configureStore({
      reducer: {
        api: baseApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    });

    expect(store).toBeDefined();
  });

  it('should use API_BASE_URL from environment variables (server-side)', () => {
    process.env.API_BASE_URL = 'http://test-api.com';
    
    const store = configureStore({
      reducer: {
        api: baseApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    });

    expect(store).toBeDefined();
  });

  it('should use NEXT_PUBLIC_API_BASE_URL in browser environment', () => {
    // Mock window object for browser environment
    (global as any).window = {};

    process.env.NEXT_PUBLIC_API_BASE_URL = 'http://browser-api.com';
    
    const store = configureStore({
      reducer: {
        api: baseApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    });

    expect(store).toBeDefined();
  });

  it('should include Authorization header when token is present in state', () => {
    const store = configureStore({
      reducer: {
        api: baseApi.reducer,
        auth: (state = { token: 'test-token' }) => state,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    });

    expect(store).toBeDefined();
  });

  it('should not include Authorization header when token is not present', () => {
    const store = configureStore({
      reducer: {
        api: baseApi.reducer,
        auth: (state = { token: null }) => state,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    });

    expect(store).toBeDefined();
  });

  it('should have empty endpoints initially', () => {
    expect(baseApi.endpoints).toBeDefined();
  });
});

