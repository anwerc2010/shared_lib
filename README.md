# Shared API Library

A shared API library built with Redux Toolkit Query for Next.js and React Native applications. This package provides a centralized API configuration with authentication support and reusable API endpoints.

## Features

- 🔌 **Redux Toolkit Query Integration** - Built on RTK Query for efficient data fetching and caching
- 🔐 **Automatic Authentication** - Automatically includes Bearer tokens in API requests
- 🌐 **Next.js Compatible** - Works seamlessly with Next.js client and server components
- 📦 **TypeScript Support** - Fully typed with TypeScript
- 🎯 **Modular Design** - Easy to extend with custom API endpoints

## Building the Library

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm
- TypeScript (included as a dev dependency)
- tsup (included as a dev dependency)

### Build Steps

1. **Install Dependencies**

First, make sure all dependencies are installed:

```bash
npm install
```

This will install:
- Production dependencies: `@reduxjs/toolkit`, `react-redux`
- Development dependencies: `tsup`, `typescript`, `@types/node`

2. **Build the Library**

Run the build command:

```bash
npm run build
```

This command will:
- Compile TypeScript source files from `src/` to JavaScript
- Generate TypeScript type definitions (`.d.ts` files)
- Output everything to the `dist/` directory

**Expected Output:**
```
> psi/shared-api@1.0.0 build
> tsup src/index.ts --dts

CLI Building entry: src/index.ts
CLI Using tsconfig: tsconfig.json
CLI tsup v8.5.0
CLI Target: es2020
CJS Build start
CJS dist/index.js 1.87 KB
CJS ⚡️ Build success in 38ms
DTS Build start
DTS ⚡️ Build success in 1503ms
DTS dist/index.d.ts 668.00 B
```

3. **Verify Build**

After building, verify the output files exist:

```bash
ls -la dist/
```

You should see:
- `dist/index.js` - Compiled JavaScript (typically ~1.8-2 KB)
- `dist/index.d.ts` - TypeScript definitions (typically ~600-700 bytes)

**Example output:**
```
-rw-r--r--  1 user  staff  1910 Nov  6 17:38 index.js
-rw-r--r--  1 user  staff   668 Nov  6 17:38 index.d.ts
```

### Build from Local (For Local Development)

When developing locally and testing the package in another project, you can build and pack the library into a tarball for installation:

**Step 1: Build the Library**

First, compile the TypeScript source code:

```bash
# Run the build command to compile TypeScript and generate type definitions
npm run build
```

This creates the `dist/` directory with compiled JavaScript and TypeScript definitions.

**Step 2: Create Package Tarball**

Create a tarball (.tgz file) of the package:

```bash
# Create a tarball package file (e.g., psi-shared-api-1.0.0.tgz)
npm pack
```

This command:
- Reads `package.json` to determine the package name and version
- Creates a tarball file in the current directory (e.g., `psi-shared-api-1.0.0.tgz`)
- Includes all files specified in the `files` field of `package.json` (typically `dist/`, `src/`, `README.md`, etc.)

**Step 3: Install in Your Project**

From your consuming project (Next.js app, React Native app, etc.), install the package from the local tarball:

```bash
# Navigate to your project directory
cd /path/to/your/project

# Install the package from the local tarball file
# Replace '../shared-api' with the relative path to the shared-api directory
npm install @psi/shared-api@file:../shared-api/psi-shared-api-1.0.0.tgz --force
```

**Notes:**
- The `--force` flag is used to overwrite any existing installation
- Replace `../shared-api` with the actual relative path from your project to the shared-api directory
- Replace `psi-shared-api-1.0.0.tgz` with the actual tarball filename (it includes the version number)
- After installation, the package will be available in `node_modules/@psi/shared-api`

**Complete Example Workflow:**

```bash
# In the shared-api library directory
cd /path/to/shared-api

# Step 1: Build the library
npm run build

# Step 2: Create the tarball
npm pack
# Output: psi-shared-api-1.0.0.tgz

# Step 3: In your project directory
cd /path/to/your/project

# Step 4: Install from the tarball
npm install @psi/shared-api@file:../shared-api/psi-shared-api-1.0.0.tgz --force
```

**Troubleshooting Local Installation:**

- **File not found**: Make sure the path to the tarball is correct relative to your project directory
- **Version conflicts**: Use `--force` to overwrite existing installations
- **Changes not reflected**: After making changes to the library, rebuild (`npm run build`) and repack (`npm pack`) before reinstalling

### Troubleshooting

If you encounter build errors:

1. **TypeScript errors**: Make sure `tsconfig.json` exists and includes DOM types in the `lib` array:
   ```json
   {
     "compilerOptions": {
       "lib": ["ES2020", "DOM"]
     }
   }
   ```

2. **Missing dependencies**: Run `npm install` again to ensure all dependencies are installed

3. **Clean build**: Delete the `dist/` folder and rebuild:
   ```bash
   rm -rf dist/
   npm run build
   ```

### Development Build

For development with watch mode, you can modify the build script in `package.json`:

```json
{
  "scripts": {
    "build": "tsup src/index.ts --dts",
    "build:watch": "tsup src/index.ts --dts --watch"
  }
}
```

Then run:

```bash
npm run build:watch
```

### Publishing

If you're publishing to npm:

```bash
npm publish
```

Make sure to:
- Update the version in `package.json`
- Build the library first (`npm run build`)
- Ensure `dist/` is included in your package (check `package.json` files field)

## Installation

### In a Monorepo (Recommended)

If this is part of a monorepo, you can link it directly:

```bash
# From your Next.js or React Native app
npm install ../packages/shared-api
# or
yarn add ../packages/shared-api
```

### From npm Registry

```bash
npm install psi/shared-api
# or
yarn add psi/shared-api
# or
pnpm add psi/shared-api
```


## Using in Next.js

### 1. Environment Variables

Create a `.env.local` file in your Next.js project root:

```env
# For Next.js client-side usage (required for browser components)
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api

# For server-side usage (API routes, Server Components, etc.)
API_BASE_URL=http://localhost:3000/api
```

**Important Notes:**
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Use `NEXT_PUBLIC_API_BASE_URL` for client-side API calls (React components)
- Use `API_BASE_URL` for server-side API calls (API routes, Server Components)
- Never put sensitive data in `NEXT_PUBLIC_` variables

### 2. Redux Store Configuration

Create a Redux store file (e.g., `lib/store.ts`):

```typescript
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'psi/shared-api';

export const makeStore = () => {
  return configureStore({
    reducer: {
      api: baseApi.reducer,
      // Add your other reducers here
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
```

### 3. Redux Provider Setup

For Next.js App Router, create a providers component (e.g., `app/providers.tsx`):

```tsx
'use client';

import { Provider } from 'react-redux';
import { useRef } from 'react';
import { makeStore, AppStore } from '@/lib/store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
```

Then wrap your root layout:

```tsx
// app/layout.tsx
import StoreProvider from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
```

### 4. Using in Client Components

```tsx
'use client';

import { useLoginMutation, useGetProfileQuery } from 'psi/shared-api';

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const { data: profile } = useGetProfileQuery();

  const handleLogin = async () => {
    try {
      const result = await login({
        email: 'user@example.com',
        password: 'password',
      }).unwrap();
      console.log('Token:', result.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {profile && <p>Welcome, {profile.name}!</p>}
    </div>
  );
}
```

### 5. Using in Server Components

For server-side data fetching, you can use the API directly:

```tsx
// app/profile/page.tsx
import { baseApi } from 'psi/shared-api';

export default async function ProfilePage() {
  // Note: Server components can't use hooks
  // You'll need to use the API directly or fetch data server-side
  const response = await fetch(
    `${process.env.API_BASE_URL}/auth/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Get token from cookies/session
      },
    }
  );
  const user = await response.json();

  return <div>{user.name}</div>;
}
```

## Using in React Native

### 1. Environment Variables

React Native doesn't support `.env` files natively. You'll need to use a library like `react-native-config` or `react-native-dotenv`.

#### Option A: Using react-native-config

1. **Install react-native-config:**

```bash
npm install react-native-config
# or
yarn add react-native-config
```

2. **Create `.env` file in your React Native project root:**

```env
API_BASE_URL=http://localhost:3000/api
```

3. **Link the library (for older React Native versions):**

```bash
npx react-native link react-native-config
```

4. **Use in your code:**

```typescript
import Config from 'react-native-config';

const apiUrl = Config.API_BASE_URL;
```

#### Option B: Using react-native-dotenv

1. **Install react-native-dotenv:**

```bash
npm install react-native-dotenv
# or
yarn add react-native-dotenv
```

2. **Create `.env` file:**

```env
API_BASE_URL=http://localhost:3000/api
```

3. **Update babel.config.js:**

```javascript
module.exports = {
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
    }],
  ],
};
```

### 2. Redux Store Configuration

Create your Redux store (e.g., `src/store/index.ts`):

```typescript
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'psi/shared-api';

export const store = configureStore({
  reducer: {
    api: baseApi.reducer,
    // Add your other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 3. Provider Setup

Wrap your app with the Redux Provider (e.g., `App.tsx`):

```tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
// ... your other imports

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Your app screens */}
      </NavigationContainer>
    </Provider>
  );
}
```

### 4. Using in React Native Components

```tsx
import React from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import { useLoginMutation, useGetProfileQuery } from 'psi/shared-api';

export default function LoginScreen() {
  const [login, { isLoading, error }] = useLoginMutation();
  const { data: profile, isLoading: isLoadingProfile } = useGetProfileQuery();

  const handleLogin = async () => {
    try {
      const result = await login({
        email: 'user@example.com',
        password: 'password',
      }).unwrap();
      
      // Store token in AsyncStorage or your state management
      console.log('Login successful:', result.token);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  if (isLoadingProfile) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Button
        title={isLoading ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
        disabled={isLoading}
      />
      {error && <Text>Error: {JSON.stringify(error)}</Text>}
      {profile && <Text>Welcome, {profile.name}!</Text>}
    </View>
  );
}
```

### 5. Storing Authentication Token

For React Native, you'll typically store the token in AsyncStorage:

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setToken } from './src/store/slices/authSlice';

// After successful login
const result = await login({ email, password }).unwrap();
await AsyncStorage.setItem('authToken', result.token);
dispatch(setToken(result.token));
```

### 6. React Native Specific Considerations

- **Network Configuration:** Ensure your API URL is accessible from the device/emulator
  - For Android emulator: Use `10.0.2.2` instead of `localhost`
  - For iOS simulator: `localhost` works fine
  - For physical devices: Use your computer's IP address (e.g., `http://192.168.1.100:3000/api`)

- **Example `.env` for React Native:**

```env
# Android Emulator
API_BASE_URL=http://10.0.2.2:3000/api

# iOS Simulator
API_BASE_URL=http://localhost:3000/api

# Physical Device (replace with your IP)
API_BASE_URL=http://192.168.1.100:3000/api
```

## Usage

### Authentication API

The library provides authentication hooks for login and profile management.

#### Login

```tsx
import { useLoginMutation } from 'psi/shared-api';

function LoginComponent() {
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await login({ email, password }).unwrap();
      // result contains { token: string }
      // Store the token in your auth state/context
      console.log('Login successful:', result.token);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <button onClick={() => handleLogin('user@example.com', 'password')}>
      {isLoading ? 'Logging in...' : 'Login'}
    </button>
  );
}
```

#### Get User Profile

```tsx
import { useGetProfileQuery } from 'psi/shared-api';

function ProfileComponent() {
  const { data: user, isLoading, error } = useGetProfileQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
}
```

### Creating Custom API Endpoints

You can extend the base API with your own endpoints:

```typescript
import { baseApi } from 'psi/shared-api';
import { YourModel } from './models/YourModel';

export const yourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query<YourModel[], void>({
      query: () => '/items',
    }),
    createItem: builder.mutation<YourModel, Partial<YourModel>>({
      query: (body) => ({
        url: '/items',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetItemsQuery, useCreateItemMutation } = yourApi;
```

### Models

#### User

```typescript
import { User } from 'psi/shared-api';

const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
};
```

### Utilities

#### Date Formatting

```typescript
import { formatDate } from 'psi/shared-api';

const formatted = formatDate('2024-01-15'); // Returns formatted date string
```

## API Reference

### `baseApi`

The base API instance configured with:
- Automatic Bearer token injection from Redux state
- Environment-based base URL configuration
- RTK Query middleware support

**Reducer Path:** `'api'`

### `authApi`

Authentication endpoints:

- **`login`** - Mutation to authenticate a user
  - Input: `{ email: string; password: string }`
  - Output: `{ token: string }`

- **`getProfile`** - Query to fetch the current user's profile
  - Output: `User`

### Hooks

- `useLoginMutation()` - Hook for login mutation
- `useGetProfileQuery()` - Hook for fetching user profile

## Authentication Flow

The library automatically includes authentication tokens in API requests. The token is retrieved from your Redux state at the path `auth.token`. Make sure your auth reducer stores the token in this location:

```typescript
// Example auth reducer
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    // ... other auth state
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
```

## Testing

The library includes comprehensive unit tests using Jest and React Testing Library.

### Running Tests

**Run all tests:**
```bash
npm test
```

**Run tests in watch mode (for development):**
```bash
npm run test:watch
```

**Run tests with coverage report:**
```bash
npm run test:coverage
```

### Test Structure

Tests are located in the `src/__tests__/` directory:

```
src/__tests__/
├── setup.ts                    # Jest setup and global mocks
├── api/
│   ├── baseApi.test.ts         # Tests for base API configuration
│   └── authApi.test.ts         # Tests for authentication endpoints
├── models/
│   └── User.test.ts            # Tests for User model
└── utils/
    └── dateFormat.test.ts      # Tests for date formatting utility
```

### Test Coverage

The test suite covers:
- ✅ Base API configuration and reducer path
- ✅ Environment variable handling (client-side and server-side)
- ✅ Authentication token injection
- ✅ Authentication API endpoints (login and getProfile)
- ✅ Exported hooks (useLoginMutation, useGetProfileQuery)
- ✅ User model type safety
- ✅ Date formatting utility

### Writing New Tests

When adding new features, follow these guidelines:

1. **Create test files** in the appropriate `__tests__` subdirectory
2. **Use descriptive test names** that explain what is being tested
3. **Mock external dependencies** (APIs, browser APIs, etc.)
4. **Test both success and error cases**
5. **Keep tests isolated** - each test should be independent

**Example test structure:**
```typescript
import { yourFunction } from '../yourModule';

describe('yourFunction', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  it('should do something specific', () => {
    const result = yourFunction(input);
    expect(result).toBe(expected);
  });
});
```

### Test Configuration

The test configuration is in `jest.config.js`:
- Uses `ts-jest` for TypeScript support
- Uses `jsdom` environment for browser API mocking
- Collects coverage from `src/**/*.ts` (excluding test files)
- Setup file at `src/__tests__/setup.ts` for global mocks

## Development

### Project Structure

```
src/
├── api/
│   ├── baseApi.ts      # Base RTK Query API configuration
│   └── authApi.ts      # Authentication endpoints
├── models/
│   └── User.ts         # User type definition
├── utils/
│   └── dateFormat.ts   # Date formatting utility
└── index.ts            # Main export file
```

## Requirements

### For Next.js
- React 16.8+ (for hooks)
- Next.js 13+ (App Router) or Next.js 12+ (Pages Router)
- Redux Toolkit 2.0+
- React Redux 9.0+

### For React Native
- React Native 0.70+
- Redux Toolkit 2.0+
- React Redux 9.0+
- react-native-config or react-native-dotenv (for environment variables)
- @react-native-async-storage/async-storage (recommended for token storage)

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.