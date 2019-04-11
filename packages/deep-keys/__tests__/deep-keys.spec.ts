
import { deepKeys } from '../src/deep-keys';

describe('Test deepKeys funtion', () => {
  const object = {
    a: 1,
    b: 2,
    c: 2
  };

  const nestedObject = {
    a: {
      aa: 1,
      bb: 2,
    },
    b: 2
  };

  test('Should return keys', () => {
    const keys = deepKeys(object);
    expect(keys.length).toBe(3);
    expect(keys).toEqual(['a', 'b', 'c']);
  })

  test('Should return nested keys', () => {
    const keys = deepKeys(nestedObject);
    expect(keys.length).toBe(3);
    expect(keys).toEqual(['a.aa', 'a.bb', 'b']);
  })


})