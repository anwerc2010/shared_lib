import { formatDate } from '../../utils/dateFormat';

describe('formatDate', () => {
  const originalToLocaleDateString = Date.prototype.toLocaleDateString;

  beforeEach(() => {
    // Mock toLocaleDateString to return a consistent value
    Date.prototype.toLocaleDateString = jest.fn(() => '1/15/2024');
  });

  afterEach(() => {
    Date.prototype.toLocaleDateString = originalToLocaleDateString;
    jest.restoreAllMocks();
  });

  it('should format a valid date string', () => {
    const dateString = '2024-01-15';
    const result = formatDate(dateString);
    expect(result).toBe('1/15/2024');
    expect(Date.prototype.toLocaleDateString).toHaveBeenCalled();
  });

  it('should format an ISO date string', () => {
    const dateString = '2024-01-15T10:30:00.000Z';
    const result = formatDate(dateString);
    expect(result).toBe('1/15/2024');
  });

  it('should handle different date formats', () => {
    const dateString = '2024-12-25';
    formatDate(dateString);
    expect(Date.prototype.toLocaleDateString).toHaveBeenCalled();
  });

  it('should create a Date object from the input string', () => {
    const dateString = '2024-01-15';
    const dateConstructor = jest.fn((...args) => new (originalToLocaleDateString.constructor as any)(...args));
    formatDate(dateString);
    // Verify that a Date was created (indirectly through toLocaleDateString being called)
    expect(Date.prototype.toLocaleDateString).toHaveBeenCalled();
  });
});

