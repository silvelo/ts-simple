
import { isPair } from '../src/is-pair';

describe('Test isPair funtion', () => {
  test('Should return true', () => {
    const pair = isPair(2);
    expect(pair).toBeTruthy();
  });

  test('Should return false', () => {
    const noPair = isPair(3);
    expect(noPair).toBeFalsy();
  })


})