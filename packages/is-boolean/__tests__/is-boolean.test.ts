import { isBoolean } from '../src/is-boolean'; // Replace with the correct import path

describe('isBoolean', () => {
  test('should return true for "true" (strict mode)', () => {
    expect(isBoolean('true')).toBe(true);
  });

  test('should return true for "True" (strict mode)', () => {
    expect(isBoolean('True')).toBe(true);
  });

  test('should return true for "True" (strict mode)', () => {
    expect(isBoolean('TrUE')).toBe(true);
  });

  test('should return false for "false" (strict mode)', () => {
    expect(isBoolean('false')).toBe(false);
  });

  test('should return false for "false" (strict mode)', () => {
    expect(isBoolean('FaLsE')).toBe(false);
  });

  test('should return false for "false" (strict mode)', () => {
    expect(isBoolean('False')).toBe(false);
  });

  test('should return false for "false" (non-strict mode)', () => {
    expect(isBoolean('false', false)).toBe(false);
  });

  test('should return null for other values (strict mode)', () => {
    expect(isBoolean('randomValue')).toBeNull();
  });

  test('should return null for other values (non-strict mode)', () => {
    expect(isBoolean('randomValue', false)).toBe(false);
  });
});
