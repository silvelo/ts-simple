import { str2Bool } from '../src/str-2-bool';

describe('str2Bool', () => {
  test('should return true for "true" (strict mode)', () => {
    expect(str2Bool('true')).toBe(true);
  });

  test('should return true for "True" (strict mode)', () => {
    expect(str2Bool('True')).toBe(true);
  });

  test('should return true for "True" (strict mode)', () => {
    expect(str2Bool('TrUE')).toBe(true);
  });

  test('should return false for "false" (strict mode)', () => {
    expect(str2Bool('false')).toBe(false);
  });

  test('should return false for "false" (strict mode)', () => {
    expect(str2Bool('FaLsE')).toBe(false);
  });

  test('should return false for "false" (strict mode)', () => {
    expect(str2Bool('False')).toBe(false);
  });

  test('should return false for "false" (non-strict mode)', () => {
    expect(str2Bool('false', false)).toBe(false);
  });

  test('should return null for other values (strict mode)', () => {
    expect(str2Bool('randomValue')).toBeNull();
  });

  test('should return null for other values (non-strict mode)', () => {
    expect(str2Bool('randomValue', false)).toBe(false);
  });
});
