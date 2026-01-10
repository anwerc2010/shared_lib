import { User } from '../../models/User';

describe('User model', () => {
  it('should have required properties', () => {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    expect(user.id).toBe('1');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  it('should allow creating User objects', () => {
    const user: User = {
      id: '123',
      name: 'Jane Smith',
      email: 'jane@example.com',
    };

    expect(user).toMatchObject({
      id: '123',
      name: 'Jane Smith',
      email: 'jane@example.com',
    });
  });

  it('should enforce type safety', () => {
    const user: User = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
    };

    // TypeScript should enforce these types
    expect(typeof user.id).toBe('string');
    expect(typeof user.name).toBe('string');
    expect(typeof user.email).toBe('string');
  });
});

